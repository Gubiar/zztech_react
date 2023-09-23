import { AsideProps } from "../../types";
import styles from "./Aside.module.css";
import {useState} from "react";


export default function Aside(props : AsideProps) {
    const [count, setCount] = useState(0);

    const handleClick = () => (
        setCount(count+1)
    )

    return (
        <aside className={styles.container}>
            <span>Projeto</span>
            <span>{props.idade}</span>
            <span>{props.email}</span>
            <button onClick={handleClick} >Contador: {count}</button>
        </aside>
    );
}

