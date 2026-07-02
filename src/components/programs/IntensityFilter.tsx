import { Intensity } from "@/lib/constants";


export default function IntensityFilter({
  active,
  onChange,
}: {
  active: Intensity;
  onChange: (v: Intensity) => void;
}) {
  const items: Intensity[] = ["All", "High Intensity", "Adaptive", "Elite"];
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none [&::-webkit-scrollbar]:hidden">
      {items.map((label) => {
        const isActive = active === label;
        return (
          <button
            key={label}
            type="button"
            onClick={() => onChange(label)}
            aria-pressed={isActive}
            className={
              "group relative shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[rgba(197,160,89,.45)] " +
              (isActive
                ? "border-[rgba(197,160,89,.95)] bg-[#FDFCF9] shadow-[0_12px_40px_rgba(197,160,89,.18)] text-[#111111]"
                : "border-[rgba(17,17,17,.14)] bg-[#F9F6F0]/70 text-[#111111] hover:border-[rgba(197,160,89,.5)]")
            }
          >
            <span className="relative z-10">{label}</span>
            <span
              aria-hidden
              className={
                "pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity group-hover:opacity-100 " +
                (isActive ? "opacity-100" : "opacity-0")
              }
              style={{
                background:
                  "radial-gradient(60% 120% at 50% 0%, rgba(197,160,89,.22), rgba(197,160,89,.05) 55%, rgba(253,252,249,0) 100%)",
              }}
            />
          </button>
        );
      })}
    </div>
  );
}