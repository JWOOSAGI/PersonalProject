import { createAsyncThunk } from '@reduxjs/toolkit';
import { findAllApartmentsAPI, saveApartmentAPI } from './apartment-api';
import { IApartment } from '../model/apartment';


export const findAllApartments:any = createAsyncThunk(
    'apartment/readall',
    async (page: number)=>{
        const data:any = await findAllApartmentsAPI(1);
        const {message, result}:any = data
        return data
    }
)
export const saveApartment: any = createAsyncThunk(
    'apartment/create',
    async (apartment: IApartment) => {
        const data: any = await saveApartmentAPI(apartment)
        console.log("saveArticle의 article : " + apartment)
        console.log("saveArticle의 data" + data)
        return data;
    }
)