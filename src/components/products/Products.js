import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running Shoes",
    price: "$5",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple Laptop",
    price: "$50",
    image:
      "https://images.macrumors.com/t/eiMSN7qdduLJTuC6UpaOpsF5QfU=/800x0/filters:quality(90)/article-new/2021/01/Flat-2021-MacBook-Pro-Mockup-Feature-1.jpg?lossy",
  },
];
const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
