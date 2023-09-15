'use client'

import { getRandomPosts } from '@/lib/posts'
import { Post } from '@/components/Post'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

export const PostsList = ({data=[], tag=null, infinite=true}) => {

    const [posts, setPosts] = useState(data)
    const [loading, setLoading] = useState(false)
  
    async function getPosts() {
        setLoading(true)
        const data = await getRandomPosts()
        //console.log(data)
        setPosts(current => [...current, ...data])
        //console.log(posts)
        setLoading(false)
    }

    useEffect(() => {
        infinite && getPosts()
    }, []);

    return(
        <InfiniteScroll
          dataLength={posts.length}
          next={getPosts}
          hasMore={infinite}
          loader={<Post key={0} />}
        >
            <div className="flex flex-col gap-4 items-center">
                {posts.map((item, key) => {
                    return(
                        <Post key={key} post={item}></Post>
                    )
                })}
                {!loading && posts.length < 1 && 
                    <p className="text-slate-400">No data to display</p>
                }
            </div>
        </InfiniteScroll>
    )
} 