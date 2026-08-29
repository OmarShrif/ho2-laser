"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

import { translations } from "@/lib/translations";

type Language = "en" | "ar";

type LanguageContextType = {
    language: Language;
    setLanguage: (language: Language) => void;
    isArabic: boolean;
    t: typeof translations.en;
};

const LanguageContext =
    createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [language, setLanguageState] =
        useState<Language>("en");

    const [isLoaded, setIsLoaded] =
        useState(false);

    /*
     * Load saved language
     */

    useEffect(() => {
        const savedLanguage =
            localStorage.getItem("ho2-language");

        if (
            savedLanguage === "ar" ||
            savedLanguage === "en"
        ) {
            setLanguageState(savedLanguage);
        }

        setIsLoaded(true);
    }, []);

    /*
     * Save language + update HTML direction
     */

    useEffect(() => {
        if (!isLoaded) return;

        localStorage.setItem(
            "ho2-language",
            language
        );

        document.documentElement.lang =
            language;

        document.documentElement.dir =
            language === "ar"
                ? "rtl"
                : "ltr";
    }, [language, isLoaded]);

    /*
     * Change language
     */

    const setLanguage = (
        newLanguage: Language
    ) => {
        setLanguageState(newLanguage);
    };

    /*
     * Current translations
     */

    const t =
        translations[language];

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                isArabic: language === "ar",
                t,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

/*
 * Language Hook
 */

export function useLanguage() {
    const context =
        useContext(LanguageContext);

    if (!context) {
        throw new Error(
            "useLanguage must be used inside LanguageProvider"
        );
    }

    return context;
}