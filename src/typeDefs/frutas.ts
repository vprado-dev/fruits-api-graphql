import { gql } from "apollo-server-core";

export const typeDefs = gql`
  extend type Query {
    fruits: [Fruit]
    fruit(id: ID!): Fruit
  }

  extend type Mutation {
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
