import { Button } from "@/components/ui/button";
import Link from "next/link";
import BannerImage from "@/assets/w-why.jpg"
import Image from "next/image";

export default function Hero() {
    return (
        <>
            <div className="absolute bg-white w-full p-7 lg:p-8 z-10"></div>
            <main className="relative h-screen w-full flex flex-row justify-center items-center">
                <Image
                    src={BannerImage}
                    alt="Background image for hero section"
                    fill
                    className="object-cover -z-10"
                    priority
                    placeholder="blur"
                />
                <div className="absolute -z-10 inset-0 bg-gradient-to-r from-green-600 to-green-600/0"></div>
                <div className="max-w-6xl lg:w-full md:px-4 text-white text-center lg:text-left pb-12">
                    <h1 className="mt-8 max-w-2xl text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                        Kenali Sampah, Rawat Bumi
                    </h1>
                    <p className="mt-8 max-w-2xl text-pretty text-lg font-medium">
                        Sosialisasi Cerdas Pengelolaan Sampah
                    </p>
                    <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                        <Button asChild variant="secondary" size="lg" className="px-5 font-semibold">
                            <Link href="/cek-sampahmu">
                                <span className="text-nowrap">Cek Sampahmu</span>
                            </Link>
                        </Button>
                        <Button
                            key={2}
                            asChild
                            size="lg"
                            variant="outline"
                            className="px-5 font-semibold bg-transparent"
                        >
                            <Link href="/kuis">
                                <span className="text-nowrap">Buka Kuis</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>
        </>
    );
}