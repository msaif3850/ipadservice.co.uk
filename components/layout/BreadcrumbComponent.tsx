import { useRouter } from 'next/router';
import Link from 'next/link';

export default function BreadcrumbComponent() {
    const router = useRouter();
    const pathSegments = router.asPath.split('/').filter(Boolean);

    // Function to generate titles from the path segments
    const getSegmentTitle = (segment: string) => {
        const titles: Record<string, string> = {
            "tablet-repair": "Tablet Repair",
            "faq": "FAQ",
            "contact": "Contact Us",
        };
        return titles[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    };

    // Function to generate breadcrumb link paths
    const getLinkPath = (index: number) => {
        return '/' + pathSegments.slice(0, index + 1).join('/');
    };

    return (
        <nav className="px-10 py-5">
            <ol className="flex items-center space-x-2">
                <li className="flex items-center space-x-2">
                    <Link href="/">
                        <a className="text-blue-500 hover:underline">Home</a>
                    </Link>
                    <span className="text-gray-400">/</span>
                </li>
                {pathSegments.map((segment, index) => (
                    <li key={index} className="flex items-center space-x-2">
                        <Link href={getLinkPath(index)}>
                            <a className="text-blue-500 hover:underline">{getSegmentTitle(segment)}</a>
                        </Link>
                        {index < pathSegments.length - 1 && <span className="text-gray-400">/</span>}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
