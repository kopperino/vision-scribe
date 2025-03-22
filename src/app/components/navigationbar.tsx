import Link from 'next/link';

export default function NavigationBar() {
    return (
        <nav className="flex flex-row justify-between bg-gray-700 text-center place-items-center">
            <Link href="/">
                <div className="justify-start font-semibold bg-gray-500 text-2xl mx-10 p-4 rounded">
                    Vision Scribe
                </div>
            </Link>
            <ul className="flex flex-row justify-center gap-10 p-5 font-semibold">
                <Link href="/">
                    <li className=" px-5 py-2">text</li>
                </Link>
                <Link href="/">
                    <li className=" px-5 py-2">text</li>
                </Link>
                <Link href="/">
                    <li className="px-5 py-2">text</li>
                </Link>
                <Link href="/">
                    <li className="px-5 py-2">text</li>
                </Link>
                <Link href="/">
                    <li className=" px-5 py-2">text</li>
                </Link>
            </ul>
        </nav>
    );
}
