import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IApartment } from '../model/apartment';
import { findAllApartments, findApartmentById } from './apartment-service';
import { initialState } from './apartment-init';

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
};

export const apartmentSlice = createSlice({
    name: "apartment",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const { pending, rejected } = status;

        builder
            .addCase(findAllApartments.fulfilled, (state: any, { payload }: any) => {
                state.array = payload
            })
            .addCase(findApartmentById.fulfilled, (state: any, { payload }: any) => {
                state.array = payload;
            })
    },
})

export const getAllApartments = (state: any) => (state.apartment.array);
export const getApartmentById = (state: any) => (state.apartment.array);
export const { } = apartmentSlice.actions

export default apartmentSlice.reducer;
