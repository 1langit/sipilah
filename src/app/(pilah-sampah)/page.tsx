import Hero from "@/components/module/landing/hero";
import CallToAction from "@/components/module/landing/call-to-action";
import { Community1 } from "@/components/block/community1";
import { Feature74 } from "@/components/block/feature74";
import { Blog7 } from "@/components/block/blog7";
import { Feature13 } from "@/components/block/feature13";
import Logo from "@/assets/logo.png";
import WhatImage from "@/assets/w-what.jpg";
import WhyImage from "@/assets/w-why.jpg";
import OrganicImage from "@/assets/j-organic.jpg";
import AnorganicImage from "@/assets/j-unorgarnic.jpg";
import B3Image from "@/assets/j-b3.jpg";
import ResidueImage from "@/assets/j-residue.jpg";
import NoImage from "@/assets/d-no.jpg";
import { Apple, BatteryMedium, BottleWine, Check, House, InspectionPanel, Leaf, Lightbulb, Package, PaintBucket, Pill, Recycle, Scroll, X } from "lucide-react";
import { Feature16 } from "@/components/block/feature16";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center space-y-20 lg:space-y-32">
            <Hero />
            <Community1
                title="Selamat Datang di SiPilah"
                text="Setiap hari, rumah kita menghasilkan berbagai jenis sampah. Jika tidak dikelola dengan benar, sampah bisa mencemari lingkungan dan membahayakan kesehatan. Tapi jika dipilah sejak awal, sampah justru bisa menjadi sumber daya yang berguna."
                image={Logo}
            />
            <Feature74
                header={null}
                feature1={{
                    name: "Apa Itu Memilah Sampah?",
                    text: "Memilah sampah adalah proses memisahkan sampah berdasarkan jenisnya sebelum dibuang. Tujuannya agar sampah bisa diolah sesuai karakteristiknya—entah dijadikan kompos, didaur ulang, atau dibuang secara aman.",
                    image: WhatImage,
                }}
                feature2={{
                    name: "Mengapa Harus Memilah Sampah dari Rumah?",
                    text: "Karena rumah adalah titik awal dari semua aliran sampah. Satu botol plastik, satu lembar tisu, satu baterai—jika dibuang sembarangan, bisa jadi masalah. Tapi jika dipilah, masing-masing bisa diproses dengan benar.",
                    image: WhyImage,
                }}
            />
            <Feature16
                title="Sepenting Apakah Memilah Sampah?"
                subtitle={null}
                itemCountOnLg={2}
                features={[
                    {
                        name: "Kebiasaan ini tidak hanya membuat lingkungan lebih bersih, tapi juga:",
                        description: [
                            "Mengurangi beban tempat pembuangan akhir (TPA)",
                            "Membantu industri daur ulang",
                            "Mencegah pencemaran tanah, air, dan udara",
                            "Mendorong gaya hidup berkelanjutan di tingkat rumah tangga",
                        ],
                        icon: Recycle,
                    },
                    {
                        name: "Memilah dari rumah berarti:",
                        description: [
                            "Mengambil peran langsung dalam menjaga lingkungan",
                            "Menjadi teladan untuk keluarga dan tetangga",
                            "Mempermudah petugas kebersihan dan pengelola limbah",
                            "Membangun kesadaran bahwa sampah adalah tanggung jawab bersama",
                        ],
                        icon: House,
                    },
                ]}
            />
            <Blog7
                tagline={null}
                heading="Jenis Sampah"
                description="Jenis-Jenis Sampah, Warna Tempatnya, dan Pengolahannya"
                buttonText={null}
                postCountOnLg={4}
                posts={[
                    {
                        id: "post-1",
                        title: "Sampah Organik",
                        summary: "Sampah dari sisa makhluk hidup yang mudah membusuk secara alami.",
                        color: "bg-green-500",
                        image: OrganicImage,
                        icons: [Leaf, Apple],
                        contents: [
                            {
                                name: "Contoh",
                                text: "Sisa makanan, daun kering, ampas kopi",
                            },
                            {
                                name: "Tempatnya",
                                text: "Tempat sampah warna hijau",
                            },
                            {
                                name: "Pengolahan",
                                text: "Diolah menjadi kompos, biogas, atau pakan ternak",
                            },
                        ],
                    },
                    {
                        id: "post-2",
                        title: "Sampah Anorganik",
                        summary:
                            "Sampah buatan manusia yang tidak membusuk. Beberapa bisa didaur ulang, lainnya tidak.",
                        color: "bg-yellow-500",
                        image: AnorganicImage,
                        icons: [BottleWine, Package, InspectionPanel],
                        contents: [
                            {
                                name: "Contoh bisa didaur ulang",
                                text: "Botol plastik, kardus, kaca, logam",
                            },
                            {
                                name: "Contoh tidak bisa didaur ulang",
                                text: "Styrofoam, plastik sachet, kemasan multilapis",
                            },
                            {
                                name: "Tempatnya",
                                text: "Tempat sampah warna kuning",
                            },
                            {
                                name: "Pengolahan",
                                text: "Daur ulang (jika memungkinkan), sisanya dikelola sebagai residu",
                            },
                        ],
                    },
                    {
                        id: "post-3",
                        title: "Sampah B3 (Bahan Berbahaya dan Beracun)",
                        summary:
                            "Sampah yang mengandung zat kimia berbahaya atau beracun bagi manusia dan lingkungan.",
                        color: "bg-blue-500",
                        image: B3Image,
                        icons: [BatteryMedium, Lightbulb, Pill, PaintBucket],
                        contents: [
                            {
                                name: "Contoh",
                                text: "Baterai, lampu neon, obat kadaluarsa, cat, pestisida",
                            },
                            {
                                name: "Tempatnya",
                                text: "Disimpan terpisah dalam wadah tertutup",
                            },
                            {
                                name: "Pengolahan",
                                text: "Diserahkan ke fasilitas resmi limbah B3",
                            },
                        ],
                    },
                    {
                        id: "post-4",
                        title: "Sampah Residu",
                        summary:
                            "Sampah yang tidak bisa diolah kembali, tidak bisa dikomposkan, dan tidak bisa didaur ulang.",
                        color: "bg-red-500",
                        image: ResidueImage,
                        icons: [Scroll],
                        contents: [
                            {
                                name: "Contoh",
                                text: "Popok, pembalut, masker medis, tisu bekas",
                            },
                            {
                                name: "Tempatnya",
                                text: "Tempat sampah warna merah",
                            },
                            {
                                name: "Pengolahan",
                                text: "Dibuang ke TPA atau dibakar secara terkendali",
                            },
                        ],
                    },
                ]}
            />
            <Feature13
                heading="Apa Dampaknya Jika Kita Memilah Sampah?"
                features={[
                    {
                        id: "feature-1",
                        title: "Kalau kita memilah",
                        icon: Check,
                        description: [
                            "🌱 Lingkungan jadi bersih, sehat, dan bebas pencemaran",
                            "🔁 Proses daur ulang dan pengolahan sampah jadi lebih efektif",
                            "💰 Sampah bernilai bisa dimanfaatkan atau dijual",
                            "🧠 Anak-anak dan keluarga belajar peduli sejak dini",
                            "💪 Masyarakat lebih siap membangun budaya ramah lingkungan",
                        ],
                        color: "bg-gradient-to-br from-green-300 to-green-200",
                        image: WhatImage,
                    },
                    {
                        id: "feature-2",
                        title: "Kalau kita tidak memilah",
                        icon: X,
                        description: [
                            "🧪 Sampah berbahaya bisa mencemari tanah dan air",
                            "🧫 Sampah organik bercampur menimbulkan bau, lalat, dan penyakit",
                            "♻️ Sampah daur ulang jadi tak terpakai karena kontaminasi",
                            "🗑️ Beban petugas dan TPA jadi makin berat dan mahal",
                            "🐢 Sampah plastik bisa berakhir di laut, mengancam hewan",
                        ],
                        color: "bg-gradient-to-br from-red-300 to-red-200",
                        image: NoImage,
                    },
                ]}
            />
            <CallToAction />
        </div>
    )
}