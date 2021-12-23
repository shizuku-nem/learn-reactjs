import Header from "components/Header";
import ProductFeature from "features/Product";
import React from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import AlbumFeature from "./features/Album";
import CounterFeature from "./features/Counter";
import TodoFeature from "./features/Todo";



function App() {
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const params = {
  //       _limit: 10,
  //     };
  //     // const productList = productApi.getAll();
  //     const productList = await productApi.getAll(params);
  //       "🚀 ~ file: App.js ~ line 14 ~ fetchProducts ~ productList",
  //       productList
  //     );
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <div className="App">
      <Header/>
      
      <Switch>
        <Redirect from="/home" to="/products" />

        <Route path="/" exact component={CounterFeature} />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/products" component={ProductFeature} />
      </Switch>
    </div>
  );
}

export default App;
