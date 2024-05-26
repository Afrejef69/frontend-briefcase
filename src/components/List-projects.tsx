type ListProject = {
    course: string;
    name: string;
    description: string;
}

type Props = {
    list: ListProject[];
}

export default function ListProjects({ list }: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 list">
            {list.map((item, index) => (
                <div key={index} className="overflow-hidden">
                    <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{item.course}</h3>
                    <h4 className="text-lg font-bold mb-2">{item.name}</h4>
                    <p className="text-gray-600 text-justify">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );

}