import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPharmacienCotisation = createAsyncThunk("getPharmacienCotisation", async (id) => {
  const body = {
    NumeroInscription: 55,
    CIN: 0
  }
  try{

    const numConnexion = localStorage.getItem("numConnexion") || 55;
    
    const response = await axios.post(`https://tender-dijkstra.41-231-122-98.plesk.page/api/getPharmacienCotisation?NumeroInscription=${numConnexion}`, body);
    return response.data;
  }catch(err){
    console.log(err)
  }
});

export const PharmacienCotisation = createSlice({
  name: "getPharmacienCotisation",
  initialState: {
    getPharmacienCotisation: null,
    getPharmacienCotisationdata: {
      items: [],
    },
    error: null,
    deleteError: null,
    saveError: null,
    createArticleError: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getPharmacienCotisation.fulfilled, (state, action) => {
      state.getPharmacienCotisationdata.items = action.payload;
    });
  },
});
export default PharmacienCotisation.reducer;