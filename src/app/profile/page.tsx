"use client";
import Image from "next/image";
import personal from "../../../public/perfil.png";
import mail from "../../../public/en.svg";
import phone from "../../../public/telefono-inteligente.svg";
import location from "../../../public/ubicacion-del-terreno.svg";
import git from "../../../public/github.svg";
import linkedin from "../../../public/linkedin.svg";
import twitter from "../../../public/twitter-alt-circle.svg";
import face from "../../../public/facebook.svg";
import instagram from "../../../public/instagram.svg";
import telegram from "../../../public/telegram.svg";
import { List, Loading } from "@/components";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Profile() {
  const contact = [
    {
      name: "Email",
      icon: mail,
      value: "pxndxjeffrey.jr@gmail.com",
      action: (value: string) => {
        navigator.clipboard.writeText(value);
        alert("Email copied to clipboard");
      },
    },
    {
      name: "Phone",
      icon: phone,
      value: "+502 4151 7694",
      action: () => handleRedirect("https://wa.me/qr/AXDKZYXVJLU5K1"),
    },
    {
      name: "Location",
      icon: location,
      value: "Quetzaltenango, Guatemala",
    },
    {
      name: "Github",
      icon: git,
      value: "AfreJef69",
      action: () => handleRedirect("https://github.com/Afrejef69"),
    },
    {
      name: "Linkedin",
      icon: linkedin,
      value: "Jeffrey",
      action: () =>
        handleRedirect("https://www.linkedin.com/in/jeffrey-reyes-70367017b/"),
    },
    {
      name: "Twitter",
      icon: twitter,
      value: "Jeffrey",
      action: () => handleRedirect("https://twitter.com/Viejo_Amigo_"),
    },
    {
      name: "Facebook",
      icon: face,
      value: "Jeffrey",
      action: () =>
        handleRedirect("https://www.facebook.com/jeffrey.reyesvasquez/"),
    },
    {
      name: "Instagram",
      icon: instagram,
      value: "Jeffrey",
      action: () => handleRedirect("https://www.instagram.com/jeffrey_reyesv/"),
    },
    {
      name: "Telegram",
      icon: telegram,
      value: "+502 4151-7694",
      action: (value: string) => {
        navigator.clipboard.writeText(value);
        alert("contact copied to clipboard");
      },
    },
  ];

  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const handleRedirect = (url: string) => {
    router.push(url);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <main>
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-5xl rounded-lg p-10 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 items-center">
            <div className="flex flex-col items-center md:items-start gap-4 animate-slideInLeft">
              <div className="w-64 h-64 rounded-full overflow-hidden mb-5">
                <Image src={personal} alt="Perfil" width={400} height={400} />
              </div>
              <List list={contact} />
            </div>
            <div className="flex flex-col gap-4 animate-slideInRight">
              <p className="mb-4">
                Descripción: <br /> Soy una persona responsable y dedicada en lo
                que hace, dispuesto a aprender nuevas cosas e irme actualizando
                respecto a lo nuevo que se valla innovando.
              </p>
              <p className="mb-4">
                Ocupación: <br /> Estudiante
              </p>
              <p className="mb-4">
                Carrera: <br /> Ingeniería en Informática y Sistemas
              </p>
              <p className="mb-4">
                Dirección: <br /> 13 calle 3-91 zona 5. Quetzaltenango,
                Guatemala.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Loading />
    </main>
  );
}
