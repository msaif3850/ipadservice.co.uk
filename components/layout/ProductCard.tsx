import Image from "next/image";
//import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {ProductClass} from "@/classes";

export default function ProductCard(product: ProductClass) {
    return (
        <Link href={product.link}>
            <div className="relative group">
                <div className="aspect-w-3 aspect-h-3 rounded-lg overflow-hidden bg-gray-100- border border-gray-200">
                    <div className="relative">
                        <Image src={product.image} alt={product.name}
                               width={1200} height={1200}
                               className="object-center object-cover transition-transform duration-300 -group-hover:scale-95"
                        />
                        <div
                            className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5">
                            <div
                                className="w-full bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-bold text-gray-900 text-center border ">
                                {product.view}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Title */}
                <div className="mt-4 flex items-center justify-between text-lg/6 font-semibold text-gray-900 space-x-8">
                    <h3 className="font-semibold text-gray-900 leading-tight">
                        <Link href={product.link}>
                            <span aria-hidden="true" className="absolute inset-0"></span>
                            {product.name}
                        </Link>
                    </h3>
                </div>
            </div>

        </Link>
    );
}
