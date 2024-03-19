'use client'
// import { usePathname, useSearchParams } from "next/navigation";
// import { useRouter } from "next/router";

export default function Pagination(
    {
        currentPage,
        totalPages
    } : {
        currentPage: number,
        totalPages: number
    }
) {
    const prevPage = (currentPage > 1) ? (currentPage- 1) : 1;
    const nextPage = (currentPage < totalPages) ? (currentPage + 1) : totalPages;
    // const handleChangePage = () => {
    //     const searchParams = useSearchParams();
    //     const pathName = usePathname();
    //     const { replace } = useRouter();
    //     const params = new URLSearchParams(searchParams);
    //     params.set('page', String(currentPage));
    //     replace(`${pathName}?${params.toString()}`);
    // }
    return (
        <div>
            <nav>
                {/* TH1 */}
                        <ul className="inline-flex -space-x-px text-base h-10">
                            <li>
                                <a href={`/post?page=${prevPage}`} className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                            </li>
                            <li>
                                <a href="/post?page=1" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                            </li>
                            {
                                currentPage <=3 && (
                                <>
                                    <li>
                                        <a href="/post?page=2" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                                    </li>
                                    <li>
                                        <a href="/post?page=3" aria-current="page" className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                                    </li>
                                    <li>
                                        <a href={`/post?page=${totalPages}`} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{totalPages}</a>
                                    </li>
                                </>
                                )
                            }
                            {/* TH2 */}
                            {
                                3 < currentPage && currentPage < (totalPages - 3) && (
                                    <>
                                            <li>
                                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                                            </li>
                                            <li>
                                                <a href={`/post?page=${currentPage}`} aria-current="page" className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{currentPage}</a>
                                            </li>
                                            <li>
                                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                                            </li>
                                            <li>
                                                <a href={`/post?page=${totalPages}`} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{totalPages}</a>
                                            </li>
                                    </>
                                )
                            }
                            {/* TH3 */}
                            {
                                totalPages >= currentPage && currentPage >= totalPages-2 && (
                                    <>
                                        <li>
                                            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                                        </li>
                                        <li>
                                            <a href={`/post?page=${totalPages-2}`} aria-current="page" className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{totalPages - 2}</a>
                                        </li>
                                        <li>
                                            <a href={`/post?page=${totalPages-1}`} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{totalPages - 1}</a>
                                        </li>
                                        <li>
                                            <a href={`/post?page=${totalPages}`} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{totalPages}</a>
                                        </li>
                                    </>
                                )
                            }
                            <li>
                                <a href={`/post?page=${nextPage}`} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                            </li>
                        </ul>
            </nav>
        </div>
    )
}