import { Cta11 } from "@/components/block/cta11";
import { NotebookPen } from "lucide-react";
import QuizImage from "@/assets/quiz.jpg"
import { Blog8 } from "@/components/block/blog8";

export default function LearnPage() {
    return (
        <main className="overflow-x-hidden">
            <div className="pb-24 pt-20 md:pb-32 lg:pb-56 lg:pt-32">
                <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block space-y-20">
                    <Cta11
                        heading="Kuis"
                        description="Sudah merasa paham? Sekarang waktunya diuji! Yuk, jawab kuisnya dan buktikan kamu pahlawan lingkungan! "
                        icon={NotebookPen}
                        imageSrc={QuizImage}
                        buttonText="Buka Kuis"
                        buttonHref="/kuis"
                    />
                    <Blog8
                        heading="Wawasan Lainnya"
                        description="Jelajahi berbagai konten pengolahan sampah untuk memperdalam pemahamanmu"
                        posts={[
                            {
                                id: "post-1",
                                title:
                                    "Infografis Pemilahan Sampah",
                                summary:
                                    "Pelajari kembali pemilahan sampah secara komprehensif",
                                label: "Infografis",
                                author: "Infografis",
                                published: "20 Jul 2025",
                                url: "/infografis-sipilah.png",
                                image: "/infografis-sipilah.png",
                            },
                            {
                                id: "post-2",
                                title:
                                    "Sampah Selesai di Desa!",
                                summary:
                                    "KSM Sejahtera Dusun Josari-Ngancar",
                                label: "Video",
                                author: "Video",
                                published: "29 Jul 2025",
                                url: "https://youtu.be/9s3a-A8HU84",
                                image: "/cover-ksm-sejahtera.png",
                            },
                        ]}
                    />
                </div>
            </div>
        </main>
    )
}