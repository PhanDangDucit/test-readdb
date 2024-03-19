import { PhotosType } from "./definitions";

const photoPerPage = 20;

export async function fetchPhotos(currentPage: number) {
    try {
        const photoFirst = 1 + (currentPage - 1) * photoPerPage;
        const photoLast = currentPage * photoPerPage;
        const photos: PhotosType[] = [];
        const datas =  (await fetch('https://jsonplaceholder.typicode.com/photos')).json();
        (await datas).map((photo: PhotosType) => {
            if(photo.id >= photoFirst && photo.id <= photoLast) {
                photos.push(photo);
            }
        });
        return photos;
    } catch (error) {
        throw new Error("fetch photos failed!")
    }
}

export async function fetchPhotoById(id: string) {
    try {
        return ((await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)).json())
    } catch (error) {
        return {
            message: "fetch photo by id failed!"
        }
    }
}

export async function fetchTotalPages() {
    try {
        const datas = await (await fetch('https://jsonplaceholder.typicode.com/photos')).json();
        const photoQuantity = datas.length;
        return Math.ceil(photoQuantity/photoPerPage);
    } catch (error) {
        return {
            message: "fetch total pages to implement pagination failed!"
        }
    }
}