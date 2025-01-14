import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link";
import ProductCard from "@/components/layout/ProductCard";
import Image from "next/image";
import {products} from "@/products";
const pros = products["tablet"];


export default function TabletRepair() {

    return (
        <>
            <section
                className="-mt-5 bg-tablet-repair-banner flex items-center justify-center bg-center bg-cover text-white h-[70vh] px-8">
                <div className="flex flex-row items-center w-full max-w-6xl">
                    <div className="w-1/2"></div>
                    <div className="w-1/2 pl-10 text-center">
                        <h2 className="text-5xl font-bold">Tablet Repairs in Leeds</h2>
                        <p className="text-white text-2xl mt-4 stroke-cyan">
                            Our technicians take the professional approach with your beloved device every time,
                            restoring it to its former glory in minutes.
                        </p>
                    </div>
                </div>
            </section>
            <Breadcrumb className="p-5">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <Link href={'./'}>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbPage>Tablet Repair</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <svg
                        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                        aria-hidden="true">
                        <defs>
                            <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1"
                                     patternUnits="userSpaceOnUse">
                                <path d="M100 200V.5M.5 .5H200" fill="none"/>
                            </pattern>
                        </defs>
                        <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
                            <path
                                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                strokeWidth="0"/>
                        </svg>
                        <rect width="100%" height="100%" strokeWidth="0"
                              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"/>
                    </svg>
                </div>
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div
                        className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base/7 font-semibold text-indigo-600">We have the edge... We have the
                                    skills... We have the experience...</p>
                                <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Our
                                    passion for perfection is reflected in our work.</h1>
                                <p className="mt-6 text-xl/8 text-gray-700">Make the right choice and call today to
                                    revive your tablet using a trusted company.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <Image width={1200} height={900} className="w-[40rem] max-w-none sm:w-[57rem]" src="/ipadpro.png" alt="ipad "/>
                    </div>
                    <div
                        className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                                <p>We have become pioneers in the industry of repairing iPads & tablets. We are market
                                    leaders in screen replacements: our screens are vigorously vetted before
                                    installation and all come with our unique oleo-phobic chemical treatment, this
                                    allows your touch screen to resist the build up of grease and other and other
                                    unwanted spoils that may effect your display&#39;s usage and visibility. The secret
                                    formula we use is closely guarded secret but all our customers are impressed with
                                    the final result achieved.</p>

                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Our promise </h2>
                                <blockquote className="mt-6">We have become market leaders with an emphasis on trust and
                                    quality, all work carried out is back by a 12 months &#34;no quibble&#34; warranty!
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="px-10">
                <div className="container mx-auto flex flex-wrap items-center">
                    <div className="w-full md:w-2/3">
                        <h3 className="text-3xl lg:text-5xl font-semibold mb-4">Our passion for perfection is reflected
                            in our work.</h3>
                        <p className="text-lg leading-relaxed text-black">
                            We have the edge... We have the skills... We have the experience...
                            <br/>
                            <br/> Make the right choice and call today to revive your tablet using a trusted
                            company.
                            <br/>
                            <br/> We have become pioneers in the industry of repairing iPads &amp; tablets. We are
                            market leaders in screen replacements:
                            our screens are vigorously vetted before installation and all come with our unique
                            oleo-phobic chemical treatment,
                            this allows your touch screen to resist the build up of grease and other and other
                            unwanted spoils that may effect
                            your display&#39;s usage and visibility. The secret formula we use is closely guarded secret
                            but all our customers are
                            impressed with the final result achieved.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center mt-6 md:mt-0">
                        <Image
                            className="max-w-full h-auto"
                            src="/ipadpro.png"
                            alt="iPad Pro 9.7"
                            width={600} height={600}
                        />
                    </div>
                </div>
            </section>
            <section className="p-10 text-center bg-gray-100">
                <h2 className="text-3xl my-6">We have exceled in becoming market leader in the repair industry.</h2>
                <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    {pros.map((product) => (
                        <ProductCard key={product.id} name={product.name} id={product.id} link={product.link}
                                     image={product.image} view={product.view}/>
                    ))}
                </div>
            </section>

        </>
    )
}