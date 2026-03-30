interface BadgeProps {
    label: string;
    variant?: "pill" | "chip";
}

export default function Badge({ label, variant = "pill" }: BadgeProps) {
    return variant === "chip" ? (
        <li className="font-mono text-[0.8125rem] text-muted bg-chip border border-line rounded px-3 py-1">{label}</li>
    ) : (
        <li className="text-[0.6875rem] text-muted bg-chip border border-line px-2.5 py-0.5 rounded-full tracking-[0.02em]">
            {label}
        </li>
    );
}
