'use client'
import Link from "next/link";
import ProductCard from "@/components/layout/ProductCard";

import { products } from "@/products";
const pros = products["smartphone"];
export default function MacRepair() {

    return (
        <>
            <div className="px-6 py-24 sm:py-22 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-5xl font-semibold tracking-tight text-gray-950 sm:text-7xl">Mac Repairs in Leeds</h1>
                    <h2 className="mt-8 text-pretty text-lg text-gray-600 sm:text-xl/8">We don&#39;t only fix iPad and iPhone, we can fix any other handheld devices as well.</h2>
                </div>
            </div>
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Please select the smart phone you need fixing below:</h2>
                    <Link href={'/contact'}
                          className="hidden text-sm font-medium text-indigo-500 hover:text-indigo-500 md:block">Need
                        help<span
                            aria-hidden="true"> →</span></Link>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    {pros.map((product) => (
                        <ProductCard key={product.id} name={product.name} id={product.id} link={product.link} view={product.view}
                                     image={product.image}/>
                    ))}
                </div>
            </div>
        </>
    )
}