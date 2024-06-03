import instance from '../../common/configs/axios-config'
import { IApartment } from '../model/apartment'


export const findAllApartmentsAPI = async (page: number) => {
    try{
        const response = await instance().get(`/apartment/readall`,{
            params: {page, limit: 10}
        })
        return response.data
    }catch(error){
        return error
    }
}
export const saveApartmentAPI = async (apartment:IApartment) =>{
    try{
        const response = await instance().post('/apartment/create',apartment)
        console.log(response.data)
        console.log(apartment)
        return response.data
    }catch(error){
        console.log(error)
        return error
    }   
} 

export const findApartmentByIdAPI = async (id: number) =>{
    try{
        const response = await instance().get('/apartment/detail',{
            params: {id}
        })
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
    
}