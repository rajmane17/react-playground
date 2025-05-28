/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import Input from "../../components/input";
import Button from "../../components/button";
import { addPost } from "../../helper/posts";
import Posts from "../posts/posts";

// name will be used in formData
//This page was just to understand the tanstack query and a different approach to handle forms
const InputForm = () => {

    const queryClient = useQueryClient();

    const queryTOFetchTags = useQuery({
        queryKey: ["tags"],
        queryFn: async() => {
            const response = await axios.get("http://localhost:3000/tags");
            return response.data;
        }
    })

    const {mutate, isError, isPending, error} = useMutation({
        mutationFn: addPost,
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({
                queryKey: ["posts"],
                exact: true,
                // predicate => explore this
            })
        },
        onError: (error) => {
            console.error("Mutation failed:", error);
            alert("Post submission failed.");
        },
        //This will run no matter query fails or succeds
        onSettled: () => {
            alert("query settled")
        }
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const title = formData.get("title");
        const tags = Array.from(formData.keys()).filter((key) => formData.get(key) === "on");
        if (! title || !tags) return;
        mutate({id: Math.random() * 10, title, tags});
        e.currentTarget.reset();
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="title" id="title" placeholder="Enter title" required={true}/>
        <div>
            {queryTOFetchTags.data?.map((tag:string, index:number) => (
                <div key={index}>
                    <input type="checkbox" name={tag} id={tag}/>
                    <label htmlFor={tag}>{tag}</label>
                </div>
            ))}
        </div>
        <Button type="submit">Submit</Button>
      </form>
      <Posts />
      {isError && <p className="text-red-700 font-medium text-sm">{error.message}</p>}
      {queryTOFetchTags.isError && <p className="text-red-700 font-medium text-sm">{queryTOFetchTags.error.message}</p>}
      {queryTOFetchTags.isLoading && isPending &&
      <div className="h-10 w-10 rounded-full border-4 border-blue-500 animate-spin border-t-transparent"></div>}
    </div>
  )
}

export default InputForm
