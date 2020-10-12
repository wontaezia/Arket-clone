import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CartItem from "./components/CartItem";
import PriceContainer from "./components/PriceContainer";
import Nav from "../../components/Nav";
import { API } from "../../config";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const result = await fetch(`${API}/cart`, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      const { data } = await result.json();
      setCart(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const totalCalc = () => {
      const price = cart?.reduce((accumulator, item) => {
        return accumulator + item.price * item.count;
      }, 0);
      setTotalPrice(price);
    };
    totalCalc();
  }, [cart]);

  const deleteCart = (idx) => {
    const cartList = [...cart];
    const updateItem = cartList.filter(
      (item) => item.cart_id !== cart[idx].cart_id
    );
    setCart(updateItem);
  };

  const fetchRemove = async (idx) => {
    try {
      const deleteResult = await fetch(`${API}/cart`, {
        method: "delete",
        headers: { Authorization: localStorage.getItem("token") },
        body: JSON.stringify({
          cart_id: cart[idx].cart_id,
        }),
      });
      const { message } = await deleteResult.json();
      if (message === "SUCCESS") {
        deleteCart(idx);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCount = async (idx, cartList) => {
    try {
      const patchResult = await fetch(`${API}/cart`, {
        method: "patch",
        headers: { Authorization: localStorage.getItem("token") },
        body: JSON.stringify({
          cart_id: cart[idx].cart_id,
          count: cartList[idx].count,
        }),
      });

      const { message } = await patchResult.json();
      if (message === "SUCCESS") {
        setCart(cartList);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const changeCount = (idx, change) => {
    const cartList = [...cart];
    const updateItem = {
      ...cart[idx],
      count: cart[idx].count + change,
    };
    cartList[idx] = updateItem;
    if (cartList[idx].count === 0 && change === -1) {
      fetchRemove(idx);
    } else {
      fetchCount(idx, cartList);
    }
  };

  return (
    <>
      <Nav />
      <Section>
        <CartContainer>
          <h2>Shopping bag</h2>
          {cart?.map((item, idx) => {
            return (
              <CartItem
                key={idx}
                cart={cart}
                idx={idx}
                item={item}
                changeCount={changeCount}
                deleteCart={deleteCart}
                fetchRemove={fetchRemove}
              />
            );
          })}
        </CartContainer>
        <PriceContainer totalPrice={totalPrice} />
      </Section>
    </>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const CartContainer = styled.div`
  margin-right: 40px;
  width: calc(66.66% - 20px);
  border-bottom: 2px solid black;
  margin-bottom: 100px;
  height: 100%;
  h2 {
    margin-top: 20px;
    padding-bottom: 13px;
    font-size: 20px;
    border-bottom: 2px solid black;
  }
`;
