import React, { useRef } from "react";
import { useSectionInView } from "../assets/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../context/theme-context";
import { useLanguage } from "../context/language-context";
import { resumeSectionData, resumeData } from "../assets/lib/data";
import ResumeSection from "./ResumeSection";

const Resume: React.FC = () => {
    const { ref } = useSectionInView("Experience");
    const { theme } = useTheme();
    const { language } = useLanguage();
    const animationReference = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: animationReference,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    const educationData = resumeData.filter((item) => item.category === "education");
    const experienceData = resumeData.filter((item) => item.category === "experience");

    return (
        <section
            className="relative resume-section mb-20 max-lg:p-16"
            id={resumeSectionData.sectionId}
            ref={ref}
        >
            <div className="title-container flex flex-col justify-center items-center p-32 w-1/2 gap-6 min-[1921px]:px-[55rem] max-lg:p-0 max-lg:w-full max-lg:items-start max-lg:py-16">
                <motion.div
                    ref={animationReference}
                    style={{
                        scale: scaleProgress,
                        opacity: opacityProgress,
                    }}
                >
                    <p className="font-black mb-6">
                        <span className="text-orange">&lt;</span>
                        {language === "DE" ? resumeSectionData.title.de : resumeSectionData.title.en}
                        <span className="text-orange">/&gt;</span>
                    </p>
                    <h2>
                        {language === "DE"
                            ? resumeSectionData.subtitle.de
                            : resumeSectionData.subtitle.en}
                    </h2>
                </motion.div>
            </div>

            {/* Adauga Content aici*/}
            <div className="flex gap-10 justify-center max-lg:flex-col items-start">
                <div className="w-1/3 max-lg:w-full flex flex-col gap-10">
                    <ResumeSection
                        title={
                            language === "DE"
                                ? resumeSectionData.experienceTitle.de
                                : resumeSectionData.experienceTitle.en
                        }
                        data={experienceData}
                        theme={theme}
                    />
                </div>
                <div className="w-1/3 max-lg:w-full flex flex-col gap-10">
                    <ResumeSection
                        title={
                            language === "DE"
                                ? resumeSectionData.educationTitle.de
                                : resumeSectionData.educationTitle.en
                        }
                        data={educationData}
                        theme={theme}
                    />
                </div>
            </div>
        </section>
    );
};

export default Resume;
