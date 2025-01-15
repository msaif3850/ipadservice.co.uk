'user client';

import Link from "next/link";

import SocialIcons from "@/components/layout/SocialIcon";
import Image from "next/image";
import ProductCard from "@/components/layout/ProductCard";
import {FaApple, FaWrench} from "react-icons/fa";
import {TbDeviceIpadCog} from "react-icons/tb";


import {Button} from "@/components/ui/button";

const features = [
    {
        name: 'iPhone X Repairs.',
        description:
            'We are now repairing the iPhone X while-you-wait.',
        icon: FaApple,
    },
    {
        name: 'While-You-Wait iPad Repairs.',
        description: 'We offer our customers genuine parts fitted to the highest of standards in the repair industry.',
        icon: TbDeviceIpadCog,
    },
    {
        name: 'Repairing.',
        description: 'Also Repairing Samsung, Sony, Huawei, and many more handsets.',
        icon: FaWrench,
    },
]
const features2 = [
    {
        name: 'Quick and Reliable iPad Repairs',
        description: 'Broken your iPad screen? Don\'t Panic — We can lead your iPad to salvation within 30 minutes. Our expert repair technicians have been meticulously grinding through thousands of iPad screen repairs and Liquid Crystal Displays over the past 10 years, carving out a reputation in the Leeds area for quality workmanship and excellence.',
        icon: FaApple,
    },
    {
        name: 'Elite Service Options',
        description: 'Our Elite Services offer customers options in the quality of parts we use. At the moment, we have in stock the original parts direct from the Apple Foxconn Factory in China, as well as third-party high-quality parts at a slightly reduced price.',
        icon: TbDeviceIpadCog,
    },
    {
        name: 'Visit Our Store for Assistance',
        description: 'Please call into the store, and one of our sales representatives will be happy to assist.',
        icon: FaWrench,
    },
]
import {categories} from "@/products";
//const pros = products["smartphone"];

