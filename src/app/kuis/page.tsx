import Quiz from "@/components/module/quiz/quiz";

export default function QuizPage() {
    return (
        <main className="h-screen">
            <div className="bg-white w-full p-7 lg:p-8 z-10"></div>
            <div className="w-full flex justify-center">
                <Quiz />
            </div>
        </main>
    );
}