import React from "react";
import Navbar from "./components/Navbar";
import DestinationCard from "./components/DestinationCard";
import data from "../data.js";
import "./styles/index.css";

function App() {
  const cardData = data.map((items) => {
    return <DestinationCard key={items.title} item={items} />;
  });
  return (
    <>
      <Navbar />
      <section className="card-list">{cardData}</section>
    </>
  );
}

export default App;
