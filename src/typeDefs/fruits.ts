import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    fruits: [Fruit]
    fruit(id: ID!): Fruit
  }

  type Mutation {
    createFruit(fruit: FruitInput): Fruit
    updateFruit(id: String, fruit: FruitInput): Fruit
    deleteFruit(id: String): Fruit
  }

  type Fruit {
    id: ID!
    name: String
    nutritions: Nutritions
  }
  type Nutritions {
    calories: String
    sugar: String
  }

  input FruitInput {
    name: String
    nutritions: NutritionsInput
  }

  input NutritionsInput {
    sugar: String
    calories: String
  }
`;
