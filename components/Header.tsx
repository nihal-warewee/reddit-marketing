import Image from "next/image";


export default function Header() {
    return (
        <header className="bg-gray-900 p-3 px-10 flex items-center justify-between font-sans sticky top-0 z-50">
            <Image src={'/logo.png'} alt="header-logo-png" width={100} height={80} />
            <nav>
                <ul className="flex text-white gap-6">
                    <li>Solutions</li>
                    <li>Products</li>
                    <li>Services</li>
                </ul>
            </nav>
            <button className="bg-violet-600 text-white rounded-lg py-2 px-5 
            cursor-pointer hover:bg-violet-800 transition-colors duration-200">Book a Call</button>
        </header>
    )
}
