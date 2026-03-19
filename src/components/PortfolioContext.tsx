"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { PortfolioData, defaultPortfolio, oilPortfolio } from "@/data/portfolio";

type PortfolioMode = "default" | "oil";

interface PortfolioContextType {
    mode: PortfolioMode;
    data: PortfolioData;
    setMode: (mode: PortfolioMode) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ 
    children, 
    initialMode = "default" 
}: { 
    children: React.ReactNode; 
    initialMode?: PortfolioMode 
}) {
    const [mode, setMode] = useState<PortfolioMode>(initialMode);
    
    const data = mode === "oil" ? oilPortfolio : defaultPortfolio;

    return (
        <PortfolioContext.Provider value={{ mode, data, setMode }}>
            {children}
        </PortfolioContext.Provider>
    );
}

export function usePortfolio() {
    const context = useContext(PortfolioContext);
    if (context === undefined) {
        throw new Error("usePortfolio must be used within a PortfolioProvider");
    }
    return context;
}
