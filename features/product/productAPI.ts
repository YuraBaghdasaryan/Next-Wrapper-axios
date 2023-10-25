import { myAxios } from "@/app/store";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProductsThunk=createAsyncThunk(
    "get product",
    async()=>{
        const{data}=await myAxios.get("products")
        return data;
    }
)
export const getCategoryThunk=createAsyncThunk(
    "get categories",
    async()=>{
        const{data}=await myAxios.get("products/categories")
        return data;
    }
)

export const getProductByIdThunk=createAsyncThunk(
    "get product By Id",
    async(id:number)=>{
        const {data}=await myAxios.get("products/"+id)
        return data
    }

)
export const getProductsByLimitThunk=createAsyncThunk(
    "getProductsByLimit",
    async(limit:number)=>{
        console.log(limit);
        
        const {data}=await myAxios.get("products?limit="+limit)
        return data
    }
)
export const getInCategoryThunk=createAsyncThunk(
    "get In Category",
    async(text:string)=>{
        const {data}=await myAxios.get("products/category/"+text)
        return data
    }
)

