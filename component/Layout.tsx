import Link from "next/link";

export default function Layout({children}:any){
    return(
        <div>
            <ul>
                <li>
                    <Link href='/'>products</Link>
                </li>
                <li>
                    <Link href='category'>Category</Link>
                </li>

                <li>
                    <Link href='addproduct'>AddProduct</Link>
                </li>
            </ul>
            <div>
                {children}
            </div>
        </div>
    )
}