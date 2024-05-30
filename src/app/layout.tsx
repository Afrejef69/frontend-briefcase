import { Roboto } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components";
import blog from "../../public/texto-del-blog.svg";
import education from "../../public/gorro-de-graduacion.svg";
import home from "../../public/hogar.svg";
import profile from "../../public/usuario.svg";
import projects from "../../public/configuracion-alternativa-del-flujo-de-trabajo.svg";

type Props = {
  children?: React.ReactNode;
};

const menuItems = [
  {
      name: 'Inicio',
      imagen: home,
      url: '/'
  },
  {
      name: 'Perfil',
      imagen: profile,
      url: '/profile'
  },
  {
      name: 'Proyectos',
      imagen: projects,
      url: '/projects'
  },
  {
      name: 'Educación y habilidades profesionales',
      imagen: education,
      url: '/education-professional'
  },
  {
      name: 'Blog',
      imagen: blog,
      url: '/blog'
  }
]

const roboto = Roboto({
  weight: ["400", "700"],
  style:[ "normal", "italic" ],
  subsets: ["latin"],
})

export const metadata ={
  title: "My Briefcase",
  description: "My personal blog and portfolio",
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar menuItems={menuItems} />
        {children}
      </body>
    </html>
  );
}
