import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CartItem from "./components/CartItem";
import PriceContainer from "./components/PriceContainer";
import { cartAPI } from "../../config";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    // const result = await fetch(cartAPI, {
    //   headers: { Authorization: localStorage.getItem("token") },
    // });
    const result = await fetch(`/Data/cart-Data.json`);
    const {
      data: { products },
    } = await result.json();
    setCart(products);
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
    const updateItem = cartList.filter((item) => item.id !== cart[idx].id);
    setCart(updateItem);
  };

  const fetchRemove = async (idx) => {
    try {
      const deleteResult = await fetch(cartAPI, {
        method: "delete",
        headers: { Authorization: localStorage.getItem("token") },
        body: JSON.stringify({
          cart_id: cart[idx].cart_id,
        }),
      });
      const { message } = await deleteResult.json();
      if (message === "바보가빈") {
        deleteCart(idx);
      }
    } catch (err) {
      alert("백엔드에 ", err, "를 확인해보세요.");
    }
  };

  const fetchCount = async (idx, cartList) => {
    try {
      const patchResult = await fetch(cartAPI, {
        method: "patch",
        headers: { Authorization: localStorage.getItem("token") },
        body: JSON.stringify({
          cart_id: cart[idx].cart_id,
          count: cartList[idx].count,
        }),
      });

      const { message } = await patchResult.json();
      if (message === "갓가빈") {
        setCart(cartList);
      }
    } catch (err) {
      alert("백엔드에 " + err + "를 확인해보세요.");
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
      <Nav>
        <span>진희 Nav</span>
      </Nav>
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
              />
            );
          })}
        </CartContainer>
        <PriceContainer totalPrice={totalPrice} />
      </Section>
    </>
  );
}

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: yellow;
  text-align: center;
  span {
    font-size: 40px;
  }
`;

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
