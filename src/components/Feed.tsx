import React from 'react';
import {prisma} from "@/prisma";
import Post from "@/components/Post";

const Feed = async () => {
    const posts = await prisma.post.findMany()
    return (
        <div className="">
            {posts.map((post) => (
                <div key={post.id}><Post/></div>

            ))}
        </div>
    );
};

export default Feed;