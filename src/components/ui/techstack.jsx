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
            { iconPath: "devicon-sass-plain", iconName: "SCSS" },
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
        <div className="mx-auto px-4 py-10">
            <div className=" md:grid grid-cols-7 ">
                <h2 className="text-2xl font-bold mb-8 col-start-2">Tech Stack</h2>
            </div>
            <div className="md:grid grid-cols-7 items-center">
                <div className="col-start-2 col-span-6">
                    {techs.map((group) => (
                        <div className="flex py-3" key={group.category}>
                            <h3 className="w-36 content-center">{group.category}</h3>
                            <div className="flex flex-wrap gap-4">
                                {group.items.map((tech) => (
                                    <div key={tech.iconName} className="flex flex-col items-center gap-1">
                                        <i className={`${tech.iconPath} text-3xl`} />
                                        <span className="text-xs text-stone-600">{tech.iconName}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Techstack;
