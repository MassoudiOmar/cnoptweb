import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPharmacien = createAsyncThunk("pharmacien", async (id) => {
  const body = {
    NumeroInscription: 55,
    CIN: 0
  }
  try{

    const numConnexion = localStorage.getItem("numConnexion") || 55;
    
    const response = await axios.post(`https://tender-dijkstra.41-231-122-98.plesk.page/api/getPharmacien?NumeroInscription=${numConnexion}`, body);
    return response.data;
  }catch(err){
    console.log(err)
  }
}
  );






export const pharmacien = createSlice({
  name: "pharmacien",
  initialState: {
    getPharmacien: null,
    getPharmaciendata: {
      items: [],
    },
    error: null,
    deleteError: null,
    saveError: null,
    createArticleError: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getPharmacien.fulfilled, (state, action) => {
      state.getPharmaciendata.items = action.payload;
    });
  },
});
export default pharmacien.reducer;