import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(mongodb+srv:hamoon:123231213@cluster1.y9abtdr.mongodb.net/")
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
