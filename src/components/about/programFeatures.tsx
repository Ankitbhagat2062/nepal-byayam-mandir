'use client";'

import { type LucideIcon } from "lucide-react";
import Link from "next/link";


const ProgramFeatures = ({ f }: { f: { title: string, description: string, href: string, icon: LucideIcon } }) => {
    const Icon = f?.icon;
    return (
        <Link
            key={f.title}
            href={f.href}
            className="group relative rounded-3xl border border-[#C5A059]/35 bg-[#FDFCF9]/70 overflow-hidden h-full"
            aria-label={`Open programs: ${f.title}`}
        >
            <div className="absolute inset-x-0 top-0 h-px bg-[#C5A059]" />

            <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                    <div className="w-11 h-11 rounded-2xl border border-[#C5A059]/30 bg-[#C5A059]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#C5A059] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="text-right">
                        <div className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#C5A059]">
                            Program
                        </div>
                        <div className="mt-1 text-xs text-[#111111]/70">direct routing</div>
                    </div>
                </div>

                <h3 className="mt-5 text-lg font-extrabold tracking-tight text-[#111111]">
                    {f.title}
                </h3>
                <p className="mt-2 text-sm text-[#111111]/75 leading-relaxed">{f.description}</p>

                <div className="mt-6 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    <span className="text-xs font-semibold text-[#111111] group-hover:text-[#C5A059] transition-colors duration-300">
                        View training pathway
                    </span>
                </div>
            </div>

            <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "radial-gradient(circle at 30% 0%, rgba(197,160,89,0.18), transparent 55%)" }}
                aria-hidden="true"
            />

        </Link>
    )
}

export default ProgramFeatures
