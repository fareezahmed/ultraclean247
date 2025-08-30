import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Laundry pickup & delivery in Melbourne</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Wash & fold, dry cleaning, ironing. Simple pricing. Fast turnaround.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button asChild size="lg"><Link href="/book">Book pickup</Link></Button>
          <Button asChild variant="outline" size="lg"><Link href="/pricing">See pricing</Link></Button>
        </div>
      </div>
    </div>
  );
}