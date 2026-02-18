"use client";

import { useEffect } from "react";

export function SectionTransitions() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -100px 0px",
            }
        );

        const sections = document.querySelectorAll(".section-transition");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return null;
}
