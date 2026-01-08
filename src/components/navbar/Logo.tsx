import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/browse"
      className="text-2xl font-bold tracking-tight text-foreground"
      aria-label="VeloCity browse cars"
    >
      Velo<span className="text-accent">City</span>
    </Link>
  );
}
