import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import thunk from "redux-thunk"



interface Tarjeta {
    id: string
    author: string
    width: number
    height: number,
    url: string,
    download_url: string
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
        return parseRes

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
                state.tarjetas.push(...action.payload)
            })
            .addCase(getTarjetas.rejected, (state, action) => {
                state.loading = false
            })

    }
})

export default gallerySlice.reducer

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = gallerySlice.actions


