import instance from '../../common/configs/axios-config'


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