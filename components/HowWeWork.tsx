import Image from "next/image";
import { AiOutlineBarChart } from "react-icons/ai";
import { FiEdit2, FiShield } from "react-icons/fi";
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
            { text: <><strong>Subreddit-audit</strong>: identify 5–10 relevant subreddits, threads ranking in Google, high-karma accounts, plus rules/behaviours for each.</> },
        ],
    },
    {
        id: 2,
        Icon: FiEdit2,
        title: "Content Creation and Account Preparation",
        bullets: [
            { text: "Prepare 5–10 new posts/month (text + optional images/links) aligned to your keywords and Reddit norms." },
            { text: "Source/prepare 10–20 evergreen thread placements + 10–20 recent-post comments." },
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
            { text: "We vet each subreddit's rules in advance." },
            { text: "We maintain account rotation, avoid spammy behaviour, keep posts as genuine contributions." },
            { text: "We advise transparency and readiness for Reddit’s moderator/community dynamics." },
        ],
    },
];

export default function HowWeWork() {
    return (
        <section className="relative isolate w-full overflow-x-clip text-white py-20 lg:py-28">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/howweworkbg.webp"
                    alt="how-we-work-background-image"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                <h2 className="text-2xl sm:text-3xl font-extrabold">
                    How We Work
                </h2>
                <p className="mt-2 text-gray-300 max-w-2xl text-sm sm:text-base">
                    A structured, transparent workflow to deliver consistent Reddit growth.
                </p>


                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.slice(0, 3).map((c) => {
                        const Icon = c.Icon;
                        return (
                            <article
                                key={c.id}
                                className="flex flex-col justify-between bg-white text-slate-900 rounded-xl
                                shadow-[0_10px_40px_rgba(0,0,0,0.35)] ring-2 ring-violet-500/20 overflow-hidden"
                            >
                                <div className="p-5">
                                    <Icon className="w-6 h-6 text-violet-600 mb-3" />
                                    <h3 className="text-lg font-semibold">
                                        {c.title}
                                    </h3>

                                    <div className="mt-4 text-sm text-slate-700 space-y-3">
                                        {c.bullets.map((b, i) => (
                                            <p key={i} className="flex items-start">
                                                <StarBullet />
                                                <span>{b.text}</span>
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                <div className="h-2 bg-violet-700" />
                            </article>
                        );
                    })}
                </div>


                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {cards.slice(3).map((c) => {
                        const Icon = c.Icon;
                        return (
                            <article
                                key={c.id}
                                className="flex flex-col justify-between bg-white text-slate-900 rounded-xl
                                shadow-[0_10px_40px_rgba(0,0,0,0.35)] ring-2 ring-violet-500/20 overflow-hidden"
                            >
                                <div className="p-5">
                                    <Icon className="w-6 h-6 text-violet-600 mb-3" />
                                    <h3 className="text-lg font-semibold">
                                        {c.title}
                                    </h3>

                                    <div className="mt-4 text-sm text-slate-700 space-y-3">
                                        {c.bullets.map((b, i) => (
                                            <p key={i} className="flex items-start">
                                                <StarBullet />
                                                <span>{b.text}</span>
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                <div className="h-2 bg-violet-700" />
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
