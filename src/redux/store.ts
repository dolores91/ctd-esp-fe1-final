import { configureStore} from "@reduxjs/toolkit";
import galleryReducer from "./gallerySlice"


const store = configureStore({
    reducer: {
        gallery: galleryReducer
    },
});

// Tipamos el hook useSelector y useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;


