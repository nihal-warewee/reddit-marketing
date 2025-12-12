import Image from "next/image";


export default function Hero() {
    return (
        <section className="relative isolate w-full grid place-items-center pt-10 2xl:pt-20 overflow-x-clip">
            <div className="absolute -top-30 -left-60 h-125 w-125 -z-10
             bg-fuchsia-500/10 rounded-full blur-3xl" />
            <div className="absolute top-50 -right-60 h-125 w-125 -z-10
             bg-fuchsia-500/10 rounded-full blur-3xl" />
            <div className="w-[90%] mx-auto flex items-center gap-20">
                <div className="flex-1 text-white space-y-4">
                    <h1 className="text-5xl font-bold">Revenue-Focused Reddit Marketing Agency</h1>
                    <p className="text-gray-200 text-2xl">Either we generate $50,000+ in revenue or 2x your growth or you don&apos;t pay.</p>

                    <button className="mt-8 text-lg
                    bg-violet-600 text-white rounded-md py-3 px-8 
                    cursor-pointer hover:bg-violet-800 transition-colors duration-200">Book a Call</button>
                    <p className="text-gray-200 text-sm">(Free consultation. No sales pitch.)</p>
                </div>
                <div className="flex-1">
                    <Image src={'/hero.png'} alt="hero-image-png" width={814} height={635} className="w-full h-auto "  draggable={false}/>
                </div>
            </div>
        </section>
    )
}
