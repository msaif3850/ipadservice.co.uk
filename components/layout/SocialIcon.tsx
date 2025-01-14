import Image from "next/image";
import Link from "next/link";

const links = [
    {
        name: 'X', link: 'https://twitter.com/ipadfixLeeds',
        imgSource: '/icons/twitter-x.svg',
        description: ''
    },
    {
        name: 'facebook', link: 'https://www.facebook.com/ipadrepairsLeeds/',
        imgSource: '/icons/facebook.svg', description: ''
    },
    {
        name: 'linkedin', link: 'https://uk.linkedin.com/in/ipadserviceltd',
        imgSource: '/icons/linkedin.svg', description: ''
    },
    {
        name: 'instagram', link: 'https://www.instagram.com/ipadservice.Leeds/',
        imgSource: '/icons/instagram.svg', description: ''
    },
    {
        name: 'youtube', link: 'https://www.youtube.com/channel/UC3ckU_qU5MJYyE5ryjgEvLg',
        imgSource: '/icons/youtube.svg', description: ''
    },
]

export default function SocialIcons() {
    return (
        <>
            <ul className="flex mt-4 gap-4">
                {links.map(link => (
                    <Link href={link.link} key={link.name} target="_blank">
                        <li className="bg-white h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <Image src={link.imgSource} alt={link.name} width={200} height={200} className="h-5 w-5"/>
                        </li>
                    </Link>
                ))}
            </ul>
        </>

    )
}