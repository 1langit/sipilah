"use client";

import * as tf from "@tensorflow/tfjs";
import { Button } from "@/components/ui/button";
import { ImageUploader } from "./image-uploader";
import { useRef, useState, useCallback } from "react";
import { Loader2Icon } from "lucide-react";
import { Guide } from "./guide";

const Classifier = () => {

    const imgRef = useRef<HTMLImageElement>(null);
    const [output, setOutput] = useState<string>("Cek Sampahmu")
    const [info, setInfo] = useState<string>("Unggah gambar sampah untuk memulai klasifikasi sampah");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleImageChange = useCallback((imgElement: HTMLImageElement | null) => {
        imgRef.current = imgElement;
        if (!imgElement) {
            setInfo("Unggah gambar sampah untuk memulai klasifikasi sampah");
        } else {
            setInfo("Tekan 'Cek Sampah' untuk klasifikasi.");
        }
    }, []);

    const handlePredict = async () => {
        if (!imgRef.current) {
            setInfo("Mohon unggah gambar terlebih dahulu.");
            return;
        }

        setIsLoading(true);
        setInfo("AI sedang menganalisis gambar...");

        try {
            const model = await tf.loadLayersModel("model/model.json");
            const img = tf.browser.fromPixels(imgRef.current);
            const resized = tf.image.resizeBilinear(img, [224, 224]).toFloat();
            const normalized = resized.div(255);
            const batched = normalized.expandDims(0);

            const prediction = model.predict(batched) as tf.Tensor;
            const data = await prediction.data();
            const value = data[0];
            console.log(data);

            setOutput(value.toString());
            setInfo(`Sampah tersebut dikasifikasikan sebagai ${value.toString()}`);

        } catch (error) {
            console.error("Error during prediction:", error);
            setInfo("Terjadi kesalahan saat mengklasifikasi gambar. Mohon coba lagi.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="container">
            <div className="grid items-center gap-8 md:gap-16 lg:grid-cols-2">
                <ImageUploader onImageChange={handleImageChange} />
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <h1 className="my-6 mt-0 text-4xl font-semibold text-balance lg:text-5xl">
                        {output}
                    </h1>
                    <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg">
                        {info}
                    </p>
                    <div className="flex w-full justify-center gap-2 lg:justify-start px-6 lg:p-0">
                        <Button onClick={handlePredict} disabled={isLoading || !imgRef.current} className="w-full lg:w-fit">
                            {isLoading ? (<><Loader2Icon className="animate-spin" /> Menganalisis...</>) : "Cek Sampah"}
                        </Button>
                        <Guide />
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Classifier };