import { StaticImageData } from "next/image";
import StaticImage from "next/image";

type ListContact = {
    name: string;
    icon: StaticImageData;
    value: string;
    action?: (value: string) => void;
}

type Props = {
    list: ListContact[];
}

export default function List({ list }: Props) {
    const handleClick = (action: ((value:string) => void) | undefined, value: string) => {
        if (action) {
            action(value);
        }
    }
    return(
        <ul className="list">
            {list.map((item, index) => (
                <li key={index} onClick={() => handleClick(item.action, item.value)} style={{ cursor: 'pointer' }}>
                    <div className="icon flex items-center">
                        <StaticImage src={item.icon} alt={item.name} width={20} height={20} />
                        <span className="ml-4">{item.value}</span>
                    </div>
                </li>
            ))}
        </ul>
    );
}