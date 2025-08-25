import React from 'react';

const experiences = [
    {
        title: "M.Sc. Artificial Intelligence ",
        company: "Brandenburg University of Technology",
        startDate: "Oct 2024",
        endDate: "Present"
    },
    {
        title: "Frontend Developer",
        company: "Feature/Mind Inc.",
        startDate: "Sep 2022",
        endDate: "Sep 2024"
    },
    {
        title: "Frontend Developer",
        company: "DePauli AG",
        startDate: "Oct 2021",
        endDate: "Aug 2022"
    },
    {
        title: "Intern",
        company: "DePauli AG",
        startDate: "Jul 2021",
        endDate: "Sep 2021"
    },
    {
        title: "Intern",
        company: "Akdeniz University \n\n BAUM",
        startDate: "Aug 2020",
        endDate: "Sep 2020"
    },
    {
        title: "B.Sc. Computer Engineering",
        company: "Akdeniz University",
        startDate: "Sep 2017",
        endDate: "Jan 2022"
    }
];


const BasicTimeline= () => {
    return (
        <div className="mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold mb-8 text-center">Experience Timeline</h2>
            <div className="grid grid-cols-6 items-center ">
                <ul className="flex flex-col col-start-2 col-span-4 justify-center list-none" id="timeline">
                    {experiences.map((exp, idx) => (
                        <li key={idx} className="">
                            <div className="flex items-center mb-4 relative">
                                <div className="flex flex-col items-center border-r text-sm text-gray-500 w-20">
                                    <p>{exp.endDate}</p>
                                    <p>-</p>
                                    <p>{exp.startDate}</p>
                                </div>
                                <div>
                                    <p className="text-sm ml-2">{exp.title}</p>
                                    <p className="text-sm ml-2">{exp.company}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default BasicTimeline;
