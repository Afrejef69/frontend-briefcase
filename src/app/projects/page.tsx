import { ListProjects, Loading } from "@/components";

export default function Projects() {
  const projects = [
    {
      course: "Redes",
      name: "Active Directory",
      description:
        "En este proyecto se busco el hacer un directorio de usuarios que esten dentro de un dominio y esto con el fin de entender y comprender el como una empresa podía asegurar el trabajo, rendimiento y la eficacia de sus trabajadores dandoles ciertos permisos y accesos a cada miembro dependiendo del departamento al que pertenecia. Para esto se utilizo 1 computadora que funcionara como servidor haciendo partición de hardware y no dandole una interfaz pues lo que se necesitaba era un lugar donde alojar a cada uno de los usuarios, luego de esto usando otra computadora con windows y por medio de esta acceder a Active Directory donde ya generabamos todo el ambiente laboral y asignando a cada uno de los usuarios su respectivo lugar.",
    },
    {
      course: "Redes",
      name: "Servicio de base de datos con MikroTik",
      description:
        "En este proyecto se realizo para entender el funcionamiento de MikroTik pues en este sistema se hizo una partición de hardware que funcionaria como el router de MikroTik y así tener un servidor en cual gestionar los servicios de un router al cual iba a estar conectado fisicamente, luego de eso generamos los servicios de Lan y Wan para que las personas puedan estar conectadas mediante un wifi o cable esto sería gestionado por la computadora que se tiene como servidor, tambien se implemento lo que son las blacklist que es la forma con la que se planea trabajar las prohibiciones de las paginas web que no fuesen necesarias o que pudieran tener contenido que pudiese vulnerar los sistemas. Cabe mencionar que para esto se pudo hacer de dos maneras la primera colocando un dns publico que tuviese algunos sitios bloqueados o bloquearlos desde la interfaz de MikroTik.",
    },
    {
      course: "Software 2",
      name: "Lista de asistencia",
      description:
        "En este proyecto fue a traves de los lenguajes de viu, larabel y se llevo un control a través de Jyra a aparte tambien se utilizo postman para tener automatizado la parte de la documentación de las pruebas que se hicieran tanto para las pantallas como para el codigo de backend, para este proyecto estuve a cargo de unos cuantos componentes del área de backend pero sobre todo me encargue de llevar a cabo las distintas pruebas desde postman y vigilar que estuviesen bien documentadas.",
    },
  ];

  return (
    <main>
      <div className="flex flex-col justify-center items-center min-h-screen p-10 animate-fadeIn">
        <h1 className="text-3xl font-bold mb-8 text-center">Proyectos</h1>
        <div className="max-w-5xl w-full animate-slideInLeft">
          <ListProjects list={projects} />
        </div>
      </div>
      <Loading />
    </main>
  );
}
