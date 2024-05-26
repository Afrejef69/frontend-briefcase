import Image from "next/image";

type Props = {
    list: Develop[];
    title: string;
}

type Develop = {
    name: string;
    icon: string;
}

export default function ListProgramms({ list, title }: Props) {
    return (
        <div>
            <h2>{title}</h2>
            <div className="list-programms flex flex-col">
                {
                    list.map((item, index) => (
                        <div key={index} className="list-programms-item flex">
                            <Image src={item.icon} alt={item.name} height={20} width={20} />
                            <p className="ml-2">{item.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}