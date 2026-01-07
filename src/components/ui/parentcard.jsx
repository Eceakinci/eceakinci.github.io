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
        name: "Perception and Action Course Notes",
        url: "blog/perception-action",
        description: "plot() function and it's parameters\n" +
            "If you work with sales and if you observe negative value in sales, it is data error, because sales cannot be negative."
    },
    {
        name: "Vue.js 101 Notes",
        url: "blog/vue",
        description: "plot() function and it's parameters\n" +
            "If you work with sales and if you observe negative value in sales, it is data error, because sales cannot be negative."
    }
]


function ParentCard({  }) {
    return (
        <div className="grid grid-cols-4 items-center gap-4 mx-16">
            {blogContent.map((blog, idx) => (
                <Card blogContent={blog} key={idx}></Card>
                )
            )}
        </div>
    )
}

export default ParentCard