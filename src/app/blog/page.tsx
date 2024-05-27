'use client';
import { BlogCard, Loading } from "@/components";
import axios from "axios";
import { useEffect, useState } from "react";

interface Blog {
    id: number;
    title: string;
    content: string;
    genre: string;
}

export default function Blog() {
    const [blog, setBlog] = useState<Blog[]>([]);

    useEffect(() => {
        const fetchBlog = async () => {
            const response = await axios.get<Blog[]>(process.env.NEXT_PUBLIC_API_URL + '/BlogController_findAll' ?? "");
            setBlog(response.data);
        };
        fetchBlog();
    }, []);

    return (
        <main className="flex flex-col items-center p-24 min-h-screen animate-fadeIn">
            <h1 className="text-3xl font-bold mb-4 text-center">Lista de Blogs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        blog.map((blog) => (
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