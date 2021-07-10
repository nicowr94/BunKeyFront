import React from "react";
import Card from "./Card";

const myList = [
  {
    id: 1,
    title: "Titulo 1",
    img: "https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image1.jpg",
  },
  {
    id: 2,
    title: "Titulo 2",
    img: "https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image1.jpg",
  },
  {
    id: 3,
    title: "Titulo 3",
    img: "https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image1.jpg",
  },
];

export default function CardList() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {myList.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card imageSource={card.img} title={card.title}></Card>
          </div>
        ))}
      </div>
    </div>
  );
}
