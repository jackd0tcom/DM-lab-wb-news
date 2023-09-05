import { configureStore } from "@reduxjs/toolkit";
import hackerNewsReducer from "./components/HackerNews/HackerNews";

export default configureStore({ reducer: hackerNewsReducer });
