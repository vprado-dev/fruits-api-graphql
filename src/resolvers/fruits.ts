import Fruit from "../models/fruits";

export const resolvers = {
  Query: {
    fruits() {
      return Fruit.find();
    },
    fruit(_: any, { id }: Record<string, any>) {
      return Fruit.findById(id);
    },
  },
  Mutation: {
    createFruit(_: any, { fruit }: Record<string, any>) {
      const newFruit = new Fruit(fruit);
      return newFruit.save();
    },
    updateFruit(_: any, { id, fruit }: Record<string, any>) {
      return Fruit.findByIdAndUpdate(id, fruit, {
        new: true,
        useFindAndModify: false,
      });
    },
    deleteFruit(_: any, { id }: Record<string, any>) {
      return Fruit.findByIdAndRemove(id, {
        useFindAndModify: false,
      });
    },
  },
};
