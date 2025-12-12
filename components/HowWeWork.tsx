import Image from "next/image";
import { AiOutlineBarChart } from "react-icons/ai";
import { FiBarChart2, FiEdit2, FiVolume2, FiFileText, FiShield } from "react-icons/fi";
import { HiSpeakerphone } from "react-icons/hi";
import { LuChartSpline } from "react-icons/lu";

const StarBullet = () => (
    <span className="inline-block text-amber-400 mr-2 leading-none">✶</span>
);

const cards = [
    {
        id: 1,
        Icon: AiOutlineBarChart,
        title: "On-boarding and Strategy Kick-off",
        bullets: [
            { text: <><strong>Deep dive</strong>: your brand, ideal customer profile (ICP), target keywords, competitive Reddit/thread-landscape.</> },
            { text: <><strong>Subreddit-audit</strong>: identify 5-10 relevant subreddits, threads ranking in google, high-karma accounts, plus rules/behaviours for each.</> },
        ],
    },
    {
        id: 2,
        Icon: FiEdit2,
        title: "Content Creation and Account Preparation",
        bullets: [
            { text: "Prepare 5-10 new posts/month (text + optional images/links) aligned to your keywords and Reddit norms." },
            { text: "Source/prepare 10-20 evergreen thread placements + 10-20 recent-post comments." },
            { text: "Identify high-karma account pool, build posting calendar, ensure account health." },
        ],
    },
    {
        id: 3,
        Icon: HiSpeakerphone,
        title: "Execution & Engagement Boost",
        bullets: [
            { text: "Publish posts + comments as scheduled." },
            { text: "Upvote/comment boost via our network to build early traction." },
            { text: "Monitor engagement, up-votes, comments, stickiness of threads." },
        ],
    },
    {
        id: 4,
        Icon: LuChartSpline,
        title: "Reporting & Optimisation",
        bullets: [
            { text: <><strong>Monthly report</strong>: views, clicks (tracked via UTM/landing pages), subreddit performance, keyword ranking impact.</> },
            { text: <><strong>Quarterly review</strong>: thread-ranking status (Google/Reddit search), evergreen traffic tail, adjust subreddits & content angle accordingly.</> },
        ],
    },
    {
        id: 5,
        Icon: FiShield,
        title: "Ongoing Quality & Compliance",
        bullets: [
            { text: "We vet each subreddit’s rules in advance." },
            { text: "We maintain account rotation, avoid “spammy” behaviour, keep posts as genuine contributions." },
            { text: "We advise transparency and readiness for Reddit’s moderator/community dynamics." },
        ],
    },
];

export default function HowWeWork() {
    return (
        <section className="relative isolate w-full grid place-items-center mt-20 p-20 overflow-x-clip text-white">

            <div className="absolute inset-0 -z-10">
                <Image
                    src="/howweworkbg.jpg"
                    alt="how-we-work-background-image"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 -z-10" />
            </div>

            <div className="max-w-6xl w-full px-6">
                <h2 className="text-3xl font-extrabold text-white">How We Work</h2>
                <p className="mt-2 text-gray-200 max-w-2xl">
                    A structured, transparent workflow to deliver consistent Reddit growth.
                </p>

                {/* top 3 cards */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.slice(0, 3).map((c) => {
                        const Icon = c.Icon;
                        return (
                            <article
                                key={c.id}
                                className="relative flex flex-col justify-between bg-white text-slate-900 rounded-xl min-h-[240px]
                                shadow-[0_10px_40px_rgba(0,0,0,0.35)] ring-2 ring-[#7c3aed]/20 overflow-hidden"
                                role="article"
                                aria-labelledby={`card-${c.id}-title`}
                            >
                                <div className="p-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col gap-3">
                                            <div className="">
                                                <Icon className="w-6 h-6 text-violet-600" aria-hidden />
                                            </div>
                                            <h3 id={`card-${c.id}-title`} className="text-lg font-semibold">{c.title}</h3>
                                        </div>
                                    </div>

                                    <div className="mt-4 text-sm text-slate-700 space-y-3">
                                        {c.bullets.map((b, i) => (
                                            <p key={i} className="flex items-start">
                                                <StarBullet />
                                                <span className="leading-snug">{b.text}</span>
                                            </p>
                                        ))}
                                    </div>
                                </div>


                                <div className="">
                                    <div className="h-2 bg-violet-800 rounded-b-xl" />
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* rest card bttom */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-4xl md:mx-auto">
                    {cards.slice(3).map((c) => {
                        const Icon = c.Icon;
                        return (
                            <article
                                key={c.id}
                                className="relative flex flex-col justify-between bg-white text-slate-900 rounded-xl min-h-[220px]
                                shadow-[0_10px_40px_rgba(0,0,0,0.35)] ring-2 ring-[#7c3aed]/20 overflow-hidden"
                                role="article"
                                aria-labelledby={`card-${c.id}-title`}
                            >
                                <div className="p-4">
                                    <div className="flex flex-col gap-3">
                                        <div className="">
                                            <Icon className="w-6 h-6 text-violet-600" aria-hidden />
                                        </div>
                                        <h3 id={`card-${c.id}-title`} className="text-lg font-semibold">{c.title}</h3>
                                    </div>

                                    <div className="mt-4 text-sm text-slate-700 space-y-3">
                                        {c.bullets.map((b, i) => (
                                            <p key={i} className="flex items-start">
                                                <StarBullet />
                                                <span className="leading-snug">{b.text}</span>
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <div className="h-2 bg-violet-800 rounded-b-xl" />
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
