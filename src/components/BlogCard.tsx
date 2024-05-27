import Image from "next/image";
import Link from "next/link";
import plus from "../../public/plus.svg";
import develop from "../../public/develop.svg";
import design from "../../public/design.svg";
import lifestyle from "../../public/stylelife.svg";
import technology from "../../public/technology.svg";
import programming from "../../public/programming.svg";

interface Props {
  id: number;
  title: string;
  genre: string;
}

export default function BlogCard({ id, title, genre }: Props) {
  const genreImage: Record<string, string> = {
    desarrollo: develop,
    diseño: design,
    "estilo de vida": lifestyle,
    tecnologia: technology,
    programacion: programming,
  };

  return (
    <div className="border border-1 border-gray-500 rounded-lg rounded-xl shadow-md p-4">
      <div className="flex items-center space-x-4 animate-fadeInLeft">
        <div className="flex-shrink-0 w-6 h-6 md:w-auto md:h-auto">
          <Image
            alt={genre}
            className="rounded-lg"
            height={24}
            src={genreImage[genre]}
            width={24}
          />
        </div>
        <div className="flex flex-col flex-grow">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
          <Link className="learn-more" href={`/${id}`} passHref>
            <a className="flex items-center space-x-2">
              <Image alt="plus" height={24} src={plus} width={24} />
              <span>Leer más</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
