import React from "react";

function Card({ blogContent }) {
    return (
        <div className='flex flex-col items-center h-full'>
            <img className="rounded-lg" src="/placeholder_img.png" alt=""/>
            <div className="">
                <h1 className='font-bold py-4 text-sm'>{blogContent.name}</h1>
                <div className='flex flex-col w-full text-sm'>
                    <p className='text-stone-600'>{blogContent.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card