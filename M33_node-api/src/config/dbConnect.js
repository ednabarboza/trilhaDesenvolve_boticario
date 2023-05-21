import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://root:root@alura.tqnkaxc.mongodb.net/alura-node"
);

let db = mongoose.connection;

export default db;

//mongodb+srv://root:root@alura.tqnkaxc.mongodb.net/?retryWrites=true&w=majorit
