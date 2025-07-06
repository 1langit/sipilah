import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="h-[520px] pb-16 md:pb-32 flex items-center">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl lg:text-4xl font-semibold">
            Ayo Mulai dari Rumah, Mulai dari Sekarang!
          </h2>
          <p className="lg:text-xl font-semibold text-muted-foreground/70 mt-4">
            Memilah itu mudah. Dampaknya besar. Memilah artinya menjaga bumi dan menjaga masa depan.
            Langkah kecil ini berdampak besar bila dilakukan bersama-sama.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/cek-sampahmu">
                <span>Cek Sampahmu</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/kuis">
                <span>Buka Kuis</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
