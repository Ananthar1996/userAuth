import mongoose, { connection } from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDb connected successfully");
    });
    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. PLease make sure mongoDB is running" + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Somethong went wrong while connecting to the database");
    console.log(error);
  }
}
