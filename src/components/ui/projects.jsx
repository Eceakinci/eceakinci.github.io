import React from "react";
import Card from "@/components/ui/cardcomp";

const blogContent = [
    {
        name: "Volleyball Stats Scraper",
        url: "https://github.com/Eceakinci/MatchScraping",
        image: "/projects/volleyball_img.jpg",
        description: "A web scraper built to extract and clean player statistics from the FIVB Volleyball World" +
            " Championship website."
    },
    {
        name: "Mind Mapping",
        url: "https://github.com/Eceakinci/MindMapping",
        image: "/projects/mindmap_img.jpg",
        description: "A project for self-directed vocabulary expansion that also tracks statistics and incorporates" +
            " general computer science concepts. "
    }
    ]


function Projects({}) {
    return (
        <div className="pb-12">
            <h2 className="text-2xl font-bold mb-4">Recent Projects</h2>
            <div className="grid grid-cols-3 gap-8">
                {blogContent.map((blog, idx) => (
                    <Card blogContent={blog} key={idx} />
                ))}
            </div>
        </div>

    )
}

export default Projects