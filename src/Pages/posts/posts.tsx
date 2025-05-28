import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const Posts = () => {
    const { data, error, isLoading, isError } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const response = await axios.get("http://localhost:3000/posts");
            return response.data;
        }
    })

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {isError && <p className="text-red-700 font-medium text-sm ">{error.message}</p>}
            {data?.map(item => (
                <div key={item.id}>
                    <p>{item.id}</p>
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    )
}

export default Posts

