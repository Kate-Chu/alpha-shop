import React, { memo } from "react";
import "./styles.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

export default function App() {
  const HeaderMemo = memo(Header);
  const CartMemo = memo(Cart);
  const FooterMemo = memo(Footer);

  const GOODS = [
    {
      id: "1",
      name: "貓咪罐罐",
      img: "https://picsum.photos/300/300?text=1",
      price: 100,
      quantity: 2,
    },
    {
      id: "2",
      name: "貓咪干干",
      img: "https://picsum.photos/300/300?text=2",
      price: 200,
      quantity: 1,
    },
  ];

  return (
    <div className="container">
      <HeaderMemo />
      <section className="my-5 d-flex row align-items-end justify-content-between">
        <Form />
        <CartMemo GOODS={GOODS} />
      </section>
      <FooterMemo />
    </div>
  );
}
