import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { CgArrowLeft } from "react-icons/cg";

export default function ProductDetail({product}){
    console.log('product',product)
    return(<>
        <Head>
            <title>Product Detail Page</title>
        </Head>
    <div style={{ background: "linear-gradient(90deg, rgb(186 136 253) 0%, rgba(148, 187, 233, 1) 100%)" }}
     className="min-h-screen justify-items-center p-5 bg-white">
        <Link href="/product"><CgArrowLeft/></Link>
        <div className="w-full md:w-1/2">
            <p className="text-xl text-center">{product.title}</p>
            <Image src={product.image}
                width={"180"}
                height={"220"}
                alt="{product.title}"
                className="w-[180px] h-[220px] mx-10 justify-center"

                />
        </div>
        <p>
            <b>Category</b>{product.category}
        </p>
        <p>
            <b>Description</b>{product.description}
        </p>
        <p>
            <b>Price</b>{product.price}
        </p>
        <p>
            <b>Rating</b>{product.rating.rate}
        </p>
        <p>
            <b>Count</b>{product.rating.count}
        </p>
    </div>
    

    </> )
}
export async function getServerSideProps(context) {
    const resp = await fetch(`https://fakestoreapi.com/products/${context.params.id}`)
    const product = await resp.json()

    return {
        props: { product },
    }
}