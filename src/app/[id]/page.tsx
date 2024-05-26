'use client';
import { Loading } from "@/components";
import axios from "axios";
import { useEffect, useState } from "react";

interface Props {
    params: {
        id: string;
    };
}

interface Blog {
    id: number;
    title: string;
    content: string;
    genre: string;
}

export default function Blog({ params }: Props) {
    const [blog, setBlog] = useState<Blog | null>(null);
    const [showMore, setShowMore] = useState(false);
    const wordsInitial =  Math.ceil(0.5 * (blog?.content?.split('')?.length ?? 0));

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get<Blog>(process.env.NEXT_PUBLIC_API_URL + `/blog/${params.id}` ?? "");
                setBlog(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchBlog();
    }, [params.id])

    const toggleShowFullContent = () => {
        setShowMore(!showMore);
    }

    const displayContent = () => {
        if (!blog) return "";
        if (showMore) {
            return blog.content;
        } else {
            const truncatedContent = blog.content.split('').slice(0, wordsInitial).join('');
            return truncatedContent;
        }
    }

    return (
        <main className="mx-auto p-24 animate-fadeIn">
            {
                blog !== null && (
                    <div className="border border-gray-200 rounded-lg overflow-hidden animat-fadeInLeft">
                        <div className="bg-gray-100 px-4 py-2">
                            <h1 className="text-3xl font-bold text-center">{blog.title}</h1>
                        </div>
                        <div className="px-4 py-2 border-b border-gray-200">
                            <p className="text-center">{blog.genre}</p>
                        </div>
                        <div className="px-4 py-2">
                            <p className="text-justify">{displayContent()}</p>
                            {
                                !showMore && (
                                    <button onClick={toggleShowFullContent} className="ver-mas text-blue-500 underline">Ver Más</button>
                                )
                            }
                        </div>
                    </div>
                )
            }
            <Loading />
        </main>
    )
}