import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




export const pharmacienInscription = createAsyncThunk("Inscription", async () => {
    const body = {
        NumeroInscription: 55,
        password: 55
    }
    const response = await axios.post(`https://cnopt.vercel.app/api/pharmacienRegister`, body);
   console.log(response.data)
});

export const InscriptionStore = createSlice({
    name: "Inscription",
    initialState: {
        Inscription: null,
        Inscriptions: {
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
        builder.addCase(pharmacienInscription.fulfilled, (state, action) => {
            state.Inscriptions.items = action.payload;
        });
    },
});

export default InscriptionStore.reducer;
