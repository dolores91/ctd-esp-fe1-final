import { configureStore} from "@reduxjs/toolkit";
import galleryReducer from "./gallerySlice"
///import filterSlice from "./filterSlice";


const store = configureStore({
    reducer: {
        gallery: galleryReducer,
   //     filter: filterSlice
    },
});

// Tipamos el hook useSelector y useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;


