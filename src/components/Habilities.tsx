const skills = [
    "Resolución de problemas",
    "Trabajo en equipo",
    "Pensamiento crítico",
    "Comunicación efectiva",
    "Aprendizaje activo",
    "Capacidad de adaptación",
    "Tolerancia"
  ];

export default function Habilities() {
    return (
        <ul>
            <h2>Habilidades profesionales y personales</h2>
            {
                skills.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    )
}