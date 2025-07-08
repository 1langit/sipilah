import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { BookOpen, CircleQuestionMark, Eye, NotebookPen } from "lucide-react";
import Image from "next/image";
import PreviewImage from "@/assets/c-guide.png"

const Guide = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="secondary" size="icon">
                    <CircleQuestionMark />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-2xl">
                        Kamu bingung ini sampah apa? SiPilah bisa bantu!
                    </AlertDialogTitle>
                    <AlertDialogDescription asChild>
                        <div className="text-left text-sm text-muted-foreground">
                            <Image src={PreviewImage} alt="preview" className="" />
                            <br />
                            <b>Cukup unggah foto, dan AI kami akan:</b>
                            <ul className="space-y-1 pt-2">
                                <li className="flex space-x-3">
                                    <Eye size={20} className="text-green-500" />
                                    <span>Mendeteksi jenis sampah secara otomatis</span>
                                </li>
                                <li className="flex space-x-3">
                                    <NotebookPen size={20} className="text-green-500" />
                                    <span>Memberikan saran pemilahan</span>
                                </li>
                                <li className="flex space-x-3">
                                    <BookOpen size={20} className="text-green-500" />
                                    <span>Menjadi alat belajar langsung dari pengalaman</span>
                                </li>
                            </ul>
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction>Oke</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export { Guide };