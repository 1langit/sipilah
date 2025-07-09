"use client";

import * as tf from "@tensorflow/tfjs";
import { Button } from "@/components/ui/button";
import { ImageUploader } from "./image-uploader";
import { useRef, useState, useCallback, useEffect } from "react";
import { Loader2Icon } from "lucide-react";
import { Guide } from "./guide";
import { facts } from "@/data/facts";
import { StreamingText } from "./stream-text";

const Classifier = () => {

    const imgRef = useRef<HTMLImageElement>(null);
    const [output, setOutput] = useState<string>("Cek Sampahmu")
    const [info, setInfo] = useState<string>("Unggah gambar sampah untuk memulai klasifikasi sampah");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleImageChange = useCallback((imgElement: HTMLImageElement | null) => {
        imgRef.current = imgElement;
        if (!imgElement) {
            setOutput("Cek Sampahmu");
            setInfo("Unggah gambar sampah untuk memulai klasifikasi sampah");
        } else {
            setOutput("Cek Sampahmu");
            setInfo("Tekan 'Cek Sampah' untuk klasifikasi.");
        }
    }, []);

    const handlePredict = async () => {
        if (!imgRef.current) {
            setInfo("Mohon unggah gambar terlebih dahulu.");
            return;
        }

        setIsLoading(true);
        setOutput("AI sedang menganalisis...");
        setInfo("Analisis memakan waktu beberapa detik.");

        try {
            const model = await tf.loadLayersModel("tfjs_model_v4/model.json");
            const img = tf.browser.fromPixels(imgRef.current);
            const resized = tf.image.resizeBilinear(img, [150, 150]).toFloat();
            const normalized = resized.div(255);
            const batched = normalized.expandDims(0);

            const labels = [
                {
                    type: "B3",
                    desc: "Sampah B3 adalah limbah yang mengandung zat berbahaya dan beracun yang dapat membahayakan kesehatan manusia dan lingkungan, seperti limbah medis, pestisida, dan bahan kimia beracun. Pengolahannya harus dilakukan secara khusus, misalnya dengan metode kimia, fisik, atau biologis untuk mengurangi sifat berbahaya sebelum dibuang atau disimpan di tempat yang aman.",
                },
                {
                    type: "Residu",
                    desc: "Sampah residu adalah sampah yang tidak dapat didaur ulang atau diolah kembali dan biasanya harus dibuang ke tempat pembuangan akhir. Pengolahan residu biasanya dilakukan dengan cara pemusnahan atau penimbunan yang aman agar tidak mencemari lingkungan.",
                },
                {
                    type: "Daur ulang",
                    desc: "Sampah daur ulang adalah sampah yang masih bisa diolah kembali menjadi bahan atau produk baru, seperti kertas, plastik, dan logam. Pengolahan sampah ini dilakukan dengan proses pengumpulan, pemilahan, pencucian, dan pengolahan ulang agar dapat digunakan kembali dan mengurangi limbah yang masuk ke tempat pembuangan akhir.",
                },
                {
                    type: "Organik",
                    desc: "Sampah organik adalah sampah yang berasal dari bahan-bahan alami seperti sisa makanan, daun, dan limbah tanaman yang dapat terurai secara alami. Pengolahan sampah organik biasanya dilakukan dengan cara komposting atau pengolahan biologis agar menjadi pupuk yang bermanfaat bagi tanah.",
                },
            ];
            
            const prediction = model.predict(batched) as tf.Tensor;
            const data = await prediction.data();
            const maxIndex = data.indexOf(Math.max(...data));
            const predictedLabel = labels[maxIndex];

            console.log(data);
            setOutput(predictedLabel.type);
            setInfo(predictedLabel.desc);

        } catch (error) {
            console.error("Error during prediction:", error);
            setInfo("Terjadi kesalahan saat mengklasifikasi gambar. Mohon coba lagi.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        let intervalId: NodeJS.Timeout | undefined;

        if (isLoading) {
            intervalId = setInterval(() => {
                setInfo(facts[Math.floor(Math.random() * facts.length)]);
            }, 6000);
        } else {
            if (intervalId) {
                clearInterval(intervalId);
            }
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isLoading]);

    return (
        <section className="container">
            <div className="grid items-center gap-8 md:gap-16 lg:grid-cols-2">
                <ImageUploader onImageChange={handleImageChange} />
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <h1 className="my-6 mt-0 text-4xl font-semibold text-balance lg:text-5xl">
                        {output}
                    </h1>
                    <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg">
                        <StreamingText text={info} speed={100} />
                    </p>
                    <div className="flex w-full justify-center gap-2 lg:justify-start px-6 lg:p-0">
                        <Button onClick={handlePredict} disabled={isLoading || !imgRef.current} className="w-full lg:w-fit">
                            {isLoading ? (<><Loader2Icon className="animate-spin" /> Tunggu sebentar...</>) : "Cek Sampah"}
                        </Button>
                        <Guide />
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Classifier };