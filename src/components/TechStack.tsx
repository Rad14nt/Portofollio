import React, { useRef } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";
import {
    skillsDataFrontendDevelopment,
    skillsDataBackendDevelopment,
    skillsDataDatabaseManagement,
    skillsDataDevOpsCloud,
} from "../assets/lib/data";
import { useTheme } from "../context/theme-context";
import { useLanguage } from "../context/language-context";
import SkillSection from "./SkillSection";
import RadialGradient from "./RadialGradient";
import { motion, useScroll, useTransform } from "framer-motion";

const TechStack: React.FC = () => {
    const { ref } = useSectionInView("Skills");
    const { theme } = useTheme();
    const { language } = useLanguage();
    const animationReference = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: animationReference,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <React.Fragment>
            <section className="relative tech-stack max-lg:p-16" id="skills" ref={ref}>
                <RadialGradient
                    scale="scale-y-[3]"
                    opacity={theme === "light" ? "opacity-30" : "opacity-30"}
                    position="top-[55rem]"
                />
                <div className="title-container flex flex-col justify-center items-center p-32 w-1/2 gap-6 min-[1921px]:px-[55rem] max-lg:p-0 max-lg:w-full max-lg:items-start max-lg:py-16">
                    <motion.div
                        ref={animationReference}
                        style={{
                            scale: scaleProgess,
                            opacity: opacityProgess,
                        }}
                    >
                        <p className="font-black mb-6">
                            <span className="text-[--orange]">&lt;</span>Skills
                            <span className="text-[--orange]">/&gt;</span>
                        </p>
                        <h2>
                            {language === "DE"
                                ? "Meine Techstack und Skills"
                                : "My TechStack and Skills"}
                        </h2>
                    </motion.div>
                </div>
                <div className="flex gap-10 justify-center max-lg:flex-col items-start">
                    {/* Left Column */}
                    <div className="w-1/3 max-lg:w-full flex flex-col gap-10">
                        <SkillSection skillsData={skillsDataFrontendDevelopment} theme={theme} />
                        <SkillSection skillsData={skillsDataDevOpsCloud} theme={theme} />
                    </div>
                    {/* Right Column */}
                    <div className="w-1/3 max-lg:w-full flex flex-col gap-10">
                        <SkillSection skillsData={skillsDataBackendDevelopment} theme={theme} />
                        <SkillSection skillsData={skillsDataDatabaseManagement} theme={theme} />
                    </div>
                </div>
            </section>
            <ReactTooltip
                place="top"
                id="my-tooltip"
                style={{
                    fontSize: "1.5rem",
                    zIndex: 10,
                    backgroundColor: "var(--orange)",
                }}
            />
        </React.Fragment>
    );
};

export default TechStack;
