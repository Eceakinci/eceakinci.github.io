import DataAnalysis from "@/content/DataAnalysis.mdx";
import PerceptionAction from "@/content/PerceptionAction.mdx";

const posts = {
    "data-analysis": DataAnalysis,
    "perception-action": PerceptionAction,
}

export async function generateStaticParams() {
    return Object.keys(posts).map((slug) => ({ slug }))
}

export default function BlogPostPage({ params }) {
    const PostComponent = posts[params.slug]

    if (!PostComponent) {
        return <div className='mt-16'>
            <p>Post not found: {params.slug}</p>
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