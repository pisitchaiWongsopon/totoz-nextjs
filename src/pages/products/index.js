import Head from "next/head"
import product1 from "../../../public/assets/images/roblox-face-meme-1.jpg"
import MyComponent from "@/component/MyComponent"
import Image from "next/image"
import { Component } from "react"
import Link from "next/link"

export default function Products({product}) {
    return (
        <div>
            <Head>
                <title>Product Page</title>
            </Head>

            <div style={{ background: "linear-gradient(90deg, rgb(186 136 253) 0%, rgba(148, 187, 233, 1) 100%);" }}
                className="min-h-screen justify-items-center p-5 bg-white">

                <p className="font-mono text-3xl font-black	md-20 mb-4">Products</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md-cols-3 lg:grid-cols-4 justify-items-center">
                    {product.map((item) => (
                        <Link key={item.id}
                            href={`/products/${item.id}`}
                            className="mix-blend-multiply">

                            <div className="flex flex-col gap-3">
                                <Image src={item.image}
                                width={"180"}
                                height={"220"}
                                    alt="product1"
                                    className="w-[180px] h-[220px] mx-10"/>
                                <p className="font-mono text-xl font-black	mx-10"> {item.title}</p>
                                <p className="font-mono text-xl font-black	mx-10"> {item.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const resp = await fetch(`https://fakestoreapi.com/products`)
    const product = await resp.json()

    return {
        props: { product }
    }
}