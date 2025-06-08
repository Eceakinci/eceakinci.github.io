import React from 'react';

const experiences = [
    {
        title: "B.Sc. Computer Engineering",
        company: "Akdeniz University",
        date: "2017",
    },
    {
        title: "Intern",
        company: "Akdeniz University \n\n BAUM",
        date: "2020",
    },
    {
        title: "Intern",
        company: "DePauli AG",
        date: "2021",
    },
    {
        title: "Frontend Developer",
        company: "DePauli AG",
        date: "2021",
    },
    {
        title: "Frontend Developer",
        company: "Feature/Mind Inc.",
        date: "2022",
    },
    {
        title: "M.Sc. Artificial Intelligence ",
        company: "BTU",
        date: "2024",
    }
];


const ExperienceComp= () => {
    return (
        <div className=" mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold mb-8 text-center">Experience Timeline</h2>
            <ul className="flex justify-center items-center list-none" id="timeline">
                {experiences.map((exp, idx) => (
                    <li key={idx} className="li complete">
                        <div className="flex flex-col items-center mb-4 px-8 relative">
                            <span className="text-sm text-gray-500">{exp.date}</span>
                            <span className="text-sm absolute -bottom-12">{exp.title}</span>
                            <span className="text-sm absolute -bottom-16">{exp.company}</span>
                        </div>
                        <div className="px-24 flex justify-center border-t-1 relative">
                            <h4 className='w-6 h-6 rounded-full bg-violet-500 absolute -top-3'></h4>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        )
};

export default ExperienceComp;
