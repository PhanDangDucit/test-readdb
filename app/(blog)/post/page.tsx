import TableBlog from "@/app/ui/blog/table";
import Pagination from "@/app/ui/blog/pagination";
import { fetchTotalPages } from "@/app/lib/data";

export default async function Page({
    searchParams: {
        page
    }
} : {
    searchParams: {
        page?:string,
    }
}) {
    const currentPage:number = Number(page) || 1;
    const totalPages: number = Number(await fetchTotalPages());

    return (
        <>
            <div className="p-5">
                <h2 className="text-red-600">Posts</h2>
            </div>
            <TableBlog currentPage={currentPage}/>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </>
    );
}