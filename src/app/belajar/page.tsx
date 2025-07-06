import { Cta11 } from "@/components/block/cta11";
import { NotebookPen } from "lucide-react";
import QuizImage from "@/assets/quiz.jpg"

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
                    <div></div>
                    <div></div>
                    {/* <div>
                        <h2 className="text-3xl font-semibold pb-4">Informasi Lainnya</h2>
                        <p>Saat ini tidak ada informasi lain.</p>
                    </div> */}
                </div>
            </div>
        </main>
    )
}