export default function Home() {
    return (
        <>
            <div className="overflow-hidden bg-white py-10 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base/7 font-semibold text-indigo-600">Leeds & Bradford Area</h2>
                                {/*<p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">iPad Repairs by Certified Technicians</p>*/}
                                <h2 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-7xl mb-8 mt-2">iPad
                                    Repairs by Certified Technicians</h2>
                                <p className="mt-6 text-lg/8 text-gray-600">We have become market leaders setting the
                                    highest standards for quality repairs within the hour restoring your treasured
                                    iPads.</p>
                                <dl className="mt-8 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon aria-hidden="true"
                                                              className="absolute left-1 top-1 size-5 text-indigo-600"/>
                                                {feature.name}
                                            </dt>
                                            {' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                                <Button className="mt-6">
                                    <Link href={"/repairs"} className="">Get Started</Link>
                                </Button>
                            </div>
                        </div>
                        <Image src="/hero.jpg" alt="iPad Repairs"
                               className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                               width={2432}
                               height={1442}/>
                    </div>
                </div>
            </div>
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-7xl mb-16">Our Most Common
                    Repairs</h2>
                <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    {categories.map((product) => (
                        <ProductCard key={product.id} name={product.name} link={product.link} id={product.id}
                                     image={product.image} view={product.view}/>
                    ))}
                </div>
            </div>
            <div className="overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto  lg:text-center mb-10">
                        <h2 className="text-base/7 font-semibold text-indigo-600">Our passion for perfection is
                            reflected in our work.</h2>
                        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">While-you-wait
                            Repairs</p>
                        <p className="mt-6 text-lg/8 text-gray-600">We offer a While you wait iPad repair service in
                            Leeds and surrounding areas, we strive to have most repairs done within the hour. While
                            there are numerous repair services in Leeds, few of these are capable of servicing an iPad.
                            We have a newly refurbished state of the art repair lab along with highly experienced
                            technicians. Our ultra modern repairing lab is composed of the latest advanced technology
                            therefore we are able to offer quick and affordable repair services to all our customers. It
                            has taken us years to finally gain access to the very high quality OEM quality glass, to our
                            knowledge there is no other company in Leeds that is able to provide you with this
                            digitiser.</p>
                    </div>
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base/7 font-semibold text-indigo-600">We operate a walk in service
                                    at your convenience!</h2>
                                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">No
                                    Appointment Required</p>
                                <p className="mt-6 text-lg/8 text-gray-600">We have in stock all three different grades
                                    and are able to explain articulately the difference between each one. Just call us
                                    on our main number <a href="tel://0113 259 1700"
                                                          className="underline hover:no-underline">0113 259 1700</a> and
                                    one of the technicians will guide you through your options, we actively stock and
                                    install genuine parts for all repairs undertaken.</p>
                                <dl className="mt-8 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                    {features2.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon aria-hidden="true"
                                                              className="absolute left-1 top-1 size-5 text-indigo-600"/>
                                                {feature.name}
                                            </dt>
                                            {' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <Image src="/while-you-wait repairs.png" alt="macbook repair Leeds"
                               className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                               width={2432}
                               height={1442}/>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 lg:max-w-7xl max-w-2xl mx-auto">
                <div className="card bg-indigo-50 border border-white hover:border-indigo-600 rounded-lg p-8">
                    <div className="-ml-4 mb-4">
                        <Image src={'/icons/apple-black.svg'} alt='icon' width={100} height={100}/>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">iPad Repair Services</h3>
                    <p className="text-base text-gray-600">We offer an ultra-rapid repair service for the following
                        models: iPad Air, iPad Mini, iPad 2 / 3 / 4 / 5 and the iPad Pro. All repairs carried out within
                        the hour are backed by a solid 12 months warranty.</p>
                    <Link href={'/repairs'}>
                        <Button className="mt-6" variant={'link'}>Get Started</Button>
                    </Link>
                </div>
                <div className="card bg-indigo-50 border border-white hover:border-indigo-600 rounded-lg p-8">
                    <div className="-ml-4 mb-4">
                        <Image src={'/icons/iphone.svg'} alt='icon' width={100} height={100}/>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">iPhone Repair Services</h3>
                    <p className="text-base text-gray-600">Our repair facility can take on all types of damage to the
                        complete iPad range from deteriorating battery replacements to complete screen repairs. Our
                        technicians guarantee to have your devices fully repaired and returned to you within the
                        hour.</p>
                    <Link href={'/iphone-repair'}>
                        <Button className="mt-6" variant={'link'}>Get Started</Button>
                    </Link>
                </div>
            </div>
            <div className="overflow-hidden bg-white py-20 sm:py-22">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto  lg:text-center">
                        <h2 className="text-base/7 font-semibold text-indigo-600">iPad Service</h2>
                        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">Choose
                            a Reputable Business</p>
                        <p className="mt-6 text-lg/8 text-gray-600">There are plenty choice when it comes to repair shop
                            in Leeds, only choose the best!
                            <br/><br/>Our business was solely built on word of mouth, recommendations from previous
                            customers and being located on a busy road the A65 heading towards north Leeds from the
                            city centre. Our business is located in a well recognised landmark building in Horsforth
                            trading for over 25 years in the mobile phone, laptop and computer repair
                            industry.<br/><br/>We
                            are the only business in the yorkshire area that is offering an extended 18 months
                            warranty on parts and labour with every repair ensuring peace of mind for all our loyal
                            customers. We promise our team will repair or replace any part as perfectly as humanly
                            possible or a money back guarantee with every repair that you&#39;re not satisfied with that
                            was undertaken by our elite team of iPad repair practitioners.</p>
                        <div
                            className="bg-gray-800 min-h-[350px] relative max-w-7xl mx-auto rounded overflow-hidden mt-10">
                            <div className="grid lg:grid-cols-2 w-full h-full absolute inset-0">
                                <div className="p-4 max-lg:hidden">
                                    <Link href={'/map-neighbourhood.webp'}>
                                        {/*<Image className="object-cover w-full h-full" src="/map-neighbourhood.webp" width={1200} height={300} alt="ipadservice map"/>*/}
                                        <Image className="object-cover w-full h-full" src="/shop-outside.jpg"
                                               alt="shop outside"
                                               width={1200} height={1200}/>
                                    </Link>
                                </div>

                                <div
                                    className="flex flex-col items-end justify-center text-right px-8 relative bg-[#262464] rounded-tl-[206px] z-20 before:absolute before:inset-0 before:!left-auto before:bg-[#293587] before:w-2/3 before:rounded-bl-[206px] before:-z-10">
                                    <h3 className="font-bold sm:text-4xl text-2xl text-white">2 Rose Terrace, LS18 4QA
                                        Horsforth</h3>
                                    <p className="text-sm text-gray-300 mt-4">We are open 7 days a week, Monday to
                                        Saturday 9am-7pm
                                        and the Sunday 10am-6pm, our technicians are able to repair all your beloved
                                        devices within
                                        the hour.</p>
                                    <div className="flex gap-3 mt-6">
                                        <Link href={"tel:01132591700"}><Button>Call Us</Button></Link>
                                        <Link
                                            href={"https://www.google.co.uk/maps/dir/''/2+Rose+Terrace,+Horsforth,+Leeds+LS18+4QA/@53.8323688,-1.6487277,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x487958bd3ae3ec61:0x6fd032f36d686d2f!2m2!1d-1.6443503!2d53.8323689"}>
                                            <Button variant={"secondary"}>
                                                Click for Directions</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-white py-20 sm:py-22">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                {/*<h2 className="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>*/}
                                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Our
                                    State-of-the-art Repair Facility is Fully Equipped for Perfection</p>
                                <p className="mt-6 text-lg/8 text-gray-600">Our repair lab is fully equipped for the
                                    most strenuous of challenges. Recently we had an iPad Air that had been found in the
                                    sea by a customer (This had been in salt water for the past 6 months). Our lab has
                                    the technology and our skilled technicians were easily able to revive the iPad back
                                    to life within a 6 hours period after an extensive logic board deep clean removing
                                    all the protective shields and replacing the damage integrated components.</p>
                                <p className="mt-6 text-lg/8 text-gray-600">Our skills with water/liquid damage are the
                                    most advanced and exceptional with the highest success rate in the restoration of
                                    all liquid damage electronics. We don&#39;t like to brag but we are your best chance
                                    of
                                    survival with water/liquid damage repairs. Our advanced repair lab has created a
                                    non-toxic solution that removes corrosive minerals by only targeting parts of the
                                    device that are extremely damaged leaving area’s without damages untouched. Our
                                    Liquid damage methodology is also a well-kept secret and only performed by highly
                                    certified and vetted staff members.</p>
                                <Link
                                    href={'/repairs'}>
                                    <Button className="mt-6">
                                        See Repairs</Button>
                                </Link>
                            </div>
                        </div>
                        <Image src="/upstairs-mosaique.jpg" alt="upstairs-mosaique" width={1200} height={1200}
                               className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"/>
                    </div>
                </div>
            </div>
            <div className="relative h-[350px] lg:h-[300px] bg-gradient-to-tr from-indigo-300 to-indigo-100 overflow-hidden px-6">
                <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-indigo-500"></div>
                <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-black"></div>
                <div className="grid items-center h-full">
                    <div className="text-center">
                        <h3 className="font-bold sm:text-4xl text-3xl">Questions, Comments?<br/>Let us know!</h3>
                        <div className="mt-8 ">
                            <p className="text-base text-[#333]">Our customer service staff loves helping people. If
                                you&#39;re having trouble with something we&#39;ll do our best to help!</p>
                            <div className="flex items-center justify-center">
                                <SocialIcons/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
