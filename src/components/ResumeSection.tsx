import React from "react";
import ResumeCard from "./ResumeCard";
import { useLanguage } from "../context/language-context";

interface ResumeItem {
    id: number;
    category: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    logo?: string;
    year: {
        de: string;
        en: string;
    };
    title: {
        de: string;
        en: string;
    };
    desc: {
        de: string;
        en: string;
    };
}


interface ResumeSectionProps {
    title: string;
    data: ResumeItem[];
    theme: "dark" | "light";
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ title, data, theme }) => {
    const { language } = useLanguage();

    return (
        <article
            className={`h-auto rounded-2xl p-16 pt-32 grid grid-cols-1 gap-10 relative z-10 max-lg:w-full max-lg:grid-cols-1 max-lg:p-8  max-lg:pt-32 ${
                theme === "dark"
                    ? "bg-blackblue dark-mode-shadow"
                    : "bg-icewhite dark-shadow"
            }`}
        >
            <div
                className={`absolute top-10 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-t-xl`}
            >
                <p className="font-black text-5xl">
                    <span className="text-orange">&lt;</span>
                    {title}
                    <span className="text-orange">/&gt;</span>
                </p>
            </div>
            <div className="flex flex-col gap-6">
                {data.map((item, index) => (
                    <ResumeCard
                        key={item.id}
                        icon={item.icon}
                        logo={item.logo}
                        year={language === "DE" ? item.year.de : item.year.en}
                        title={language === "DE" ? item.title.de : item.title.en}
                        desc={language === "DE" ? item.desc.de : item.desc.en}
                        isLast={index === data.length - 1}
                        theme={theme}
                    />
                ))}
            </div>
        </article>
    );
};

export default ResumeSection;
