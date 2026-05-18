import { asyncHandler } from "../middlewares/asyncHandler.middleware.js";
import ErrorHandler from "../middlewares/error.middleware.js";
import crypto from "crypto";

import Order from "../models/order.model.js";
import Food from "../models/food.model.js";
import Notification from "../models/notification.model.js";

import { io } from "../server.js";
//await order.save();
// const order = await Order.findById(
//     req.params.id
// );

// order.orderStatus = status;

// await order.save();



// // CREATE NOTIFICATION
// const notification =
// await Notification.create({

//     user: order.user,

//     title: "Order Update",

//     message:
//       `Your order ${order.tokenNumber} is now ${status}`,

//     type: "order",

//     order: order._id

// });



// // REALTIME EMIT
// io.to(order.user.toString()).emit(
//     "newNotification",
//     notification
// );/*
// CREATE NOTIFICATION
// const notification =
//     await Notification.create({

//         user: order.user,

//         title: "Order Update",

//         message:
//             `Your order ${order.tokenNumber} is now ${status}`,

//         type: "order",

//         order: order._id

//     });



// // REALTIME EMIT
// io.to(order.user.toString()).emit(
//     "newNotification",
//     {
//         success: true,
//         notification
//     }
// );*/

//===================================
//  GENERATE UNIQUE TOKEN
//====================================
const generateOrderToken = () => {

    return crypto
        .randomBytes(2)
        .toString("hex")
        .toUpperCase();
};


// ======================================
// CREATE ORDER
// ======================================
export const createOrder = asyncHandler(
    async (req, res, next) => {

        const {
            items,
            paymentMethod,
            specialInstructions,
            orderType
        } = req.body;

        // USER
        const userId = req.user._id;

        // VALIDATION
        if (!items || items.length === 0) {

            return next(
                new ErrorHandler(
                    "Please add items to order",
                    400
                )
            );
        }

        // TOTAL AMOUNT
        let totalAmount = 0;

        // VALIDATED ITEMS
        const validatedItems = [];

        // LOOP THROUGH ITEMS
        for (const item of items) {

            const food = await Food.findById(item.food);

            if (!food) {

                return next(
                    new ErrorHandler(
                        "Food item not found",
                        404
                    )
                );
            }

            if (!food.isAvailable) {

                return next(
                    new ErrorHandler(
                        `${food.name} is unavailable`,
                        400
                    )
                );
            }

            const itemPrice =
                food.price * item.quantity;

            totalAmount += itemPrice;

            validatedItems.push({
                food: food._id,
                quantity: item.quantity,
                price: food.price
            });
            io.emit("newOrder", order);
        }
/*
        // GENERATE TOKEN NUMBER
        const lastOrder = await Order.findOne()
            .sort({ createdAt: -1 });

        let tokenNumber = 1;

        if (lastOrder) {
            tokenNumber =
                lastOrder.tokenNumber + 1;
        }
*/
        // GENERATE TOKEN NUMBER
        let tokenNumber;

       let existingOrder;

     do {

           tokenNumber = generateOrderToken();

            existingOrder = await Order.findOne({
            tokenNumber
    });

       } while(existingOrder);


        // CREATE ORDER
        const order = await Order.create({

            user: userId,

            tokenNumber,

            items: validatedItems,

            totalAmount,

            paymentMethod,

            specialInstructions,

            orderType

        });

        // POPULATE DATA
        const populatedOrder =
            await Order.findById(order._id)
                .populate("user", "userName email")
                .populate("items.food");

        res.status(201).json({
            success: true,
            message: "Order placed successfully",
            order: populatedOrder
        });
    }
);



// ======================================
// GET MY ORDERS
// ======================================
export const getMyOrders = asyncHandler(
    async (req, res, next) => {

        const orders = await Order.find({
            user: req.user._id
        })

            .populate("items.food")

            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            totalOrders: orders.length,
            orders
        });
    }
);

// ======================================
// TRACK ORDER BY TOKEN
// ======================================
export const trackOrderByToken = asyncHandler(
    async (req, res, next) => {

        const { token } = req.params;

        // FIND ORDER
        const order = await Order.findOne({
            tokenNumber: token
        })

        .populate("user", "userName email")

        .populate("items.food");

        // CHECK ORDER
        if (!order) {

            return next(
                new ErrorHandler(
                    "Invalid token or order not found",
                    404
                )
            );
        }

        res.status(200).json({
            success: true,
            order
        });
    }
);

// ======================================
// GET SINGLE ORDER
// ======================================
export const getSingleOrder = asyncHandler(
    async (req, res, next) => {

        const order = await Order.findById(
            req.params.id
        )

            .populate("user", "userName email")

            .populate("items.food");

        if (!order) {

            return next(
                new ErrorHandler(
                    "Order not found",
                    404
                )
            );
        }

        res.status(200).json({
            success: true,
            order
        });
    }
);



// ======================================
// CANCEL ORDER
// ======================================
export const cancelOrder = asyncHandler(
    async (req, res, next) => {

        const { cancelReason } = req.body;

        const order = await Order.findById(
            req.params.id
        );

        if (!order) {

            return next(
                new ErrorHandler(
                    "Order not found",
                    404
                )
            );
        }

        // OWNER CHECK
        if (
            order.user.toString() !==
            req.user._id.toString()
        ) {

            return next(
                new ErrorHandler(
                    "Unauthorized access",
                    403
                )
            );
        }

        // STATUS CHECK
        if (
            order.orderStatus === "Completed"
        ) {

            return next(
                new ErrorHandler(
                    "Completed order cannot be cancelled",
                    400
                )
            );
        }

        order.orderStatus = "Cancelled";

        order.cancelReason = cancelReason;

        order.isActive = false;

        await order.save();

        res.status(200).json({
            success: true,
            message: "Order cancelled successfully",
            order
        });
    }
);



// ======================================
// GET ACTIVE ORDERS
// ======================================
export const getActiveOrders = asyncHandler(
    async (req, res, next) => {

        const orders = await Order.find({
            isActive: true
        })

            .populate("user", "userName")

            .populate("items.food")

            .sort({ createdAt: 1 });

        res.status(200).json({
            success: true,
            totalOrders: orders.length,
            orders
        });
    }
);



// ======================================
// UPDATE ORDER STATUS
// ======================================
export const updateOrderStatus =
asyncHandler(async (req, res, next) => {

    const { status } = req.body;



    // FIND ORDER
    const order = await Order.findById(
        req.params.id
    );



    // CHECK ORDER
    if (!order) {

        return next(
            new ErrorHandler(
                "Order not found",
                404
            )
        );
    }



    // UPDATE STATUS
    order.orderStatus = status;



    // SAVE
    await order.save();



    // CREATE NOTIFICATION
    const notification =
        await Notification.create({

            user: order.user,

            title: "Order Update",

            message:
                `Your order ${order.tokenNumber} is now ${status}`,

            type: "order",

            order: order._id

        });



    // REALTIME SOCKET EMIT
    io.to(order.user.toString()).emit(
        "newNotification",
        notification
    );



    res.status(200).json({
        success: true,
        message: "Order status updated",
        order
    });

});
// ======================================
// GET TODAY ORDERS
// ======================================
export const getTodayOrders = asyncHandler(
    async (req, res, next) => {

        const startOfDay = new Date();

        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date();

        endOfDay.setHours(23, 59, 59, 999);

        const orders = await Order.find({

            createdAt: {
                $gte: startOfDay,
                $lte: endOfDay
            }

        })

            .populate("user", "userName")

            .populate("items.food");

        res.status(200).json({
            success: true,
            totalOrders: orders.length,
            orders
        });
    }
);