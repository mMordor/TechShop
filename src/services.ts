import axios from "axios";

const instance = axios.create(
    {
        baseURL:"https://dummyjson.com",
        headers:{
            "Content-Type" : "application/json"
        }
    }
)


export const getProductsByCategories = async (endpoint:string | undefined) => {
    try{
       
       const result = await instance.get(`/products/category/${endpoint}`);
       return result.data;
    }
    catch(err){
        return err
    }
}

export const getProductById = async (endpoint:string | undefined) => {
    try{
       
       const result = await instance.get(`/products/${endpoint}`);
       return result.data;
    }
    catch(err){
        return err
    }
}