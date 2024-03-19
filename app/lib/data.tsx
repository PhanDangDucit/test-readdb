export async function fetchPhotos() {
    try {
        return (await fetch('https://jsonplaceholder.typicode.com/photos')).json();
    } catch (error) {
        return {
            message: "fetch photos failed!"
        }
    }
}