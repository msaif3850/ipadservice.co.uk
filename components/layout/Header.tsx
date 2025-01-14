'use client'
import {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Main Header */}
            <div
                className={`flex items-center justify-between px-6 lg:px-10 fixed w-full z-50 transition-all duration-300 ${
                    scrolled ? "bg-white shadow-sm py-2" : "bg-white py-3"
                }`}
            >
                <Link href="/" className="">
                    <Image priority={false}
                        src="/logo/logo-black-colored.png"
                        alt="logo"
                        width={200}
                        height={200}
                        className="transition-transform duration-300"
                        style={{transform: scrolled ? "scale(0.9)" : "scale(1)"}}
                    />
                </Link>
                {/* Desktop Links */}
                <div className="hidden lg:flex flex-row items-center text-lg gap-6">
                    <Link href={"/about"} className="text-sm font-medium p-2 text-gray-900 hover:text-gray-950">About Us</Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center text-sm font-medium p-2 text-gray-900 hover:text-gray-950 gap-1">
                            <span>Phone Repairs</span>
                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 flex-auto rounded-2xl bg-white p-2 text-sm leading-6 shadow-lg ring-1 ring-gray-950/10">
                            <Link href={"/iphone-repair"} className="">
                                <DropdownMenuItem className="p-4 font-medium cursor-pointer hover:bg-gray-100">iPhone Repairs</DropdownMenuItem>
                            </Link>
                            <Link href={"/smartphone-repair"}>
                                <DropdownMenuItem className="p-4 font-medium cursor-pointer hover:bg-gray-100">Smartphone Repairs</DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center text-sm font-medium p-2 text-gray-900 hover:text-gray-950 gap-1">
                            <span>Tablet Repairs</span>
                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 flex-auto rounded-2xl bg-white p-2 text-sm leading-6 shadow-lg ring-1 ring-gray-950/10">
                            <Link href={"/tablet-repair"} className="">
                                <DropdownMenuItem className="p-4 font-medium cursor-pointer hover:bg-gray-100">Tablet Repairs</DropdownMenuItem>
                            </Link>
                            <Link href={"/tablet-repair/ipad-repair-leeds"}>
                                <DropdownMenuItem className="p-4 font-medium cursor-pointer hover:bg-gray-100">iPad Repairs</DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Link href={"/mac-repair"} className="text-sm font-medium p-2 text-gray-900 hover:text-gray-950">Mac Repairs</Link>
                    <Link href={"/watch-repair"} className="text-sm font-medium p-2 text-gray-900 hover:text-gray-950">Watch Repairs</Link>
                    <Link href={"/ipod-repair"} className="text-sm font-medium p-2 text-gray-900 hover:text-gray-950">iPod Repairs</Link>
                </div>
                {/* Mobile Menu Button */}
                <Sheet>
                    <SheetTrigger asChild className="order-last">
                        <button className="lg:hidden text-gray-900">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-white p-6">
                        <SheetHeader>
                            <Image src="/logo/logo-black-colored.png" alt="logo" width={150} height={150} />
                        </SheetHeader>
                        <nav className="mt-6 space-y-4">
                            <Link href={"/about"} className="block text-gray-900 hover:text-gray-950">About Us</Link>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex w-full items-center justify-between rounded-lg py-2 text-base font-medium leading-7 hover:bg-gray-950/5">
                                    <span>Phone Repairs</span>
                                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56 bg-white shadow-lg rounded-lg">
                                    <Link href={"/iphone-repair"}>
                                        <DropdownMenuItem className="p-3 hover:bg-gray-100">iPhone Repair</DropdownMenuItem>
                                    </Link>
                                    <Link href={"/smartphone-repair"}>
                                        <DropdownMenuItem className="p-3 hover:bg-gray-100">Smartphone Repair</DropdownMenuItem>
                                    </Link>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex w-full items-center justify-between rounded-lg py-2 pl-3-pr-3.5 text-base font-medium leading-7 hover:bg-gray-950/5">
                                    <span>Tablet Repairs</span>
                                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56 bg-white shadow-lg rounded-lg">
                                    <Link href={"/tablet-repair"}>
                                        <DropdownMenuItem className="p-3 hover:bg-gray-100">Tablet Repair</DropdownMenuItem>
                                    </Link>
                                    <Link href={"/tablet-repair/ipad-repair-leeds"}>
                                        <DropdownMenuItem className="p-3 hover:bg-gray-100">iPad Repair</DropdownMenuItem>
                                    </Link>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Link href={"/mac-repair"} className="block text-gray-900 hover:text-gray-950">Mac Repairs</Link>
                            <Link href={"/watch-repair"} className="block text-gray-900 hover:text-gray-950">Watch Repairs</Link>
                            <Link href={"/ipod-repair"} className="block text-gray-900 hover:text-gray-950">iPod Repairs</Link>
                        </nav>
                    </SheetContent>
                </Sheet>


                <Button >
                    <Link href={"/contact"} className="">Contact</Link>
                </Button>
            </div>
        </>
    );
}
