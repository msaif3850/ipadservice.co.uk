'use client'
import Link from "next/link";
import ProductCard from "@/components/layout/ProductCard";

import { products } from "@/products";
import {Button} from "@/components/ui/button";
const ipadclassic = products["ipadClassic"];
const ipadAirPro = products["ipadAirPro"];
const ipadMini = products["ipadMini"];
const ipads = products["ipads"];
const ipadAir = products["ipadAir"];

export default function iPadRepair() {
    return (
        <>
            <div className="px-6 py-24 sm:py-22 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-5xl font-semibold tracking-tight text-gray-950 sm:text-7xl">iPad Repairs in Leeds</h1>
                    <h2 className="my-8 text-pretty text-lg text-gray-600 sm:text-xl/8">Our technicians take the
                        professional approach with your beloved device every time, restoring it to its former glory
                        in minutes.</h2>
                    <Link href={'/tablet-repair/ipad-repair/ipad-repair-philosophy'}>
                        <Button>For Our Repair Philosophy Click Here</Button>
                    </Link>
                </div>
            </div>
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Select your iPad model</h2>
                    <Link href={'/contact'}
                          className="hidden text-sm font-medium text-indigo-500 hover:text-indigo-500 md:block">Need
                        help<span aria-hidden="true"> →</span></Link>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    {ipads.map((product) => (
                        <ProductCard key={product.id} name={product.name} id={product.id} link={product.link}
                                     image={product.image} view={product.view}/>
                    ))}
                </div>

                {/*<div className="md:flex md:items-center md:justify-between mt-10">
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-900">iPad Classic</h2>
                    <Link href={'/contact'}
                          className="hidden text-sm font-medium text-indigo-500 hover:text-indigo-500 md:block">Need
                        help<span aria-hidden="true"> →</span></Link>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    {ipadclassic.map((product) => (
                        <ProductCard key={product.id} name={product.name} id={product.id} link={product.link}
                                     image={product.image} view={product.view}/>
                    ))}
                </div>
                <div className="my-10 text-center shadow items-start gap-x-8 gap-y-6 rounded-xl p-8 ring-1 ring-gray-900/10 sm:p-10 ">
                    <h3 className="text-lg font-semibold leading-8 text-indigo-500">Splash / Liquid damage is our
                        speciality.</h3>
                </div>
                <div className="md:flex md:items-center md:justify-between ">
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-900">iPad Air & iPad Pro</h2>
                    <Link href={'/contact'}
                          className="hidden text-sm font-medium text-indigo-500 hover:text-indigo-500 md:block">Need
                        help<span aria-hidden="true"> →</span></Link>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    {ipadAir.map((product) => (
                        <ProductCard key={product.id} name={product.name} id={product.id} link={product.link}
                                     image={product.image} view={product.view}/>
                    ))}
                </div>
                <div className="my-10 text-center shadow items-start gap-x-8 gap-y-6 rounded-xl p-8 ring-1 ring-gray-900/10 sm:p-10 ">
                    <h3 className="text-lg font-semibold leading-8 text-indigo-500">Screen / Glass replacements is
                        second nature to us</h3>
                </div>
                <div className="md:flex md:items-center md:justify-between ">
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-900">iPad Mini</h2>
                    <Link href={'/contact'}
                          className="hidden text-sm font-medium text-indigo-500 hover:text-indigo-500 md:block">Need
                        help<span aria-hidden="true"> →</span></Link>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    {ipadMini.map((product) => (
                        <ProductCard key={product.id} name={product.name} id={product.id} link={product.link}
                                     image={product.image} view={product.view}/>
                    ))}
                </div>
                <div className="my-10 text-center shadow items-start gap-x-8 gap-y-6 rounded-xl p-8 ring-1 ring-gray-900/10 sm:p-10 ">
                    <h3 className="text-lg font-semibold leading-8 text-indigo-500">Our crack team of iPad practitioners have mastered their technique with thousands of iPad Repairs over the years.</h3>
                </div>*/}

            </div>
        </>
    )
}