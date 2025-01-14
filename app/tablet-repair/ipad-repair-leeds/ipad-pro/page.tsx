'use client'

import Link from "next/link";
import ProductCard from "@/components/layout/ProductCard";
import { products } from "@/products";
const ipadPro12Inch = products["ipadPro12Inch"];
const ipadPro11Inch = products["ipadPro11Inch"];
const ipadProOtherModals = products["ipadProOtherModals"];
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


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
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Choose iPad Pro Modal to Repair</h2>
                    <Link href={'/contact'}
                          className="hidden text-sm font-medium text-indigo-500 hover:text-indigo-500 md:block">Need
                        help<span
                            aria-hidden="true"> →</span></Link>
                </div>
                <Tabs defaultValue="inch-12" className="mt-6">
                    <TabsList>
                        <TabsTrigger value="inch-12">12.9-inch</TabsTrigger>
                        <TabsTrigger value="inch-11">11-inch</TabsTrigger>
                        <TabsTrigger value="other-modals">Other Modals</TabsTrigger>
                    </TabsList>
                    <TabsContent value="inch-12">
                        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                            {ipadPro12Inch.map((product) => (
                                <ProductCard key={product.id} name={product.name} id={product.id} link={product.link}
                                             image={product.image} view={product.view}/>
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="inch-11">
                        <div
                            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                            {ipadPro11Inch.map((product) => (
                                <ProductCard key={product.id} name={product.name} id={product.id} link={product.link}
                                             image={product.image} view={product.view}/>
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="other-modals">
                        <div
                            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                            {ipadProOtherModals.map((product) => (
                                <ProductCard key={product.id} name={product.name} id={product.id} link={product.link}
                                             image={product.image} view={product.view}/>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </>
    )
}