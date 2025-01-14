import {categories} from "@/products";
import ProductCard from "@/components/layout/ProductCard";


export default function Repair() {
    return (
        <>
            <div className="px-6 py-24 sm:py-22 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-5xl font-semibold tracking-tight text-gray-950 sm:text-7xl">We have exceled in
                        becoming market leader in the repair industry.</h1>
                    {/*<h2 className="mt-8 text-pretty text-lg text-gray-600 sm:text-xl/8"></h2>*/}
                </div>
            </div>
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    {categories.map((product) => (
                        <ProductCard key={product.id} name={product.name} link={product.link} id={product.id}
                                     image={product.image} view={product.view}/>
                    ))}
                </div>
            </div>

        </>
    )
}