import { cn } from "@/lib/utils";
export default function Section({ className, children, id }: { className?: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className={cn("py-12 md:py-16 lg:py-20", className)}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}