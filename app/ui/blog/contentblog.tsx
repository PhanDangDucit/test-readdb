import Image from "next/image";
import imageLoader from "@/app/ui/imageloader";
import { PhotosType } from "@/app/lib/definitions";

export default function ContentBlog({photo}: {photo:PhotosType}) {
    console.log(photo);
    return (
        <div className="w-3/4 m-auto">
            <h1 className="mb-3 text-red-600 text-2xl">Photo Detail</h1>
            <div className="grid grid-cols-1 md:gap-6 md:grid-cols-2">
                <Image
                    loader={imageLoader}
                    src={photo.url}
                    alt="image"
                    width={200}
                    height={300}
                />
                <blockquote className="mb-3">
                    <p className="text-xl italic font-semibold text-gray-900 dark:text-white">{photo.title}</p>
                </blockquote>
            </div>
            <div className="w-full m-2">
                <Image
                    loader={imageLoader}
                    src={photo.thumbnailUrl}
                    alt="image"
                    width={1000}
                    height={2000}
                    className="w-full m-auto"
                />
            </div>
        </div>
    )
}