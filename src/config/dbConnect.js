import mongoose from "mongoose"

mongoose.connect("mongodb+srv://alura:1234@cluster0.bmt3ilx.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;