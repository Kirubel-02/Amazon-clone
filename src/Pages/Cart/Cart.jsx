import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { initialState, reducer } from "../../Utility/reducer";
import { Type } from "../../Utility/action.type";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";

import styles from "./cart.module.css";
import { Link } from "react-router-dom";
import ProductCard from "../../components/Product/ProductCard";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <Layout>
      <section className={styles.container}>
        <div className={styles.cart__container}>
          <h2>Hello</h2>
          <h3>Your shopping basket </h3>
          <hr />

          {basket?.length == 0 ? (
            <p>Opps ! No item in your cart</p>
          ) : (
            basket?.map((item, i) => (
              <section className={styles.cart_product}>
                <ProductCard
                  key={i}
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
                <div className={styles.btn_container}>
                  <button
                    className={styles.btn}
                    onClick={() => increment(item)}
                  >
                    <IoIosArrowUp size={20} />
                  </button>
                  <span>{item.amount}</span>
                  <button
                    className={styles.btn}
                    onClick={() => decrement(item.id)}
                  >
                    <IoIosArrowDown size={20} />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={styles.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
