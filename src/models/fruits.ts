import mongoose from "mongoose";

const FruitSchema = new mongoose.Schema({
  name: String,
  nutritions: {
    sugar: String,
    calories: String,
  },
});

export default mongoose.model("Fruit", FruitSchema);
