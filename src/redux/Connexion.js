import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const pharmacienLogin = createAsyncThunk("login", async (numConnexion, password) => {
  const body = {
    NumeroInscription: numConnexion,
    password: password
  }
  const response = await axios.post(`https://tender-dijkstra.41-231-122-98.plesk.page/api/pharmacienLogin`, body);
  localStorage.setItem("numConnexion", numConnexion);

  return response.data;
});

export const connexion = createSlice({
  name: "login",
  initialState: {
    connexion: null,
    connexions: {
      items: [],
      count: 0,
    },
    error: null,
    deleteError: null,
    saveError: null,
    createArticleError: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(pharmacienLogin.fulfilled, (state, action) => {
      state.connexions.items = action.payload;
    });
  },
});

export default connexion.reducer;
