'use client'
import { use } from 'react'

import DataAnalysis from "@/content/DataAnalysis.mdx";
import PerceptionAction from "@/content/PerceptionAction.mdx";

const posts = {
    "data-analysis": DataAnalysis,
    "perception-action": PerceptionAction,
}

export default function BlogPostPage({ params }) {
    const { slug } = use(params)

    const PostComponent = posts[slug]

    if (!PostComponent) {
        return <div className='mt-16'>
            <p>Post not found: {slug}</p>
        </div>
    }

    return (
        <div className='flex flex-col justify-items-center mt-16 '>
            <div className='flex flex-col self-center max-w-4xl'>
                <PostComponent />
            </div>
        </div>
    )
}
