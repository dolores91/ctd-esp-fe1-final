import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import thunk from "redux-thunk"



interface Tarjeta {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    },
    location: {
        name: string;
        url: string;
    },
    image: string;
    episode: [string];
    url: string;
    created: string;
}

interface initialType {
    tarjetas: Tarjeta[]
    loading: boolean
}


export const getTarjetas = createAsyncThunk(
    'gallery/tarjetas',
    async (page: number) => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        const parseRes = await res.json()
        const result = parseRes
        console.log(result)
        return result

    }
)
export const getFilter = createAsyncThunk(
    'tarjeta',
    async (name: string) => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        const parseRes = await res.json()
        const result = parseRes
        return result

        
    }
)

const initialState: initialType = {
    tarjetas: [],
    loading: false
}

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getTarjetas.pending, (state) => {
            state.loading = true
        })
        .addCase(getTarjetas.fulfilled, (state, action) => {
            state.loading = false
            state.tarjetas= action.payload.results
           // state.metaData= action.payload.info
        })
        .addCase(getTarjetas.rejected, (state, action) => {
            state.loading = false
        }) 
    }
})

export default gallerySlice.reducer

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = gallerySlice.actions


