import mongoose from "mongoose";



// ======================================
// ORDER ITEM SCHEMA
// ======================================
const orderItemSchema = new mongoose.Schema({

    food: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food",
        required: true
    },

    quantity: {
        type: Number,
        required: true,
        min: 1
    },

    price: {
        type: Number,
        required: true
    }

}, {
    _id: false
});



// ======================================
// ORDER SCHEMA
// ======================================
const orderSchema = new mongoose.Schema({

    // USER WHO PLACED ORDER
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },



    // UNIQUE TOKEN NUMBER
    tokenNumber: {
    type: String,
    required: true,
    unique: true
},



    // ORDER ITEMS
    items: {
        type: [orderItemSchema],
        required: true
    },



    // TOTAL BILL
    totalAmount: {
        type: Number,
        required: true,
        min: 0
    },



    // ORDER STATUS
    orderStatus: {
        type: String,

        enum: [
            "Placed",
            "Preparing",
            "Ready",
            "Completed",
            "Cancelled"
        ],

        default: "Placed"
    },



    // PAYMENT STATUS
    paymentStatus: {
        type: String,

        enum: [
            "Pending",
            "Paid",
            "Failed"
        ],

        default: "Pending"
    },



    // PAYMENT METHOD
    paymentMethod: {
        type: String,

        enum: [
            "Cash",
            "UPI",
            "Card"
        ],

        default: "Cash"
    },



    // SPECIAL NOTE
    specialInstructions: {
        type: String,
        trim: true
    },



    // ESTIMATED PREPARATION TIME
    estimatedTime: {
        type: Number,
        default: 15 // minutes
    },



    // ORDER READY TIME
    readyAt: {
        type: Date
    },



    // ORDER COMPLETED TIME
    completedAt: {
        type: Date
    },



    // CANCEL REASON
    cancelReason: {
        type: String
    },



    // ORDER TYPE
    orderType: {
        type: String,

        enum: [
            "Dine-In",
            "Takeaway"
        ],

        default: "Takeaway"
    },



    // ACTIVE QUEUE FLAG
    isActive: {
        type: Boolean,
        default: true
    }

}, {
    timestamps: true
});



// ======================================
// AUTO COMPLETE ACTIVE STATUS
// ======================================
orderSchema.pre(
    "save",
    function(next){

        if(
            this.orderStatus === "Completed" ||
            this.orderStatus === "Cancelled"
        ){
            this.isActive = false;
        }

        next();
    }
);



// ======================================
// MODEL
// ======================================
const Order = mongoose.model(
    "Order",
    orderSchema
);

export default Order;