/* eslint-disable @next/next/no-img-element */
"use client";
import { useDropzone } from "react-dropzone";
import { ImageUp, TriangleAlert } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useCallback, useState } from "react";
import { Badge } from "@/components/ui/badge";

interface ImageUploaderProps {
  onImageChange: (imgElement: HTMLImageElement | null) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageChange }) => {

  const [preview, setPreview] = useState<string | ArrayBuffer | null>("");

  const imageElementRef = useCallback((node: HTMLImageElement) => {
    if (node !== null) {
      onImageChange(node);
    } else {
      onImageChange(null);
    }
  }, [onImageChange]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) {
        setPreview(null);
        onImageChange(null);
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(acceptedFiles[0]);
    },
    [onImageChange],
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      maxSize: 5000000,
      accept: { "image/png": [], "image/jpg": [], "image/jpeg": [] },
    });

  return (
    <div className="text-center space-y-1">
      <div
        {...getRootProps()}
        className="w-full flex cursor-pointer flex-col items-center justify-center gap-y-2 rounded-lg border border-foreground p-8 shadow-sm shadow-foreground"
      >
        {preview && (
          <img
            ref={imageElementRef} // Assign the callback ref here
            src={preview as string}
            alt="Uploaded image"
            className="max-h-[400px] rounded-lg"
          />
        )}
        <div className={`${preview ? "hidden" : "block"} border p-2 my-16 lg:my-28 rounded-md max-w-min mx-auto text-muted-foreground`}>
          <ImageUp size={40} />
        </div>
        <Input {...getInputProps()} type="file" />
        {isDragActive ? (
          <p>Lepaskan di sini!</p>
        ) : (
          <p>Klik atau seret gambar di sini</p>
        )}
      </div>
      {fileRejections.length !== 0 && (
        <Badge variant="destructive">
          <TriangleAlert />
          Gambar harus kurang dari 5MB dan bertipe png, jpg, jpeg
        </Badge>
      )}
    </div>
  );
};