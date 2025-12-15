import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative isolate w-full overflow-x-clip pt-20 lg:pt-16 2xl:pt-24">

            <div className="absolute -top-32 -left-64 h-96 w-96 -z-10 bg-fuchsia-500/10 rounded-full blur-3xl" />
            <div className="absolute top-40 -right-64 h-96 w-96 -z-10 bg-fuchsia-500/10 rounded-full blur-3xl" />

            <div className="w-[90%] mx-auto flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

                <div className="flex-1 text-white space-y-5 text-center lg:text-left">
                    <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight">
                        Revenue-Focused Reddit Marketing Agency
                    </h1>

                    <p className="text-gray-200 text-lg sm:text-xl xl:text-2xl max-w-2xl mx-auto lg:mx-0">
                        Either we generate $50,000+ in revenue or 2× your growth — or you don’t pay.
                    </p>

                    <div className="pt-6">
                        <button
                            className="bg-violet-600 text-white rounded-md py-3 px-8 text-base sm:text-lg
                            hover:bg-violet-800 transition-colors duration-200"
                        >
                            Book a Call
                        </button>
                        <p className="mt-3 text-gray-300 text-sm">
                            (Free consultation. No sales pitch.)
                        </p>
                    </div>
                </div>

                {/* Image */}
                <div className="flex-1 w-full max-w-xl lg:max-w-none">
                    <Image
                        src="/hero.webp"
                        alt="hero-image-png"
                        width={814}
                        height={635}
                        className="w-full h-auto object-contain"
                        draggable={false}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
