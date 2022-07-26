import React, { memo } from "react";
import "./styles.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

export default function App() {
  const ITEMS = [
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
      <Header />
      <section className="my-5 d-flex row align-items-end justify-content-between">
        <Form />
        <Cart items={ITEMS} />
      </section>
      <Footer />
    </div>
  );
}
