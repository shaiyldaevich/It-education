// src/UI/UnauthenticatedRedirect.ts
"use client"; // Указываем, что компонент должен быть загружен только на клиенте

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const UnauthenticatedRedirect = () => {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    // Хук useEffect, который сначала устанавливает флаг isMounted в true, а затем запускает логику с роутером
    useEffect(() => {
        setIsMounted(true);
    }, []); // Этот эффект выполняется один раз после монтирования компонента

    // Этот эффект будет выполняться только после того, как компонент смонтируется
    useEffect(() => {
        if (isMounted) {
            const timer = setTimeout(() => {
                router.push("/auth/SignUpPage");
            }, 5000);

            return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
        }
    }, [isMounted, router]); // Следим за изменениями состояния isMounted и router

    // Если компонент не смонтирован, просто ничего не рендерим
    if (!isMounted) {
        return null;
    }

    return null;
};

export default UnauthenticatedRedirect;
