/* eslint-disable @next/next/no-img-element */
"use client";
import { useDropzone } from "react-dropzone";
import { ImageUp, Loader2Icon, TriangleAlert } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useCallback, useState } from "react";
import { Badge } from "@/components/ui/badge";

interface ImageUploaderProps {
  onImageChange: (imgElement: HTMLImageElement | null) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageChange }) => {

  const [preview, setPreview] = useState<string | ArrayBuffer | null>("");
  const [isResizing, setIsResizing] = useState<boolean>(false);

  const imageElementRef = useCallback((node: HTMLImageElement) => {
    if (node !== null) {
      onImageChange(node);
    } else {
      onImageChange(null);
    }
  }, [onImageChange]);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) {
        setPreview(null);
        onImageChange(null);
        return;
      }

      setIsResizing(true);
      const originalFile = acceptedFiles[0];
      const reader = new FileReader();
      reader.readAsDataURL(originalFile);

      reader.onload = async (event: ProgressEvent<FileReader>) => {
        const originalImageUrl = event.target?.result as string;

        const img = new Image();
        img.src = originalImageUrl;

        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          const MAX_WIDTH = 1024;
          const MAX_HEIGHT = 1024;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;

          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            const resizedDataUrl = canvas.toDataURL("image/jpeg", 0.8);
            setPreview(resizedDataUrl);
          } else {
            setPreview(originalImageUrl);
            console.error("Could not get 2D canvas context for resizing.");
          }
          setIsResizing(false);
        };
        img.onerror = () => {
          setPreview(null);
          onImageChange(null);
          console.error("Failed to load image for resizing.");
        };
      };
      reader.onerror = () => {
        setPreview(null);
        onImageChange(null);
        console.error("Failed to read file.");
      };
    },
    [onImageChange],
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      maxSize: 10500000,
      accept: { "image/png": [], "image/jpg": [], "image/jpeg": [] },
    });

  return (
    <div className="text-center space-y-1">
      <div
        {...getRootProps()}
        className="w-full flex cursor-pointer flex-col items-center justify-center gap-y-2 rounded-lg border border-foreground p-8 shadow-sm shadow-foreground"
      >
        {isResizing ? (
          <div className="flex flex-col items-center justify-center my-16 lg:my-28 text-muted-foreground">
            <Loader2Icon className="h-10 w-10 animate-spin mb-4" />
            <p>Memuat gambar...</p>
          </div>
        ) : (
          <>
            {preview && (
              <img
                ref={imageElementRef}
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
          </>
        )}
      </div>
      {fileRejections.length !== 0 && (
        <Badge variant="destructive">
          <TriangleAlert className="mr-2" />
          {fileRejections[0].errors[0].code === 'file-too-large' &&
            `Gambar harus kurang dari 10MB`
          }
          {fileRejections[0].errors[0].code === 'file-invalid-type' &&
            `Jenis file tidak valid. Hanya gambar (png, jpg, jpeg) yang diizinkan.`
          }
          {fileRejections[0].errors[0].code === 'too-many-files' &&
            `Hanya menerima satu gambar.`
          }
          {/* Fallback for other potential errors not explicitly handled */}
          {(!['file-too-large', 'file-invalid-type', 'too-many-files'].includes(fileRejections[0].errors[0].code)) &&
            `Gagal mengunggah gambar: ${fileRejections[0].errors[0].message}`
          }
        </Badge>
      )}
    </div>
  );
};