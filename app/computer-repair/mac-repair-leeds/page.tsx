import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link";
import Image from "next/image";

export default function MacRepair() {

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
                        <Link href={'/computer-repair'}>Computer Repairs</Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbPage>iMac and MacBook Repair</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <section className="px-10 py-20 text-center flex flex-col items-center">
                <h2 className="text-3xl ">iMac, Mac & MacBook Repairs in the Leeds-Bradford Area</h2>
                <div className="mt-20">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="w-full lg:w-1/2">
                            <Image
                                src="/imac.jpg"
                                alt="MacBook Air Repairs"
                                width={700}
                                height={500}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-10 space-y-5 text-center lg:text-left">
                            <h2 className="text-3xl mb-5">MacBook Air Repairs</h2>
                            <p className="text-lg">Both 11inch and 13inch Macbook Air models can be repaired by our
                                technicians, including cracked screens, hinge replacements, charging issues diagnostic,
                                keyboard replacement, touchpad repair and battery servicing. <br/><br/>If you are unsure
                                what kind
                                of repair your Macbook Air needs just call us on the shop landline and one of our
                                adviser will be more than happy to advise you.</p>
                            <br/>
                            <div>
                                <Link href={'/computer-repair/mac-repairs-leeds'}
                                      className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-600 transition">
                                    Find out more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pr-16 space-y-5 text-center lg:text-left">
                            <h2 className="text-3xl mb-5">MacBook Pro & MacBook Pro Retina Repairs</h2>
                            <p className="text-lg">The trustworthy and fashionable Apple MacBook Pro is a staple feature
                                on our state-of-the-art repair lab. Our techy wizards are able to walkover even the most
                                time consuming repairs such as keyboard replacements, motherboard repairs, display
                                replacements, water-damage rescue, and much more. We have hoard of genuine Apple parts
                                allowing us to offer screen replacement as same day. We also offer to options for screen
                                replacement, you can either decide to replace the LCD and glass or the complete top unit
                                for a perfect finish.</p>
                            <br/>
                            <div>
                                <Link href={'/computer-repair/mac-repairs-leeds'}
                                      className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-600 transition">
                                    Find out more
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <Image
                                src="/macbook.jpg"
                                alt="MacBook Air Repairs"
                                width={700}
                                height={500}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="w-full lg:w-1/2">
                            <Image
                                src="/imac.jpg"
                                alt="MacBook Air Repairs"
                                width={700}
                                height={500}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-10 space-y-5 text-center lg:text-left">
                            <h2 className="text-3xl mb-5">iMac Repairs</h2>
                            <p className="text-lg">Our Apple Gurus can carry out all sort of improvements on your iMac,
                                such as SSD upgrades, increase your RAM or software updates. We can carry out all other
                                maintenance procedures your Apple iMac requires as well. Our 1500 sqft premises have
                                been designed with these huge devices in mind, so your beloved iMac is in the right
                                hand, in the right place. We can also execute repairs on physically damaged iMacs and
                                rescue inoperative iMac.</p>
                            <br/>
                            <div>
                                <Link href={'/computer-repair/mac-repairs-leeds'}
                                      className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-600 transition">
                                    Find out more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pr-16 space-y-5 text-center lg:text-left">
                            <h2 className="text-3xl mb-5">Mac Pro Repairs</h2>
                            <p className="text-lg">We are the really first company in Leeds to offer a full service
                                solution for the newly launched Mac Pro: our technicians delved into the minutiae of the
                                puzzled &#34;trash can&#34; Mac Pro immediately upon release by Apple to offer you their
                                expertise on this amazing device. These high end systems need to be in perfect condition
                                to function as intended, that&#39;s the reason why you should only trust conversant
                                companies with this device.</p>
                            <br/>
                            <div>
                                <Link href={'/computer-repair/mac-repairs-leeds'}
                                      className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-600 transition">
                                    Find out more
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <Image
                                src="/macbook.jpg"
                                alt="MacBook Air Repairs"
                                width={700}
                                height={500}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="w-full lg:w-1/2">
                            <Image
                                src="/imac.jpg"
                                alt="MacBook Air Repairs"
                                width={700}
                                height={500}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-10 space-y-5 text-center lg:text-left">
                            <h2 className="text-3xl mb-5">Mac Mini Repairs</h2>
                            <p className="text-lg">We are intimately familiar with the mac mini, we are servicing and repairing this device since its first release in 2005. We can easily upgrade the memory (RAM) and storage (Hard Drive - SSD) of the mac mini same day as our 1500sqft premises stockpile replacement part for this device. We can also bring your Mac Mini back to life with a logic board repair! We provide the in-depth repair service other technicians cannot. Component level repair is our speciality. Our technicians are trained and certified to handle your Apple Mac mini service and repair needs.</p>
                            <br/>
                            <div>
                                <Link href={'/computer-repair/mac-repairs-leeds'}
                                      className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-600 transition">
                                    Find out more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}