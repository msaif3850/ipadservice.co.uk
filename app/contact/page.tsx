import SocialIcons from "@/components/layout/SocialIcon";
import Link from "next/link";

export default function SmartPhoneRepair() {
    return (
        <>
            <div className="relative isolate bg-white">
                <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                    <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                            <div
                                className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(244,244,245,1),rgba(255,255,255,0))] ring-1 ring-gray-900/10 lg:w-1/2">
                                <svg
                                    className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                                    aria-hidden="true">
                                    <defs>
                                        <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200"
                                                 x="100%" y="-1" patternUnits="userSpaceOnUse">
                                            <path d="M130 200V.5M.5 .5H200" fill="none"></path>
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" strokeWidth="0" fill="white"></rect>
                                    <svg x="100%" y="-1" className="overflow-visible fill-gray-50">
                                        <path d="M-470.5 0h201v201h-201Z" strokeWidth="0"></path>
                                    </svg>
                                    <rect width="100%" height="100%" strokeWidth="0"
                                          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"></rect>
                                </svg>
                            </div>
                            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Get
                                in touch</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">Have a question? Need help or a quote? Get in touch with us.</p>
                            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none"><span className="sr-only">Address</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                                             data-slot="icon" className="h-7 w-6 text-gray-400">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"></path>
                                        </svg>
                                    </dt>
                                    <dd>iPad Service <br/>
                                        2 Rose Terrace<br/>
                                        LS18 4QA Leeds
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none"><span className="sr-only">Times</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                                             data-slot="icon" className="h-7 w-6 text-gray-400">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                                        </svg>
                                    </dt>
                                    <dd>Monday - Saturday: 9am - 7pm<br/>Sunday: 10am - 6pm</dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none"><span className="sr-only">Telephone</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                                             data-slot="icon" className="h-7 w-6 text-gray-400">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path>
                                        </svg>
                                    </dt>
                                    <dd><a className="hover:text-gray-900" href="tel:01132591700">0113 259 1700</a>
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none"><span className="sr-only">Email</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                                             data-slot="icon" className="h-7 w-6 text-gray-400">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
                                        </svg>
                                    </dt>
                                    <dd><a className="hover:text-gray-900"
                                           href="mailto:info@ipadservice.co.uk">info@ipadservice.co.uk</a></dd>
                                </div>
                            </dl>
                            <SocialIcons/>
                            <div className="flex gap-x-4 mt-6">
                                <Link href={'terms-of-service'} className="hover:underline">Terms & Conditions</Link>
                                <Link href={'/privacy-policy'} className="hover:underline">Privacy Policy</Link>
                                <Link href={'/faq'} className="hover:underline">F.A.Q</Link>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <form className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">


                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}