import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { Separator } from "@/components/ui/separator"
import { useState } from "react";
import { Check, CircleCheck, CircleX, X } from "lucide-react";
import { Question } from "@/type/question";
import { Badge } from "@/components/ui/badge";

interface QuestionComponentProps {
    data: Question;
    save: (isCorrect: boolean) => void;
}

const QuestionComponent = ({ data, save }: QuestionComponentProps) => {
    const [answer, setAnswer] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const submitAnswer = () => {
        setSubmitted(true);
    };

    const nextQuestion = () => {
        save(answer === data.answer);
    };

    const isCorrectOption = (val: string): boolean => {
        return val === data.answer;
    };

    const isUserChosen = (val: string) => answer === val;

    return (
        <div className='flex flex-col'>
            <Label className='text-3xl mb-4' htmlFor="">{data.text}</Label>

            {/* Conditional Rendering for "Benar" / "Salah" Badges with animation */}
            {submitted && (
                <div
                    // Add animation classes for fade-in/scale-up
                    className="animate-fade-in-up origin-bottom transform transition-all duration-300"
                >
                    {answer === data.answer ? (
                        <Badge className="mb-4 bg-green-500 text-white flex items-center">
                            <Check size={16} className="mr-1" />Benar
                        </Badge>
                    ) : (
                        <Badge variant="destructive" className="mb-4 flex items-center">
                            <X size={16} className="mr-1" />Salah
                        </Badge>
                    )}
                </div>
            )}

            {data.options.map((x, i) => {
                const isSelected = answer === x;
                const isFinalState = submitted;

                return (
                    <div
                        key={i}
                        className={`
                            border px-2 py-2 mt-1 mb-1 rounded flex justify-between items-center cursor-pointer
                            transition-all duration-200 ease-in-out
                            ${!isFinalState ? 'hover:scale-[1.01] hover:shadow-md' : ''}  /* Hover effect only if not submitted */
                            ${isSelected ? 'border-[#aaa] bg-accent text-accent-foreground scale-[1.01] shadow-md' : ''} /* Selected style with subtle scale */
                            ${isFinalState && !isSelected && !isCorrectOption(x) ? 'opacity-50' : ''} /* Fade out incorrect, unchosen options */
                            ${isFinalState && isSelected && !isCorrectOption(x) ? 'scale-[1.02] border-red-500 shadow-lg' : ''} /* Incorrect, chosen: more prominent */
                            ${isFinalState && isCorrectOption(x) ? 'scale-[1.02] border-green-500 shadow-lg' : ''} /* Correct option: more prominent */
                        `}
                        onClick={() => submitted ? '' : setAnswer(x)}
                    >
                        <span>{x}</span>
                        {/* Icons for individual options */}
                        {submitted && isCorrectOption(x) && (
                            <CircleCheck size={20} className="text-green-600 animate-scale-in" />
                        )}
                        {submitted && !isCorrectOption(x) && isUserChosen(x) && (
                            <CircleX size={20} className="text-red-500 animate-scale-in" />
                        )}
                    </div>
                );
            })}
            <Separator className="my-2" />

            {submitted ? (
                <Button className='mt-1' onClick={nextQuestion}>Selanjutnya</Button>
            ) : (
                <Button
                    className='mt-1'
                    onClick={submitAnswer}
                    disabled={!answer}
                >
                    Submit
                </Button>
            )}
        </div>
    );
};

export default QuestionComponent;
