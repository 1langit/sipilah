import { Classifier } from "@/components/module/classify/classifier";

export default function ClassifyPage() {
    return (
        <main className="overflow-x-hidden">
            <div className="pb-24 pt-20 md:pb-32 lg:pb-56 lg:pt-32">
                <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                    <Classifier />
                </div>
            </div>
        </main>
    )
}