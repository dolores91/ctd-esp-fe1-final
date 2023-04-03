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

interface initialType {
    tarjetas: Tarjeta[]
    loading: boolean
    name: string
}

export const getFilter = createAsyncThunk(
    'gallery/filter',
    async (name: string) => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        const parseRes = await res.json()
        const result = parseRes
        return result       

        
    }
)


const initialState: initialType = {
    tarjetas: [],
    loading: false,
    name: "rick"
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getFilter.pending, (state) => {
            state.loading = true
        })
        .addCase(getFilter.fulfilled, (state, action) => {
            state.loading = false
            state.tarjetas= action.payload.results
           
        })
        .addCase(getFilter.rejected, (state, action) => {
            state.loading = false
        }) 
    }
})

export default filterSlice.reducer