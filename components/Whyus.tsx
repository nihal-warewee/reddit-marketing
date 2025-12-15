import Image from "next/image";


export default function Whyus() {
    return (
        <section className="relative isolate w-full grid place-items-center pt-20 2xl:pt-40 overflow-x-clip text-white">
            <div className="absolute top-1/2 -left-80 h-125 w-125 -z-10
             bg-fuchsia-500/10 rounded-full blur-3xl" />

            <div className="text-center">
                <h2 className="text-3xl font-semibold">Why Partner with Us</h2>
                <p className="text-gray-200 mt-2">We believe our offering stands out because</p>
            </div>


            <p className="text-gray-200 text-xs text-center lg:text-left lg:text-lg mt-6 max-w-5xl mx-auto px-4">
                <span className="font-medium text-white">We have proven results in the AI Companion SaaS space:</span>
                &nbsp;We delivered more than 70% of the posts/comments ranking for “AI girlfriend” -related keywords in that niche.
            </p>


            <div className="mt-6 max-w-5xl mx-auto px-4">

                <div className="grid lg:grid-cols-2 gap-6 items-center">
                    <div className="">
                        <Image
                            src="/viewsmetric.webp"
                            alt="views-metrics"
                            width={1200}
                            height={400}
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    <div className="">
                        <Image
                            src="/growthmetric.webp"
                            alt="growth-metrics"
                            width={1200}
                            height={400}
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-6 max-w-5xl mx-auto px-4">

                <div className="grid lg:grid-cols-2 gap-6 items-center">
                    <div className="flex-1 flex flex-col-reverse lg:block gap-4">
                        <Image
                            src="/saaslanding.webp"
                            alt="SaaS-landing-page"
                            width={1200}
                            height={400}
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="w-full h-auto object-contain"
                        />
                        <p className="text-gray-200 mt-4 text-xs lg:text-sm text-center lg:text-left">
                            <span className="font-medium text-white text-sm lg:text-base">We built our own Reddit-SaaS tool, RedSERP - </span><br />
                            giving us deeper platform insight, account-network management, karna-profile access and Reddit-SEO intelligence.
                        </p>
                    </div>
                    <div className="flex-1">
                        <p className="text-gray-200 mb-4 text-xs lg:text-sm text-center lg:text-left">
                            <span className="font-medium text-white text-sm lg:text-base">We combine Reddit community insight with SEO and keyword strategy (building on the recognized shift : </span><br />
                            Reddit threads increasingly dominate Google/LLM ranking in many niches).
                        </p>
                        <Image
                            src="/googleresult.webp"
                            alt="Google-results-page"
                            width={1200}
                            height={400}
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
