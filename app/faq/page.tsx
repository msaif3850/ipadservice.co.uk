
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";

export default function FAQ() {
    return (
        <>

            <div className="p-10">
                <div className="flex flex-col items-center gap-2 justify-center">
                    <h1 className="text-4xl">&#34;The human being is the most curious creature.&#34;</h1>
                    <h2 className="sub-head text-center">If you don&#39;t find the answer you&#39;re looking for don&#39;t hesitate
                        to call us at <a className="underline hover:no-underline" href="tel:01132591700">0113 259 1700</a></h2>
                    <Image src={'/faq-banner.png'} alt='faq' width={900} height={400}/>
                    <p className="text-gray-500 italic">DELVE INTO THE MINUTIAE</p>
                </div>

                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg">Are you actually in Leeds? I don&#39;t want to send my iPad in the
                            post!</AccordionTrigger>
                        <AccordionContent>
                            Yes we are a genuine locally based business, please be wary of websites that make
                            unsubstantiated promises, ask you to post your iPad or have no evidence on their website
                            that they possess a workshop, our workshop is dedicated to iPad repairs and you&#39;re free
                            to see inside at the following link <a
                            href="https://www.google.co.uk/maps/preview?layer=c&amp;z=17&amp;sll=53.832353000000005,-1.644312&amp;cid=15137778018454831521&amp;panoid=H4aJR55YYLwAAAGusfe3wQ&amp;cbp=13,186.97957388791465,,0,0&amp;q=ipad+repair&amp;ei=7hIqU6_hOISm0AWr14Ew&amp;ved=0CAwQoB8"> here</a>.
                            The truth is the vast majority of businesses currently offering iPad repairs do so from
                            messy unorganized premises.

                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg">Do you use genuine Apple parts?</AccordionTrigger>
                        <AccordionContent>Yes we have two different types of screens, a standard quality glass is £80,
                            we also have a genuine Apple glass which we can fit on iPad2 iPad 3 iPad 4 and iPad Air, we
                            charge a slight premium for the original parts, please call us for exact pricing. As always
                            we are willing to demonstrate all of our parts so you can get an appreciation for their
                            quality.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg">What kind of service do you offer?</AccordionTrigger>
                        <AccordionContent>We offer an unrivaled and distinctive service, we operate from a state of the
                            art workshop which is fully viewable on google maps, we are currently the only genuine shop
                            offering a full 12 Months warranty, we have been established for over 10 years so this is a
                            warranty you can put your faith in.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg">Do you give a warranty?</AccordionTrigger>
                        <AccordionContent>Yes and an astonishing 12 Months long warranty, we are the only reputable
                            business offering such a long warranty, our return rate is so miniscule we have no problems
                            honoring this industry leading warranty.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="text-lg">I want my iPad collected, is it really Free Collection and Free
                            Delivery?</AccordionTrigger>
                        <AccordionContent>While we would prefere our customers to drop their iPads off to our workshop,
                            we can make exceptions on a case by case basis, we would prefere our customers to experience
                            our amazing workshop first hand, this not only helps us build trust with our prospective
                            customers but also allows us to differentiate ourselves from the plethora of low quality
                            outfits who show you fancy websites but actually operate from sqaulid conditions. If you
                            have no way of traveling to our store, we can arrage a pick up, however this is no longer
                            free and we charge a flat £20 collection charge for the whole of the Leeds
                            area.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger className="text-lg">Which areas in Leeds do you service?</AccordionTrigger>
                        <AccordionContent>Headingley LS16, LS17 Alwoodley, Bardsey, East Keswick, Eccup, Harewood,
                            Moortown, Shadwell, Weardley, Wike. LS7 Beck Hill, Buslingthorpe, Chapel Allerton,
                            Chapeltown, Little London, Lovell Park, Meanwood, Miles Hill, Potternewton, Scott Hall,
                            Sheepscar. LS25 Aberford, Ferry Fryston, Garforth, Hillam, Kippax, Ledsham, Micklefield,
                            Monk Fryston, Sherburn-in-Elmet, South Milford. Ilkley, Menston and
                            Otley.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger className="text-lg">Can you do a same-day service?</AccordionTrigger>
                        <AccordionContent>We we can book in any iPad without an appointment, and the turnaround time is
                            currently 1 hour. Often times your iPad will be repaired in less than 30 minutes, although
                            this depends on workload.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger className="text-lg">Can I have a quote in writing?</AccordionTrigger>
                        <AccordionContent>If you shoot us an email at <a
                            href="mailto:info@ipadservice.co.uk?Subject=Quote%20Request">info@ipadservice.co.uk</a> we
                            can certainly get back to you with a written quote.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger className="text-lg">Are you open weekends?</AccordionTrigger>
                        <AccordionContent>We are now open on weekends. including sundays. 9am-6pm on Saturday and
                            10:30am to 5pm Sunday.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-10">
                        <AccordionTrigger className="text-lg">How long does a typical iPad repair take?</AccordionTrigger>
                        <AccordionContent>A typical iPad takes around 1 hour to repair, it wont matter how badly smashed
                            it is, we can always straighten out the corners and rectify and warping to the frame at no
                            extra charge.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-11">
                        <AccordionTrigger className="text-lg">Do you give any discounts?</AccordionTrigger>
                        <AccordionContent>Yes we give a student discount of 10% for all iPad repairs.</AccordionContent>
                    </AccordionItem>
                </Accordion>
                <h2 className="text-2xl mt-12 text-center italic">No appointment needed. Walk in service</h2>
            </div>
            <div className="text-center border-t border-gray-200 pt-6 pb-12">
            <Image src={'/faq-bottom.png'} alt='faq' width={2500} height={400}/>
                <h2 className="text-xl mt-2">OUR TECHNICIANS ARE VERSED IN PERFORMING CLINICIAL <br/>
                    PROCEDURES ON YOUR IPADS LEAVING THEM FLAWLESS
                </h2>
            </div>
        </>
    )
}