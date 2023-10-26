import { configureStore } from "@reduxjs/toolkit";


import connexion from './Connexion'
import getPharmacien from "./getPharmacien";
import getPharmacienCotisation from "./getPharmacienCotisation"
import Inscription from "./InscriptionStore";
export const store = configureStore({
  reducer: {
    connexion,
    getPharmacien,
    getPharmacienCotisation,
    Inscription
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});