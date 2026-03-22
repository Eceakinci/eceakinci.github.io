import BlogContent from './BlogContent'

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
    return <BlogContent PostComponent={PostComponent} slug={params.slug} />
}