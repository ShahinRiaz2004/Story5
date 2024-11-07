import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://habibifarhangiz:123231213@cluster0.jjx0o.mongodb.net/?retryWrites=true&w=majority&appName=restaurant")
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
