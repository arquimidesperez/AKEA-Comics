import db from "../db/connection.js";
import Comic from "../models/comic.js";

const insertData = async () => {
  await db.dropDatabase();

  const comics = [
    {
      title: "Superior Spiderman #6",
      imgURL:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      price: "4.99",
      brand: "Marvel",
      description: "Superior Spider-man is a story",
    },
    {
      title: "Batman #1",
      imgURL:
        "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      price: "3.99",
      brand: "DC",
      description: "Batman is also a story",
    },
  ];
  await Comic.insertMany(comics);
  console.log("Created comics!");

  db.close();
};

insertData();
