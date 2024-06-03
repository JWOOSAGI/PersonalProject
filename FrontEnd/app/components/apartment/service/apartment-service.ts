import { createAsyncThunk } from '@reduxjs/toolkit';
import { findAllApartmentsAPI, findApartmentByIdAPI, saveApartmentAPI } from './apartment-api';
import { IApartment } from '../model/apartment';


export const findAllApartments:any = createAsyncThunk(
    'apartment/readall',
    async (page: number)=>{
        console.log('fetchAllArticles page : ' + page)
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
export const findApartmentById: any = createAsyncThunk(
    'apartment/findApartmentById',
    async (id: number) => {
        const data: any = await findApartmentByIdAPI(id)
        console.log("findapartment의 id : "+id)
        console.log("findapartment의 data : "+data)
        return data
    }
)