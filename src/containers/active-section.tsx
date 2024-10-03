"use client"
import {SectionName} from "@/lib/types";
import React, {createContext, useContext, useState} from "react";
import ThemeContextProvider from "@/containers/theme-context";

type ActiveSectionContextProvideProps = {
    children: React.ReactNode;
};

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({children,}: ActiveSectionContextProvideProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("#home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,setActiveSection,timeOfLastClick,setTimeOfLastClick,
            }}
        >
            <ThemeContextProvider>
            {children}
            </ThemeContextProvider>
        </ActiveSectionContext.Provider>
    )
};

export function useActiveSectionContext(){
    const  context = useContext(ActiveSectionContext);
    if(context == null){
        throw new Error("");
    }
    return context;
}