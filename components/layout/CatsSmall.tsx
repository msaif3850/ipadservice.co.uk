import {categories} from "@/products";
import Link from "next/link";
import Image from "next/image";

export default function CatsSmall(){
    return (
        <>
            <div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-sm:justify-center gap-y-8 gap-4 sm:gap-x-6 mt-16">
                {categories.map((cat) => (
                    <Link href={cat.link} key={cat.id}>
                        <div className="flex max-sm:flex-col items-center gap-6 overflow-hidden ">
                            <div className="w-24 h-24 shrink-0 bg-gray-100 p-1 overflow-hidden rounded-lg">
                                <Image src={cat.image} alt={cat.name} width={2432} height={1442}
                                       className="h-full w-full object-contain"/>
                            </div>
                            <div className="max-sm:text-center">
                                <h3 className="text-md sm:text-md font-medium text-gray-800">{cat.name}</h3>
                                <h4 className="text-sm sm:text-base text-indigo-600 font-medium mt-1">{cat.view}</h4>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}