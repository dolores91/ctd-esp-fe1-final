import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

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


export const getTarjetas = createAsyncThunk(
    'gallery/tarjetas',
    async (page: number) => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        const parseRes = await res.json()
        const result = parseRes
        console.log("gallery/tarjetas",result)
        return result

    }
)
export const getFilter = createAsyncThunk(
    'gallery/filter',
    async (name: string) => {
        const res2 = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        const parseRes2 = await res2.json()
        const result2 = parseRes2
        console.log("gallery/filter",result2);
        return result2

        
    }
)
interface initialType {
    tarjetas: Tarjeta[]
    loading: boolean
    name: string
}

const initialState: initialType = {
    tarjetas: [],
    loading: false,
    name: "alien"
}

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
    },
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
        .addCase(getFilter.fulfilled, (state, action) => {
            state.loading = false
            state.tarjetas= action.payload.results
           // state.metaData= action.payload.info
        })
        .addCase(getFilter.pending, (state) => {
            state.loading = true
        })
    }
})

export default gallerySlice.reducer




