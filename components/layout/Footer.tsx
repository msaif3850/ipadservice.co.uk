import Link from 'next/link';
import Image from 'next/image';
import {BiMobile} from "react-icons/bi";
import {BiEnvelope} from "react-icons/bi";
import {BiMap} from "react-icons/bi";
import SocialIcons from "@/components/layout/SocialIcon"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 px-5 lg:px-10 gap-10">
                <div className="mb-6 lg:mb-0">
                    <Link href={'./'} className="hover:underline">
                        <Image src="/logo/logo-white-colored.png" alt="iPad Pro Repair Leeds" width={200} height={40}/>
                    </Link>
                    <p className="text-sm my-4">iPhone, iPod, iPad, and Mac are registered trademarks of Apple, Inc.
                        iPad Service is an independent service company and is in no way affiliated with Apple Inc.</p>
                    <SocialIcons/>
                </div>
                <div className="mb-6 lg:mb-0">
                    <h4 className="text-xl mb-1">Services</h4>
                    <hr className="mb-4"/>
                    <ul className="space-y-2">
                        <li><Link href={'/repairs'} className="hover:underline">Get A Repair Started</Link></li>
                        <li><Link href={'/smartphone-repair'} className="hover:underline">Cell Phone</Link></li>
                        <li><Link href={'/tablet-repair'} className="hover:underline">Tablet</Link></li>
                        <li><Link href={'/computer-repair'} className="hover:underline">Computer</Link></li>
                        <li><Link href={'/ipod-repairs'} className="hover:underline">iPod</Link></li>
                    </ul>
                </div>
                <div className="mb-6 lg:mb-0">
                    <h4 className="text-xl mb-1">Company</h4>
                    <hr className="mb-4"/>
                    <ul className="space-y-2">
                        <li><Link href={'/about'} className="hover:underline">About Us</Link></li>
                        <li><Link href={'/contact'} className="hover:underline">Contact Us</Link></li>
                        <li><Link href={'/faq'} className="hover:underline">F.A.Q</Link></li>
                        <li><Link href={'./'} className="hover:underline">Our Story</Link></li>
                        <li><Link href={'./'} className="hover:underline">Careers</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl mb-1">Contact Us</h4>
                    <hr className="mb-4"/>
                    <p className="text-md mb-2">iPad Service <br/>2 Rose Terrace <br/>LS18 4QA Leeds</p>
                    <p className="text-md mb-2">
                        <a href="https://www.google.co.uk/maps/dir/''/2+Rose+Terrace,+Horsforth,+Leeds+LS18+4QA/@53.8323688,-1.6487277,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x487958bd3ae3ec61:0x6fd032f36d686d2f!2m2!1d-1.6443503!2d53.8323689"
                           target="_blank" className="flex items-center hover:underline"><BiMap
                            className="text-xl -ml-1 mr-2"/> Get directions</a>
                    </p>
                    <p className="text-md mb-2">
                        <a href="tel:01132591700" className="flex items-center hover:underline"><BiMobile
                            className="text-xl -ml-1 mr-2"/> 0113 259 1700</a>
                    </p>
                    <p className="text-md mb-2">
                        <a href="mailto:info@ipadservice.co.uk"
                           className="flex items-center hover:underline"><BiEnvelope
                            className="text-xl -ml-1 mr-2"/> info@ipadservice.co.uk</a>
                    </p>
                </div>
            </div>
            <div id="footer-disclosure" className="bg-black py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row justify-between items-center text-sm">
                        <p className="mb-4 lg:mb-0">
                            <span className="mr-2">© {new Date().getFullYear()} iPad Service Leeds</span>
                        </p>
                        <small className="text-gray-200 text-center lg:text-left">
                            <Link href={'/privacy-policy'} className="mx-2 hover:underline">Privacy</Link>
                            <span>|</span>
                            <Link href={'/terms-of-service'} className="mx-2 hover:underline">Terms</Link>
                            <span>|</span>
                            <Link href={'./'} className="ml-2 hover:underline">Sitemap</Link>
                        </small>
                    </div>
                </div>
            </div>
        </footer>
    );
}
