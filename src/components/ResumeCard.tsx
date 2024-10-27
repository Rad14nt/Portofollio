import React from "react";

interface ResumeCardProps {
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    logo?: string;
    year: string;
    title: string;
    desc: string;
    isLast: boolean;
    theme: "dark" | "light";
}

const ResumeCard: React.FC<ResumeCardProps> = ({
                                                   icon: Icon,
                                                   logo,
                                                   year,
                                                   title,
                                                   desc,
                                                   isLast,
                                                   theme,
                                               }) => {
    return (
        <div className="relative pl-24 pb-12 last:pb-0">
            {!isLast && (
                <div className="absolute left-10 top-20 bottom-0 w-px bg-orange"></div>
            )}
            <div
                className={`absolute left-0 top-0 flex items-center justify-center w-20 h-20 rounded-full ${
                    theme === "dark" ? "bg-blackblue" : "bg-icewhite"
                } border-2 border-orange`}
            >
                {logo ? (
                    <img
                        src={logo}
                        alt="logo"
                        className="w-16 h-16 object-cover rounded-full"
                    />
                ) : Icon ? (
                    <Icon className="text-orange text-3xl" />
                ) : null}
            </div>

            <div className="ml-4">
                <span className="block text-xl text-grey mb-1">{year}</span>
                <h4 className="text-3xl font-semibold mb-1">{title}</h4>
                <p className="text-xl text-grey">{desc}</p>
            </div>
        </div>
    );
};

export default ResumeCard;
