import React from "react";
import Link from 'next/link'

function Card({ blogContent }) {
    return (
        <Link className='flex flex-col items-center text-indigo-300 h-full lg:ease-in lg:duration-200 hover:scale-105 bg-stone-100 rounded-lg cursor-pointer'
              href={blogContent.url}>
            <h1 className='underline underline-offset-4 font-bold p-4 text-rose-800'>{blogContent.name}</h1>
            <div className='flex flex-col w-full p-4 text-sm'>
                <div className='flex ml-4'>
                    <p className='text-stone-600'>{blogContent.description}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card