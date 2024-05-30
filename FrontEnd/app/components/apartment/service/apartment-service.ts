import { createAsyncThunk } from '@reduxjs/toolkit';
import { findAllApartmentsAPI } from './apartment-api';


export const findAllApartments:any = createAsyncThunk(
    'apartment/readall',
    async (page: number)=>{
        const data:any = await findAllApartmentsAPI(1);
        const {message, result}:any = data
        return data
    }
)