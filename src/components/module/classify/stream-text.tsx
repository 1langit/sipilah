import { useEffect, useRef, useState } from "react";

interface StreamingTextProps {
    text: string;
    speed?: number; // Speed in milliseconds per word
}

const StreamingText = ({ text, speed = 100 }: StreamingTextProps) => {
    const [displayedText, setDisplayedText] = useState<string>('');
    const wordsRef = useRef<string[]>([]); // Store words as an array
    const currentWordIndex = useRef<number>(0);
    const animationFrameId = useRef<number | null>(null);

    useEffect(() => {
        setDisplayedText(''); // Reset displayed text when 'text' prop changes
        currentWordIndex.current = 0; // Reset word index
        cancelAnimationFrame(animationFrameId.current as number); // Clear any existing animation

        if (!text) {
            wordsRef.current = []; // Ensure words are cleared
            return;
        }

        wordsRef.current = text.split(/\s+/).filter(word => word.length > 0); // Split by one or more spaces, filter out empty strings

        if (wordsRef.current.length === 0) {
            return; // No words to display
        }

        let startTime: DOMHighResTimeStamp | null = null;

        const animate = (timestamp: DOMHighResTimeStamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            if (progress > speed) {
                if (currentWordIndex.current < wordsRef.current.length) {
                    const nextWord = wordsRef.current[currentWordIndex.current];
                    setDisplayedText((prev: string) =>
                        prev === '' ? nextWord : prev + ' ' + nextWord
                    );
                    currentWordIndex.current += 1;
                    startTime = timestamp; // Reset start time for next word
                } else {
                    cancelAnimationFrame(animationFrameId.current as number);
                    return;
                }
            }
            animationFrameId.current = requestAnimationFrame(animate);
        };

        animationFrameId.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId.current !== null) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [text, speed]);

    return <span>{displayedText}</span>;
};

export { StreamingText };