import Image from "next/image";
import { Inter } from "next/font/google";
import { wrapper } from "@/app/store";
import {
  getCategoryThunk,
  getInCategoryThunk,
  getProductsByLimitThunk,
  getProductsThunk,
} from "@/features/product/productAPI";
import {
  getCategories,
  getProduct,
  getProductById,
  selectProduct,
} from "@/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { arr, catArr } = useAppSelector(selectProduct);
  // console.log(arr,catArr);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>SeeCategoria</h1>
      <select
        onChange={async (e) => {
          const data = await dispatch(
            getInCategoryThunk(e.target.value)
          ).unwrap();
          console.log(data);
          dispatch(getProduct(data));
        }}>
        {catArr.map((elm, i) => {
          return (
            <option value={elm} key={i}>
              {elm}
            </option>
          );
        })}
      </select>
        <input type="number" onChange={async(e)=>{
          const data=await dispatch(getProductsByLimitThunk(+e.target.value)).unwrap()
          console.log(data);
          dispatch(getProduct(data))
          
        }}/>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>image</th>
            <th>category</th>
            <th>see</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((elm) => {
            return (
              <tr key={elm.id}>
                <td>{elm.title}</td>
                <td>{elm.category}</td>
                <td>
                  <img src={elm.image} width={200} height={200} />
                </td>
                <td>
                  <Link href={"/product/" + elm.id}>See</Link>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export const getStaticProps = wrapper.getStaticProps(
  (store): any =>
    async () => {
      const data = await store.dispatch(getProductsThunk()).unwrap();
      const data1 = await store.dispatch(getCategoryThunk()).unwrap();
      store.dispatch(getProduct(data));
      store.dispatch(getCategories(data1));
    }
);
