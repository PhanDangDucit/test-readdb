import { fetchPhotoById } from "@/app/lib/data";
import { PhotosType } from "@/app/lib/definitions";
import ContentBlog from "@/app/ui/blog/contentblog";

export default async function Page({params}: {params:{id: string}}) {
    const photo: PhotosType = await fetchPhotoById(params.id);
    return (
        <ContentBlog photo={photo}/>
    )
}