import React from "react";
import { ExternalLinkIcon } from '@/components/ui/icons'

function Card({ blogContent }) {

    return (
        <div className='flex flex-col items-center h-full'>
            <div className="overflow-hidden rounded-lg">
                <img
                    className="w-full object-cover aspect-video scale-100 hover:scale-105 transition duration-500 ease-in-out"
                    src={blogContent.image || "/placeholder_img.png"}
                    alt={blogContent.name}
                />
            </div>            <div className="">
                <div className="flex justify-between items-center gap-4">
                    <h1 className='font-bold py-4 text-sm'>{blogContent.name}</h1>
                    <a href={blogContent.url} target="_blank">
                        <ExternalLinkIcon size={18} className="text-stone-500 hover:text-gray-900 transition duration-300" />
                    </a>
                </div>
                <span className="text-stone-400 text-xs">2025 - Ongoing</span>
                <div className='flex flex-col w-full text-sm'>
                    <p className='text-stone-600'>{blogContent.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card