'use client';
import { useEffect, useState } from "react";
import styles from "@/styles/Loading.module.css";

export default function Loading() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <div className={isLoading ? styles.loaderContainer : styles.loaderContainerHidden}>
            <div className={styles.loader} />
            <p>Cargando...</p>
        </div>
    )
}