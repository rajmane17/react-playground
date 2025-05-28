import axios from "axios";

export async function addPost(post: {id: number, title: FormDataEntryValue | null, tags: string[]}) {
    const response = await axios.post("http://localhost:3000/posts", post)
    return response.data;
}