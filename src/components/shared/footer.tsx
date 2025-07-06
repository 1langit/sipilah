import { Instagram, Mail } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="border-t py-4 md:py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col-reverse lg:flex-row lg:justify-between items-center">
        <span className="text-muted-foreground block text-center text-sm">
          {" "}
          © {new Date().getFullYear()} Pandri Berseri KKN PPM UGM
        </span>
        <span className="text-muted-foreground flex text-center text-sm lg:space-x-4 mb-2">
          <a
            href="https://www.instagram.com/pandriberseri"
            target='_blank'
            className="flex hover:underline underline-offset-4"
          >
            <Instagram size={20} className= "me-2" />
            <span className="hidden lg:block">pandriberseri</span>
          </a>
          <span className="hidden lg:block">|</span>
          <a
            href="mailto:pandri.berserikknppmugm@gmail.com"
            className="flex hover:underline underline-offset-4"
          >
            <Mail size={20} className="me-2" />
            <span className="hidden lg:block">pandri.berserikknppmugm@gmail.com</span>
          </a>
        </span>
      </div>
    </footer>
  );
}
