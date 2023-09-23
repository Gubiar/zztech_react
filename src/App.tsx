import Aside from "./components/Aside/Aside";

export default function App() {
    const array = [
        { nome: "Gustavo", idade: 20 },
        { nome: "Victor", idade: 20 },
        { nome: "Victor", idade: 20 },
        { nome: "Victor", idade: 20 },
        { nome: "Victor", idade: 20 },
    ];

    return (
        <>
            {array.map((cada, index) => (
                <Aside key={index} email={cada.nome} idade={cada.idade} />
            ))}
        </>
    );
}
