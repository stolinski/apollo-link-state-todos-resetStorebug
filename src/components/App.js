import React from "react";
import { withApollo } from "react-apollo";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = ({ client }) => (
  <div>
    <button onClick={() => client.resetStore()}>Reset Store</button>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);
export default withApollo(App);
