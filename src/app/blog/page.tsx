import { BlogCard, Loading } from "@/components";
import axios from "axios";
import { parsedEnv } from "../../../env";

interface Blog {
    id: number;
    title: string;
    content: string;
    genre: string;
}

export default async function Blog() {
    const response = await axios.get<Blog[]>(parsedEnv.API_URL + '/blog')

    return (
        <main className="flex flex-col items-center p-24 min-h-screen animate-fadeIn">
            <h1 className="text-3xl font-bold mb-4 text-center">Lista de Blogs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        response.data.map((blog) => (
                            <BlogCard 
                                key={blog.id}
                                id={blog.id}
                                title={blog.title}
                                genre={blog.genre}
                            />
                        ))
                    }
                </div>
            <Loading />
        </main>
    )
}