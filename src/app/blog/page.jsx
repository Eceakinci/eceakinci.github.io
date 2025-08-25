import Content from "@/components/ui/content";
import DataAnalysis from "@/content/DataAnalysis.mdx";
import Card from "@/components/ui/cardcomp";

const blogContent =
    {
        name: "Data Analysis Course Notes ",
        url: "blog/1",
        description: "plot() function and it's parameters\n" +
            "If you work with sales and if you observe negative value in sales, it is data error, because sales cannot be negative."
    }
export default function Blog() {
    return (
        <>
            <div className="grid grid-cols-4 items-center">
                <Card blogContent={blogContent}></Card>
            </div>
            {/*<Content className='px-42 *:list-disc'>*/}
            {/*    <DataAnalysis/>*/}
            {/*</Content>*/}
        </>
    );
}
