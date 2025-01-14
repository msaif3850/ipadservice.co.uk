import Image from "next/image";
import Link from "next/link";


export default function WatchRepair() {

    return (
        <>
            <>
                <div className="px-6 py-24 sm:py-22 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-5xl font-semibold tracking-tight text-gray-950 sm:text-7xl">Watch Repair
                            Leeds</h1>
                        <h2 className="mt-8 text-pretty text-lg text-gray-600 sm:text-xl/8">This webpage is a work in
                            progress... <br/>
                            However, we do repair this device. Give us a call on <a href="tel:+441132591700" className="underline hover:no-underline">0113 259 1700</a></h2>
                        <Image className="" src={'/watch-404.jpg'} alt='imac-404' width={600} height={400}/>
                    </div>
                </div>
            </>
        </>
    )
}