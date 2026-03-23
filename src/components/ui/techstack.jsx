import React from 'react'

const techs = [
    {
        category: "Programming",
        items: [
            { iconPath: "devicon-python-plain", iconName: "Python" },
            { iconPath: "devicon-javascript-plain", iconName: "JavaScript" },
            { iconPath: "devicon-csharp-plain", iconName: "C#" },
            { iconPath: "devicon-azuresqldatabase-plain", iconName: "SQL" },
            { iconPath: "devicon-r-plain", iconName: "R" },
        ]
    },
    {
        category: "Data / AI",
        items: [
            { iconPath: "devicon-pandas-plain", iconName: "Pandas" },
            { iconPath: "devicon-numpy-plain", iconName: "NumPy" },
            { iconPath: "devicon-matplotlib-plain", iconName: "Matplotlib" },
        ]
    },
    {
        category: "Frontend",
        items: [
            { iconPath: "devicon-react-plain", iconName: "React" },
            { iconPath: "devicon-nextjs-plain", iconName: "Next.js" },
            { iconPath: "devicon-jquery-plain", iconName: "jQuery" },
            { iconPath: "devicon-tailwindcss-plain", iconName: "Tailwind CSS" },
            { iconPath: "devicon-sass-plain", iconName: "Sass" },
            { iconPath: "devicon-bootstrap-plain", iconName: "Bootstrap" },
        ]
    },
    {
        category: "Tools",
        items: [
            { iconPath: "devicon-git-plain", iconName: "Git" },
            { iconPath: "devicon-azure-plain", iconName: "MS Azure" },
            { iconPath: "devicon-jira-plain", iconName: "Jira" },
            { iconPath: "devicon-confluence-plain", iconName: "Confluence" },
        ]
    },
]

const Techstack = () => {
    return(
        <>
            <h2 className="text-2xl font-bold my-4 md:mt-0">Tech Stack</h2>
                <div className="pb-12">
                    {techs.map((group) => (
                        <div className="flex flex-col py-1.5 md:py-3 md:flex-row" key={group.category}>
                            <h3 className="!text-sm content-center mb-1 md:w-30 md:mb-0">{group.category}</h3>
                            <div className="flex flex-wrap gap-1 md:gap-4">
                                {group.items.map((tech) => (
                                    <div key={tech.iconName} className="border-1 rounded-lg py-0.5 px-1 border-stone-300 flex flex-col items-center gap-1 md:border-0 md:">
                                        <i className={`${tech.iconPath} hidden text-3xl md:block`} />
                                        <span className="text-xs text-stone-600">{tech.iconName}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
        </>
    )
}

export default Techstack;
