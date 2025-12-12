import { FaCheck } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";


export default function Pricing() {
    return (
        <section className="relative isolate w-full grid place-items-center pt-20 overflow-x-clip text-white">
            <div className="absolute top-1/2 -right-50 h-125 w-125 -z-10
             bg-fuchsia-500/10 rounded-full blur-3xl" />


            <div className="text-center">
                <h2 className="text-4xl font-extrabold">Choose Your Plan</h2>
                <p className="text-gray-300 mt-2">Scalable Reddit growth plans for every stage.</p>
            </div>


            <div className="mt-8 w-full max-w-5xl mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card 1 */}
                    <article className="rounded-2xl bg-white/95 text-slate-900 p-6 border border-gray-200
                             shadow-[0_0_28px_rgba(124,58,237,0.45)]">
                        <div className="flex flex-col justify-between">
                            <div className="flex items-center justify-between">
                                <div className="">
                                    <IoIosStar size={24} fill="orange" />
                                </div>
                                <div className="text-2xl font-extrabold">USD 3000<span className="text-base font-medium">/month</span></div>
                            </div>

                            <div className="mt-2">
                                <h3 className="text-xl font-semibold">Starter plan</h3>
                                <div className="text-sm text-slate-600 mt-1"><span className="font-medium text-black">Target:</span> 100,000 views/month</div>
                            </div>
                        </div>

                        <hr className="my-5 border-t border-slate-300" />


                        <h4 className="font-semibold">What We Offer:</h4>
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
                            <ul className="space-y-3 *:flex *:gap-4">
                                <li><FaCheck className="text-green-600 shrink-0" size={18} /> <span className="">5-10 comments on recent posts (for instant brand push and traffic)</span></li>
                                <li><FaCheck className="text-green-600 shrink-0" size={18} /> <span className="">5-10 comments on evergreen posts ranking on google (for stable traffic)</span></li>
                                <li><FaCheck className="text-green-600 shrink-0" size={18} /> <span className="">5-10 posts targeting relevant keywords for google ranking.</span></li>
                            </ul>

                            <ul className="space-y-3  *:flex *:gap-4">
                                <li><FaCheck className="text-green-600 shrink-0" size={18} /> <span className="">50-100 upvotes</span></li>
                                <li><FaCheck className="text-green-600 shrink-0" size={18} /> <span className="">10-15 comments to push our posts.</span></li>
                                <li><FaCheck className="text-green-600 shrink-0" size={18} /> <span className="">All comments/posts comes from high karma profiles for higher stickability</span></li>
                            </ul>
                        </div>

                        <div className="mt-6">
                            <h4 className="font-semibold">What You Can Expect:</h4>
                            <ul className="mt-3 space-y-2 text-sm text-slate-700  *:flex *:gap-4">
                                <li><FaCheck className="text-green-600 shrink-0" size={18} /> <span className="">~3% conversion = ~3000 clicks</span></li>
                                <li><FaCheck className="text-green-600 shrink-0" size={18} /> <span className="">Improved SEO traffic and campaigns.</span></li>
                                <li><FaCheck className="text-green-600 shrink-0" size={18} /> <span className="">Enhanced brand visibility.</span></li>
                            </ul>
                        </div>

                        <div className="mt-6">
                            <button className="text-lg bg-violet-600 text-white rounded-md py-2 w-full 
                            cursor-pointer hover:bg-violet-800 transition-colors duration-200">Get Started</button>
                        </div>
                    </article>

                    {/* Card 2 */}
                    <article className="rounded-2xl bg-white/95 text-slate-900 p-6 border border-gray-200
                            shadow-[0_0_28px_rgba(124,58,237,0.45)]">
                        <div className="flex flex-col justify-between">
                            <div className="flex items-center justify-between">
                                <div className="">
                                    <IoIosStar size={24} fill="orange" />
                                </div>
                                <div className="text-2xl font-extrabold">USD 5000<span className="text-base font-medium">/month</span></div>
                            </div>

                            <div className="mt-2">
                                <h3 className="text-xl font-semibold">Pro plan</h3>
                                <div className="text-sm text-slate-600 mt-1"><span className="font-medium text-black">Target:</span> 200,000 views/month</div>
                            </div>
                        </div>

                        <hr className="my-5 border-t border-slate-300" />

                        <h4 className="font-semibold">What We Offer:</h4>
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
                            <ul className="space-y-3 *:flex *:gap-4">
                                <li><FaCheck className="text-green-600 shrink-0" size={18} /> <span className="">10-20 comments on recent posts (for instant brand push and traffic).</span></li>
                                <li><FaCheck className="text-green-600 shrink-0" size={18} /> <span className="">10-20 comments on evergreen posts ranking on google (for stable traffic).</span></li>
                                <li><FaCheck className="text-green-600 shrink-0" size={18} /> <span className="">10-20 posts targeting relevant keywords for google ranking.</span></li>
                            </ul>

                            <ul className="space-y-3 *:flex *:gap-4">
                                <li><FaCheck className="text-green-600 shrink-0" size={18} /> <span className="">100-500 upvotes.</span></li>
                                <li><FaCheck className="text-green-600 shrink-0" size={18} /> <span className="">20-30 comments to push our posts.</span></li>
                                <li><FaCheck className="text-green-600 shrink-0" size={18} /> <span className="">All comments/posts comes from high karma profiles for higher stickability</span></li>
                            </ul>
                        </div>

                        <div className="mt-6">
                            <h4 className="font-semibold">What You Can Expect:</h4>
                            <ul className="mt-3 space-y-2 text-sm text-slate-700 *:flex *:gap-4">
                                <li><FaCheck className="text-green-600 shrink-0" size={18} /> <span className="">~3% conversion = ~6000 clicks</span></li>
                                <li><FaCheck className="text-green-600 shrink-0" size={18} /> <span className="">Improved SEO traffic and campaigns.</span></li>
                                <li><FaCheck className="text-green-600 shrink-0" size={18} /> <span className="">Enhanced brand visibility.</span></li>
                            </ul>
                        </div>

                        <div className="mt-6">
                            <button className="text-lg bg-violet-600 text-white rounded-md py-2 w-full 
                            cursor-pointer hover:bg-violet-800 transition-colors duration-200">Get Started</button>
                        </div>
                    </article>
                </div>


                <p className="mt-6 text-sm text-red-500 italic">
                    Disclaimer: Reddit may remove some posts or comments at any time, which is outside our control.
                    We cannot guarantee that all posts or comments will remain visible.
                    However, we will replace removed posts with more content if the posts are removed within 30 days.
                </p>
            </div>
        </section>
    )
}
