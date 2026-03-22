'use client'

export default function BlogContent({ PostComponent, slug }) {
    if (!PostComponent) {
        return <div className='mt-16'>
            <p>Post not found: {slug}</p>
        </div>
    }

    return (
        <div className='flex flex-col justify-items-center mt-16'>
            <div className='flex flex-col self-center max-w-4xl bg-neutral-100 p-8 rounded-3xl'>
                <PostComponent />
            </div>
        </div>
    )
}