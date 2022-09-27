import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../constants/apiConstants";
import axios from "axios";

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, thunkApi) => {
    try {
      const resp = await axios(URL);
      return resp.data;
    } catch (error) {
      return thunkApi.rejectWithValue("something went wrong");
    }
  }
);
