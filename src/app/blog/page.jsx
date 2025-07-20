import Navbar from "@/components/ui/navbar";
import AboutContent from '@/content/about.mdx';
import Content from "@/components/ui/content";
import DataAnalysis from "@/content/DataAnalysis.mdx";

export default function Blog() {
    return (
        <main className="min-h-screen bg-white text-gray-900 p-6">
            <Navbar></Navbar>
            <Content className='px-42 *:list-disc'>
                <DataAnalysis/>
            </Content>
        </main>
    );
}
