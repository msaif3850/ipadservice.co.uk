'use client'

import Link from "next/link";
import ProductCard from "@/components/layout/ProductCard";
import Image from "next/image";
import { products } from "@/products";
const pros = products["ipadAir"];


export default function iPadProRepair() {

    return (
        <>
            <div className="px-6 py-24 sm:py-22 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-5xl font-semibold tracking-tight text-gray-950 sm:text-7xl">iPad Pro Repair Leeds
                        Services</h1>
                    <h2 className="mt-8 text-pretty text-lg text-gray-600 sm:text-xl/8">We have become pioneers in the repair industry crunching through 1000’s of iPad repairs servicing the West Yorkshire Area for the past 20 years, providing quality repairs at affordable prices with the fastest turnaround time possible.</h2>
                </div>
            </div>
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Choose iPad Modal to Repair</h2>
                    <Link href={'/contact'}
                          className="hidden text-sm font-medium text-indigo-500 hover:text-indigo-500 md:block">Need
                        help<span
                            aria-hidden="true"> →</span></Link>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    {pros.map((product) => (
                        <ProductCard key={product.id} name={product.name} id={product.id} link={product.link}
                                     image={product.image} view={product.view}/>
                    ))}
                </div>
            </div>

            <section className="px-10 py-20 text-center">
                <h2 className="text-3xl mb-6">Finely-tuned iPhone Repairs in Horsforth, Leeds</h2>
                <p className="text-lg px-0 lg:px-20 mb-6">Frustrated with replacing your iPhone screen every few months
                    using sub-standards
                    iPhone repair shop and their replica parts, installing them insecurely and unprofessionally. Leading
                    to other issues with your device. Usually within a few weeks you will realise there is a problem
                    with your device due to the quality of screen used. The tell-tale signs is a poor quality display
                    and the bezel edging away from the screen unit with minimal use without wear and tear. The whole
                    iPhone Series suffers from this weak design as the actual glass proportion only has a thin edge to
                    adhere to resulting in creating a weak point in the imitation screens other companies will fit. This
                    is the define reason it is absolutely imperative to avoid third-party poorly imitated screens and
                    parts being offered by other repair businesses and in some cases without your knowledge.
                    <br/><br/>We guarantee a 12 months &#34;no quibble&#34; warranty with all our iPhone screen repairs,
                    and
                    promise to always use the best quality parts available on the market consisting of mostly original
                    parts.</p>
            </section>
            <section className="flex flex-col items-center justify-center pb-20 px-10 lg:px-32">
                <h4 className="text-3xl text-center ">Each iPhone repair is considered as an opportunity for our
                    technicians to carve out a reputation for superior workmanship of the highest quality.</h4>
                <Image src={'/iphone-6-teardown.jpg'} alt='iphone-6-teardown' width={1200} height={400}/>
                <h2 className="text-xl mt-2">We delve into the minutiae with logic board repairs for iPhones</h2>
            </section>
        </>
    )
}