"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label";
import AnimatedNumbers from "react-animated-numbers";
import { Separator } from "@/components/ui/separator"
import ConfettiExplosion from "react-confetti-explosion";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { questions } from "@/data/questions"
import QuestionComponent from "./question";
import { Question } from "@/type/question";
import { cn } from "@/lib/utils";

interface Answer {
    question: string;
    isCorrect: boolean;
}

type QuizStatus = "not_started" | "in_progress" | "completed";

const Quiz = () => {
    const confettiOptions = {
        force: 0.9,
        duration: 6000,
        particleCount: 100,
        width: 800,
    }
    const [no, setNo] = useState(1);
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [quizStatus, setQuizStatus] = useState<QuizStatus>("not_started");
    const [score, setScore] = useState(0);
    const [quiz, setQuiz] = useState<Question[]>([]);
    const startQuiz = () => {
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 8);
        setQuiz(selected);
        setQuizStatus("in_progress");
        setNo(1);
        setAnswers([]);
        setScore(0);
    }
    const saveAnswer = ({ question, isCorrect }: Answer) => {
        const newAnswers = answers;
        newAnswers.push({ question, isCorrect });
        setAnswers(newAnswers);
        if (isCorrect) { setScore(score + 1) }
        if (no < quiz.length) {
            setNo(no + 1);
        }
        if (no == quiz.length) {
            setQuizStatus("completed");
        }
    }
    return (
        <>
            {quizStatus != "completed" && <Card className="border-none shadow-none">
                <CardHeader>
                    {quizStatus == "in_progress" && <div>
                        <Progress className="h-[2px] mb-5 opacity-50" value={no * 100 / quiz.length} />
                        <CardTitle className="text-sm">Question {no}/{quiz.length}</CardTitle>
                    </div>}
                </CardHeader>
                <CardContent className="max-w-[480px] min-h-[380px] lg:px-8">
                    {quizStatus == "not_started" && <div className="flex flex-col items-center">
                        <Label className="text-3xl font-bold">Kuis</Label>
                        <Separator className="my-2" />
                        <p className="text-lg font-semibold my-4">Uji Pengetahuanmu!</p>
                        <p>
                            SiPilah menyediakan kuis interaktif seputar pemilahan sampah. Cocok untuk edukasi keluarga, kegiatan sekolah, atau komunitas.
                            Yuk, jawab kuisnya dan buktikan kamu pahlawan lingkungan!
                        </p>
                        <div>
                            <Button onClick={() => startQuiz()} className="w-full mt-6 mb-2">Mulai Kuis</Button>
                            <Link href="/belajar" className={cn(buttonVariants({ variant: "outline" }), "w-full")}>Keluar</Link>
                        </div>
                    </div>
                    }

                    {quizStatus == "in_progress" && quiz.map((x, i) => {
                        if ((i + 1) == no) {
                            return <QuestionComponent key={i} data={x} save={(isCorrect: boolean) => saveAnswer({ question: (i + 1).toString(), isCorrect: isCorrect })} />
                        }
                    })}
                </CardContent>
            </Card>
            }
            {quizStatus == "completed" && <div className="min-h-[460px] flex flex-col justify-center items-center">
                <Label className="text-3xl font-bold">Kuis Selesai</Label>
                <span className="text-lg text-muted-foreground">{score}/{quiz.length} benar!</span>
                <Separator className="m-4" />
                <ConfettiExplosion {...confettiOptions} />
                <span className="text-2xl">Poinmu</span>
                <AnimatedNumbers
                    transitions={(index) => ({
                        type: "spring",
                        duration: index + 0.1,
                    })}
                    animateToNumber={(score / quiz.length) * 1000}
                    fontStyle={{
                        fontSize: 60,
                    }}
                />
                <Button onClick={() => setQuizStatus("not_started")} className="mt-5">Kembali</Button>
            </div>
            }
        </>
    );
}

export default Quiz;
