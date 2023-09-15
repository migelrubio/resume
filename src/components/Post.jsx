
import { Card } from '@/components/Card'
import Image from 'next/image'
import { randomDate } from '@/utils/date'
import { getPostComments } from '@/lib/posts'
import { TbThumbUp, TbUser, TbThumbUpFilled, TbSend, TbLink } from 'react-icons/tb'
import { useEffect, useState } from 'react'

export const Post = ({ post=null}) => {
    const [comments, setComments] = useState([])
    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState(post?.reactions || 0)
    //const [randH, setRandH] = useState((Math.floor(Math.random()*6) + 3) * 100)
    //const [randDate, setRandDate] = useState(randomDate(new Date('2012','07','18'), new Date()).toDateString())
    const [showComments, setShowComments] = useState(false)
    const [newComment, setNewComment] = useState('')

    useEffect(() => {
        //own posts have id starting in 1000 so we don't need to fetch their comments
        post?.id < 1000 && getComments()
    }, []);

    async function getComments() {
        const data = await getPostComments(post.id)
        //console.log(data)
        setComments(current => [...current, ...data.comments])
    }

    function handleLike(){
        setLikes(likes + (liked ? -1 : 1))
        setLiked(!liked)
    }

    function addComment(){
        if (newComment.length > 0){
            setComments(current => [...current, {
                id: new Date().getTime(),
                body: newComment,
                userdata: {
                    firstName: "Anonymous",
                    lastName: "",
                    maidenName: ""
                }
            }])
            setNewComment('')
        }
    }

    if (post) {
        const user = post.user
        const imgUrl = post.image ? post.image : `https://picsum.photos/id/${post.id}/600/${post.imageHeight}`
        return(
            <Card>
                <div className="p-4 flex flex-col gap-4">
                    <div className="flex gap-4">
                        <div className="bg-slate-200 rounded-full">
                            <Image src={user?.image || "/img/avatar.png"} alt={`${user?.firstName} ${user?.lastName}`} width={50} height={50} className="rounded-full"/>
                        </div>
                        <div className="flex flex-col justify-between">
                            <h6 className="cursor-pointer hover:underline">{ user?.firstName + ' ' + user?.lastName + ' ' + user?.maidenName }</h6>
                            <p className="text-sm cursor-pointer hover:underline">{ post.date }</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p>{post.body}</p>
                        <div className="flex gap-4">
                            {post.links?.map((item,key) => {
                                return(
                                    <a key={key} href={item.url} className="flex flex-nowrap items-center cursor-pointer hover:underline" target="_blank">{item.label} <TbLink/></a>
                                )
                            })}
                        </div>
                    </div>
                </div>
                {!post.noImage && 
                    <Image src={imgUrl} alt="Post Image" width={600} height={post.imageHeight || 0} className="w-full"/>
                }
                <div className="p-4 flex flex-col gap-4">
                    <div className="flex gap-4 justify-end">
                        {post.tags?.map((item) => {
                            return(
                                <a key={item} className="text-sm text-blue-800 cursor-pointer hover:underline" href={`/tags/${item}`}>#{item}</a>
                            )
                        })}
                    </div>
                    <hr/>
                    <div className="flex justify-between">
                        <div className='flex gap-2 items-center'>
                            {liked && 
                                <TbThumbUpFilled className="w-6 h-6 cursor-pointer text-blue-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" onClick={handleLike} />
                            }
                            {!liked && 
                                <TbThumbUp className="w-6 h-6 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" onClick={handleLike} />
                            }
                            <p className='text-sm'>{ likes }</p>
                        </div>
                        <div>
                            <a className="text-sm cursor-pointer hover:underline" onClick={()=>{setShowComments(!showComments)}}>{comments.length} comments</a>
                        </div>
                    </div>
                    { showComments && 
                        <div className="flex flex-col gap-4">
                            <hr/>
                            {comments.map((item) => {
                                return(
                                    <div key={item.id} className="flex gap-4 items-start">
                                        <div>
                                            <div className="bg-slate-200 rounded-full">
                                                {item.userdata.image && 
                                                    <Image src={item.userdata.image} alt={`${user.firstName} ${user.lastName}`} width={40} height={40} className="rounded-full"/>
                                                }
                                                {!item.userdata.image &&
                                                    <TbUser className="w-10 h-10"/>
                                                }
                                            </div>
                                        </div> 
                                        <div className="bg-slate-100 p-3 flex-1 rounded">
                                            <p className="text-sm font-bold">{ item.userdata.firstName + ' ' + item.userdata.lastName + ' ' + item.userdata.maidenName }</p>
                                            <p className="text-sm">{item.body}</p>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="flex gap-4 items-center">
                                <div>
                                    <div className="bg-slate-200 rounded-full">
                                        <TbUser className="w-10 h-10"/>
                                    </div>
                                </div>
                                <textarea className="flex-1 resize-none p-1 rounded" placeholder='Add a comment...' onChange={(e)=>{setNewComment(e.target.value)}} value={newComment}></textarea>
                                <TbSend className="w-8 h-8 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" onClick={addComment}/>
                            </div>
                        </div>
                    }
                </div>
            </Card>
        )
    } else {
        return (
            <Card>
                <div className="p-4 flex flex-col animate-pulse">
                    <div className="flex gap-4">
                        <div className="bg-slate-300 rounded-full h-12 w-12">
                           
                        </div>
                        <div className="flex flex-col justify-between">
                            <h6 className="bg-slate-300 rounded-full h-4 w-60"></h6>
                            <p className="bg-slate-300 rounded-full h-2 w-24"></p>
                        </div>
                        <div>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="w-ful h-96 bg-slate-300"></div>
                <div className="p-4"></div>
            </Card>
        )
    }
}