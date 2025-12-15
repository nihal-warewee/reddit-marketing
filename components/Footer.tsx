import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { TbUsersPlus } from "react-icons/tb";

export default function Footer() {
    return (
        <footer className="relative bg-slate-900 text-slate-200 font-sans overflow-hidden isolate">

            <div className="max-w-6xl 2xl:max-w-[90%] mx-auto px-8 pt-16 pb-64 lg:pb-90">

                <div className="flex flex-col lg:flex-row gap-5 items-center justify-between">
                    <Image src={'/logo.png'} alt="warewe-logo-footer" height={70} width={180} />

                    <div className="flex items-center gap-4 text-sm">
                        <span className="text-slate-300">Follow Us</span>
                        <Link href={'/'} className="text-slate-300 hover:text-white"><FaLinkedin /></Link>
                        <Link href={'/'} className="text-slate-300 hover:text-white"><FaTwitter /></Link>
                        <Link href={'/'} className="text-slate-300 hover:text-white"><FaFacebook /></Link>
                    </div>
                </div>


                <div className="flex items-center justify-center gap-20 mt-16">
                    <Link href={'/'} className="flex flex-col items-center gap-4 text-center text-slate-200">
                        <FiMail size={36} />
                        <span className="text-sm">GET IN TOUCH</span>
                    </Link>
                    <Link href={'/'} className="flex flex-col items-center gap-4 text-center text-slate-200">
                        <TbUsersPlus size={36} />
                        <span className="text-sm">WORK WITH US</span>
                    </Link>
                </div>


                <div className="flex items-center justify-center gap-36 mt-10 border-y border-purple-700 py-8">
                    <Link href={'/'} className="text-slate-300 hover:text-white">About</Link>
                    <Link href={'/'} className="text-slate-300 hover:text-white">Blog</Link>
                </div>


                <p className="text-center text-gray-400 text-xs mt-6">
                    2016 - {new Date().getFullYear()} Warewe | ALL Rights Reserved.{" "}
                    <Link href="/" className="text-purple-400 hover:underline">Privacy Policy</Link>
                </p>
            </div>


            <div
                className=" pointer-events-none absolute left-1/2 -bottom-10 lg:bottom-0 transform -translate-x-1/2
                   w-full max-w-245 h-85 md:h-135 -z-10 "
                aria-hidden="true">
                <Image
                    src={'/footer-illustration.png'}
                    alt="footer-illustration"
                    fill
                    className="object-contain"
                    priority />
            </div>
        </footer>
    );
}
