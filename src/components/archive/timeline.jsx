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
        title: "Graduated",
        company: "Akdeniz University",
        date: "2022",
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


const ExperienceTimeline = () => {
    return (
        <div className=" mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold mb-8 text-center">Experience Timeline</h2>
            <div className="">
                <div className="">
                    <div className="absolute w-3 h-3 bg-violet-500 rounded-full -left-1.5 top-1" />
                    <div className='flex justify-between'>
                        {experiences.map((exp, idx) => (
                            <span key={idx} className='text-sm'>{exp.title}  </span>
                        ))}
                    </div>
                    <hr/>
                    <div className='flex justify-around'>
                        {experiences.map((exp, idx) => (
                            <time  key={idx}  className="text-sm text-gray-500">{exp.date}</time>
                        ))}
                    </div>
                    <div className='flex justify-around'>
                        {experiences.map((exp, idx) => (
                            <span key={idx}  className="text-sm text-gray-900">{exp.company}</span>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ExperienceTimeline;
