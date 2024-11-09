import mongoose from "mongoose";

export const dbConnection = () => {
  const connectionString = "mongodb+srv://hamoon:123231213@cluster1.y9abtdr.mongodb.net/";

  mongoose
    .connect(connectionString)
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occurred while connecting to the database: ${err}`);
    });
};
