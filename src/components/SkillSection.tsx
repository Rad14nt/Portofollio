import React from "react";

interface Skill {
  title: string;
  hash: string;
  icon?: string | string[];
  color?: string | string[];
}

interface SkillCategory {
  readonly skillsTitle: string;
  readonly skills: readonly Skill[];
}

interface SkillSectionProps {
  skillsData: readonly SkillCategory[];
  theme: "dark" | "light";
}

const SkillSection: React.FC<SkillSectionProps> = ({ skillsData, theme }) => {
  const getSkillIconSrc = (theme: string, skill: Skill): string | undefined => {
    if (!skill.icon) return undefined;
    const isMultiVariant =
      skill.title.includes("Next") || skill.title.includes("Express");
    if (theme === "dark" && isMultiVariant) {
      return Array.isArray(skill.icon) ? skill.icon[1] : skill.icon;
    } else if (!isMultiVariant) {
      return Array.isArray(skill.icon) ? skill.icon[0] : skill.icon;
    } else {
      return Array.isArray(skill.icon) ? skill.icon[0] : skill.icon;
    }
  };

  const getSkillColor = (theme: string, skill: Skill): string | undefined => {
    if (!skill.color) return undefined;
    const isMultiVariant =
      skill.title.includes("Next") || skill.title.includes("Express");
    if (theme === "dark" && isMultiVariant) {
      return Array.isArray(skill.color) ? skill.color[1] : skill.color;
    } else if (!isMultiVariant) {
      return Array.isArray(skill.color) ? skill.color[0] : skill.color;
    } else {
      return Array.isArray(skill.color) ? skill.color[0] : skill.color;
    }
  };

  return (
    <article
      className={`h-auto rounded-2xl p-16 pt-32 grid grid-cols-3 gap-10 relative z-10 max-lg:w-full max-lg:grid-cols-2 max-lg:p-8  max-lg:pt-32 ${
        theme === "dark"
          ? "bg-[--blackblue] dark-mode-shadow"
          : "bg-[--icewhite] dark-shadow"
      }`}
    >
      <div
        className={`absolute top-10 left-1/2 transform -translate-x-1/2 px-4 py-2  rounded-t-xl `}
      >
        <p className="font-black text-4xl">
          <span className="text-[--orange]">&lt;</span>
          {skillsData[0].skillsTitle}
          <span className="text-[--orange]">/&gt;</span>
        </p>
      </div>
      {skillsData[0].skills.map((skill, index) => (
        <div
          key={index}
          className={`skill-item cursor-pointer flex flex-col gap-6 rounded-2xl p-8 border-solid border-[0.25rem]  text-center max-lg:items-center    ${
            theme === "dark" ? "bg-[--darkblue]" : "bg-[--icewhite]"
          }`}
          data-tooltip-id="my-tooltip"
          data-tooltip-content={skill.title}
          style={{
            borderColor: getSkillColor(theme, skill),
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.animation = "pulse 2s infinite";
            e.currentTarget.style.transform = "scale(1)";
            document.documentElement.style.setProperty(
              "--box-shadow-color",
              `${getSkillColor(theme, skill)}b3`
            );
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animation = "";
            e.currentTarget.style.transform = "";
            document.documentElement.style.setProperty(
              "--box-shadow-color",
              "inherit"
            );
          }}
          onFocus={(e) => {
            e.currentTarget.style.animation = "pulse 2s infinite";
            document.documentElement.style.setProperty(
              "--box-shadow-color",
              `${getSkillColor(theme, skill)}b3`
            );
          }}
          onBlur={(e) => {
            e.currentTarget.style.animation = "";
            document.documentElement.style.setProperty(
              "--box-shadow-color",
              "inherit"
            );
          }}
          tabIndex={0}
        >
          <img
            src={getSkillIconSrc(theme, skill)}
            alt={`${skill.icon}-icon`}
            className="h-[10rem]"
          />
          <h3 className="max-lg:text-[2rem] min-[1024px]:hidden">
            {skill.title}
          </h3>
        </div>
      ))}
    </article>
  );
};

export default SkillSection;
