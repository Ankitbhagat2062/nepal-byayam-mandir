import { Dumbbell, MapPin, ShieldCheck } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-card border-t border-border/60 py-12 relative z-10 text-xs text-muted-foreground">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center border border-gold/30">
                            <Dumbbell className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-sans font-bold tracking-widest text-sm text-foreground">NEPAL BYAYAM</span>
                            <span className="font-sans text-[9px] tracking-[0.25em] font-medium text-primary">MANDIR</span>
                        </div>
                    </div>
                    <p className="leading-relaxed">
                        Nepal Byayam Mandir is the official pioneer gymnasium of bodybuilding sports in Nepal. Established in
                        1953 A.D. (2010 B.S.).
                    </p>
                    <p className="text-[10px]">&copy; {new Date().getFullYear()} Nepal Byayam Mandir. All rights reserved.</p>
                </div>

                <div className="space-y-3">
                    <h4 className="font-bold text-foreground uppercase tracking-widest text-[10px]">OPERATIONAL HOURS</h4>
                    <ul className="space-y-2">
                        <li className="flex justify-between">
                            <span>Sunday - Friday</span>
                            <span className="font-semibold text-foreground">5:00 AM - 9:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Saturday</span>
                            <span className="font-semibold text-foreground">6:00 AM - 7:00 PM</span>
                        </li>
                        <li className="text-[10px] italic pt-1 border-t border-border/40 text-primary">
                            * Closed only during designated local festivals.
                        </li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h4 className="font-bold text-foreground uppercase tracking-widest text-[10px]">COORDINATES</h4>
                    <ul className="space-y-2.5">
                        <li className="flex items-start gap-2">
                            <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            <span>Martyr Dharma Bhakta Mathema Marg, Kathmandu, Nepal</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            <span>Pioneer Athletic Registry: #01-2010-NBM</span>
                        </li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h4 className="font-bold text-foreground uppercase tracking-widest text-[10px]">VERIFIED SOCIAL REGISTRIES</h4>
                    <p className="leading-normal mb-2">Connect with our official institutional identity registries:</p>
                    <div className="flex flex-col gap-2">
                        <a
                            href="https://www.facebook.com/nbmnepal/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 p-2.5 rounded-lg border border-border hover:border-primary/40 hover:bg-background transition-colors text-foreground"
                        >
                            <svg
                                className="w-4 h-4 text-primary shrink-0 animate-pulse"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                            <div className="flex flex-col leading-none">
                                <span className="font-bold text-[10px]">Facebook Profile</span>
                                <span className="text-[8px] text-muted-foreground">facebook.com/nbmnepal</span>
                            </div>
                        </a>
                        <a
                            href="https://www.instagram.com/explore/locations/462002793873781/nepal-byayam-mandir/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 p-2.5 rounded-lg border border-border hover:border-primary/40 hover:bg-background transition-colors text-foreground"
                        >
                            <svg
                                className="w-4 h-4 text-primary shrink-0 animate-pulse"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                            <div className="flex flex-col leading-none">
                                <span className="font-bold text-[10px]">Instagram Registry</span>
                                <span className="text-[8px] text-muted-foreground">instagram.com/nbmnepal</span>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
