import React from 'react';

const experiences = [
    {
        title: "M.Sc. Artificial Intelligence ",
        company: "Brandenburg University of Technology",
        description: "● Gained knowledge in <b>Bayesian models</b>, Kalman/particle filters, causal inference, and generative models.\n" +
            "● Used <b>Fourier transform</b>/Fast Fourier Transform for neural signal and time-series analysis in practical applications.\n" +
            "● Applied <b>data analysis</b> and visualization techniques using <b>Python, R and SQL</b>.\n" +
            "● Worked on projects involving sentiment analysis, preference modeling, and decision systems.\n" +
            "● Strengthened foundation in mathematics: linear algebra, calculus, probability, statistics.\n",
        startDate: "Oct 2024",
        endDate: "Present"
    },
    {
        title: "Frontend Developer",
        company: "Feature/Mind Inc.",
        description: "● Developed responsive, mobile-first layouts and components, using jQuery, Sass, and SCSS.\n" +
            "● Converted Figma designs into interactive web components, which reduced page load times by 15% and improved user engagement.\n" +
            "● Enhanced accessibility across all e-commerce pages, ensuring 100% coverage and compliance.\n" +
            "● Participated in agile development using Jira, with all processes and code documented in Confluence.\n" +
            "● Handled Salesforce integrations and maintained version control with Git and BitBucket including CI/CD processes.",
        startDate: "Sep 2022",
        endDate: "Sep 2024"
    },
    {
        title: "Frontend Developer",
        company: "DePauli AG",
        description: "● Created RESTful API calls between old and new API endpoints to integrate them with the system using C# and .NET Core.\n" +
            "● Rewrote the company's product from .NET Core to Next.js and React.js.\n" +
            "● Maintained 7 e-commerce websites, using Git, Azure, and Jira to manage workflow and deployment.\n" +
            "● Translated 50+ Figma and Adobe XD design files into fully responsive and interactive user interfaces using Tailwind CSS, Bootstrap, SCSS, and Sass, ensuring pixel-perfect accuracy and cross-browser compatibility.\n" +
            "● Performed bug fixing and end-to-end testing with Cypress.\n",
        startDate: "Oct 2021",
        endDate: "Aug 2022"
    },
    {
        title: "Intern",
        company: "DePauli AG",
        description: "● Implemented new designs of 7 e-commerce websites and their static pages by using C#, .NET Core, jQuery, Sass, SCSS, Bootstrap, Jira, MS Azure, Git. ",
        startDate: "Jul 2021",
        endDate: "Sep 2021"
    },
    {
        title: "Intern",
        company: "Akdeniz University \n\n BAUM",
        description: "● Developed a full-stack exam administration tool from the ground up with C#, .NET Core, JavaScript, CSS, and MySQL. ",
        startDate: "Aug 2020",
        endDate: "Sep 2020"
    },
    {
        title: "B.Sc. Computer Engineering",
        company: "Akdeniz University",
        description: "",
        startDate: "Sep 2017",
        endDate: "Jan 2022"
    }
];


const BasicTimeline= () => {
    return (
        <div className="mx-auto px-4 py-10">
            <div className=" md:grid grid-cols-7 ">
                <h2 className="text-2xl font-bold mb-8 col-start-2">Experience</h2>
            </div>
            <div className="md:grid md:grid-cols-7 items-center ">
                <div className="flex flex-col col-start-2 col-span-5 justify-center" id="timeline">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="">
                            <div className="md:grid md:grid-cols-8 items-center mb-4 relative">
                                <div className="flex justify-between md:hidden">
                                    <div className="col-span-2">
                                        <p className="text-sm"><b>{exp.title}</b></p>
                                        <p className="text-sm">{exp.company}</p>
                                    </div>
                                    <div className="col-span-1 text-center content-center h-full pr-4 text-sm text-gray-500 ">
                                        <p>{exp.startDate} - {exp.endDate}</p>
                                    </div>
                                </div>
                                <div className="hidden md:block col-span-1 text-center content-center h-full border-r text-sm text-gray-500 ">
                                    <p>{exp.endDate}</p>
                                    <p>-</p>
                                    <p>{exp.startDate}</p>
                                </div>
                                <div className="hidden h-full content-center border-b-1 border-gray-500 md:block col-span-2">
                                    <p className="text-sm ml-2">{exp.title}</p>
                                    <p className="text-sm ml-2">{exp.company}</p>
                                </div>
                                <div className="mt-4 h-full md:mt-0 col-span-5 whitespace-pre-line border-b-1 border-gray-500 ">
                                    <p className="text-sm mb-2" dangerouslySetInnerHTML={{ __html: exp.description }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default BasicTimeline;
