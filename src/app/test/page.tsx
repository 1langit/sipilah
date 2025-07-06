'use client';

import React, { useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import { Button } from '@/components/ui/button';

export default function TestPage() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [output, setOutput] = useState<string | null>(null);

  const loadAndPredict = async () => {
    // Load the model (replace with your model if needed)
    const model = await tf.loadLayersModel('model/model.json');

    if (!imgRef.current) return;

    const img = tf.browser.fromPixels(imgRef.current);
    const resized = tf.image.resizeBilinear(img, [224, 224]).toFloat();
    const normalized = resized.div(255);
    const batched = normalized.expandDims(0);

    const prediction = model.predict(batched) as tf.Tensor;
    const data = await prediction.data();
    const value = data[0];
    if (value < 0.5) {
      setOutput(value.toString());
    } else {
      setOutput(value.toString());
    }
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Image Classification (Bare Minimum)</h1>
      <img
        ref={imgRef}
        src="/image.png"
        alt="sample"
        width={224}
        height={224}
        crossOrigin="anonymous"
      />
      <br />
      <Button onClick={loadAndPredict}>Classify</Button>
      {output && (
        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          {JSON.stringify(output.slice(0, 5), null, 2)} {/* top 5 values */}
        </pre>
      )}
    </main>
  );
}
