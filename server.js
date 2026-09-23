const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const productRoutes = require("./routes/products");
const { getProducts } = require("./data/products");

const {
  notFoundHandler,
  errorHandler
} = require("./middleware/errorHandler");

const app = express();
const PORT = 3000;

// JSON request body read karne ke liye
app.use(express.json());


// ==========================================
// REST API
// ==========================================

app.use("/api/v1/products", productRoutes);


// ==========================================
// GraphQL
// ==========================================

const schema = buildSchema(`
  type Product {
    id: ID!
    title: String!
    price: Float!
    category: String!
    description: String!
    stock: Int!
    vendor: String!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }
`);

const root = {
  products: () => {
    return getProducts();
  },

  product: ({ id }) => {
    return getProducts().find(
      product => product.id === Number(id)
    ) || null;
  }
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);


// ==========================================
// 404 - Route Not Found
// ==========================================

app.use(notFoundHandler);


// ==========================================
// Global Error Handler
// ==========================================

app.use(errorHandler);


// ==========================================
// Start Server
// ==========================================

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`GraphQL running at http://localhost:${PORT}/graphql`);
});