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
        //Java 에서 Messenger.message에 값을 담음
        console.log(response.data)
        console.log(apartment)
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
    
}