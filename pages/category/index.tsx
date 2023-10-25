import { useAppSelector } from "@/app/hooks"
import { wrapper } from "@/app/store";
import { getCategoryThunk } from "@/features/product/productAPI";
import { getCategories, selectProduct } from "@/features/product/productSlice"

export default function Categoryi(){

    const{catArr}=useAppSelector(selectProduct)
    console.log(catArr);
    
    return(
        <div>
            <h1>Categoryi</h1>

        </div>
    )
}

export const getStaticProps = wrapper.getStaticProps(
    (store): any =>
      async () => {
        const data1 = await store.dispatch(getCategoryThunk()).unwrap();
        store.dispatch(getCategories(data1));
      }
  );
  