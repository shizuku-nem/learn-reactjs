import {
  Box,
  Container,
  Grid,
  LinearProgress,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { addToCart } from "features/Cart/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddToCartForm from "../components/AddToCartForm";
import ProductAdditional from "../components/ProductAdditional";
import ProductDescription from "../components/ProductDescription";
import ProductInfo from "../components/ProductInfo";
import ProductMenu from "../components/ProductMenu";
import ProductReviews from "../components/ProductReviews";
import ProductThumbnail from "../components/ProductThumbnail";
import useProductDetail from "../hooks/useProductDetail";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(2),
  },
  left: {
    width: "400px",
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },
  right: {
    flex: "1 1 0", // chiem het do rong cua cha
    padding: theme.spacing(1.5),
  },
  loading: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
  },
}));

DetailPage.propTypes = {};

function DetailPage(props) {
  const classes = useStyles();
  // object destructoring 2 floors
  const {
    url,
    params: { productId },
  } = useRouteMatch();

  const { product, loading } = useProductDetail(productId);
  const dispatch = useDispatch();

  if (loading) {
    return (
      <Box className={classes.loading}>
        <LinearProgress />
      </Box>
    );
  }

  const handleAddToCartSubmit = (formValues) => {
    const action = addToCart({
      id: product.id,
      product,
      quantity: formValues.quantity,
    });
    dispatch(action);
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              <ProductInfo product={product} />
              <AddToCartForm onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
        </Paper>
        <ProductMenu />
        <Switch>
          <Route path={`${url}`} exact>
            <ProductDescription product={product} />
          </Route>
          <Route path={`${url}/additional`} exact>
            <ProductAdditional product={product} />
          </Route>
          <Route path={`${url}/reviews`} exact>
            <ProductReviews product={product} />
          </Route>
        </Switch>
      </Container>
    </Box>
  );
}

export default DetailPage;
