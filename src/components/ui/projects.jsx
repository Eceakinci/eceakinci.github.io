import React from "react";
import Card from "@/components/ui/cardcomp";

const blogContent = [
    {
        name: "Data Analysis Course Notes ",
        url: "blog/data-analysis",
        description: "plot() function and it's parameters\n" +
            "If you work with sales and if you observe negative value in sales, it is data error, because sales cannot be negative."
    },
    {
        name: "Neural Signal Analysis Course Notes",
        url: "blog/neural-signal",
        description: "plot() function and it's parameters\n" +
            "If you work with sales and if you observe negative value in sales, it is data error, because sales cannot be negative."
    },
    {
        name: "Neural Signal Analysis Course Notes",
        url: "blog/neural-signal",
        description: "plot() function and it's parameters\n" +
            "If you work with sales and if you observe negative value in sales, it is data error, because sales cannot be negative."
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