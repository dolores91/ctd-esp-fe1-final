import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface Tarjeta {
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
        console.log();
        if (res.ok) {
          const parseRes = await res.json()
        const result = parseRes
        console.log("gallery/tarjetas", result)
        return result  
        }else{
            alert("En este momento no podemos cargar la información, por favor intente más tarde")
        }
        

    }
)
export const getFilter = createAsyncThunk(
    'gallery/filter',
    async (name: string) => {
        const res2 = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        
          const parseRes2 = await res2.json()
        const result2 = parseRes2
        return result2   
      


    }
)
interface initialType {
    tarjetas: Tarjeta[]
    loading: boolean
    name: string
    favoritos: number[]
}

const initialState: initialType = {
    tarjetas: [],
    loading: false,
    name: "",
    favoritos: []
}

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        guardarFavoritos: (state, action) => {
            state.favoritos = action.payload
        },
        borrarFavoritos: (state) => {
          state.favoritos = []
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getTarjetas.pending, (state) => {
                state.loading = true
            })
            .addCase(getTarjetas.fulfilled, (state, action) => {
                state.loading = false
                state.tarjetas = action.payload.results
                // state.metaData= action.payload.info
            })
            .addCase(getTarjetas.rejected, (state, action) => {
                state.loading = false
            })
            .addCase(getFilter.fulfilled, (state, action) => {
                state.loading = false
                state.tarjetas = action.payload.results
                // state.metaData= action.payload.info
            })
            .addCase(getFilter.pending, (state) => {
                state.loading = true
            })
    }
})
export const { guardarFavoritos, borrarFavoritos } = gallerySlice.actions
export default gallerySlice.reducer




