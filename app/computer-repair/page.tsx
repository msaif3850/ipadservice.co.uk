'use client'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link";
import Image from "next/image";

export default function ComputerRepair() {

    return (
        <>
            <Breadcrumb className="px-10 py-3 border-b bg-gray-100 shadow-sm">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <Link href={'./'}>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <Link href={'/repairs'}>Repairs</Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbPage>Computer Repair</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <section className="px-10 py-20 text-center flex flex-col items-center">
                <h2 className="text-3xl mb-6">Computer and Laptop Repair Leeds</h2>
                <h3 className="text-xl mb-5">Looking for an Apple Mac repair :
                    <Link href={'/computer-repair/mac-repair-leeds'} className="underline hover:no-underline">Click here</Link>
                    </h3>
                <p className="text-lg px-0 lg:px-20 mb-6">This webpage is a work in progress...</p>
                <Image className="" src={'/imac-404.jpg'} alt='imac-404' width={500} height={400}/>
            </section>
            <section className="flex flex-col items-center justify-center pb-20 px-10 lg:px-32">
                <h4 className="text-3xl text-center ">However, we do repair this device. Give us a call on <a
                    href="tel:+441132591700" className="underline hover:no-underline">0113 259 1700</a></h4>
            </section>
        </>
    )
}