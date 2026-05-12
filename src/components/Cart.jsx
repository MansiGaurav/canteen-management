import "../css/Cart.css";

function Cart({

  cart,
  increaseQty,
  decreaseQty,

}) {

  const subtotal = cart.reduce(

    (sum, item) =>

      sum + item.price * item.quantity,

    0
  );



  const tax = 20;



  const total = subtotal + tax;





  return (

    <div className="cart-wrapper">

      {/* MY CART */}
      <div className="cart-section">

        <h2>
          My Cart
        </h2>



        <div className="cart-items">

          {

            cart.length === 0 ? (

              <p className="empty-cart">
                No items selected
              </p>

            ) : (

              cart.map((item) => (

                <div
                  className="cart-item"
                  key={item.id}
                >

                  <div>

                    <h4>
                      {item.name}
                    </h4>

                    <p>
                      ₹ {item.price}
                    </p>

                  </div>





                  <div className="quantity-box">

                    <button
                      onClick={() => decreaseQty(item.id)}
                    >
                      -
                    </button>



                    <span>
                      {item.quantity}
                    </span>



                    <button
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>

                  </div>

                </div>

              ))

            )

          }

        </div>

      </div>





      {/* ORDER SUMMARY */}
      <div className="summary-section">

        <h2>
          My Order
        </h2>



        <div className="summary-row">

          <p>
            Sub Total
          </p>

          <p>
            ₹ {subtotal}
          </p>

        </div>



        <div className="summary-row">

          <p>
            Tax
          </p>

          <p>
            ₹ {tax}
          </p>

        </div>



        <div className="total-row">

          <h3>
            Grand Total
          </h3>

          <h3>
            ₹ {total}
          </h3>

        </div>



        <button className="checkout-btn">
          Check Out
        </button>

      </div>

    </div>

  );
}

export default Cart;
