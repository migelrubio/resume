import { NextResponse } from 'next/server'
import { randomDate } from '@/utils/date'

export async function GET() {
    const qty = 5 
    const max = 149
    let posts = []
    for (let x = 0; x < qty; x++){
        let id = Math.floor(Math.random() * max) + 1;
        let post = await fetch('https://dummyjson.com/posts/'+id).then(res => res.json())
        let user = await fetch('https://dummyjson.com/users/'+post.userId).then(res => res.json())
        post.user = user
        post.date = randomDate(new Date('2012','07','18'), new Date()).toDateString()
        post.imageHeight = (Math.floor(Math.random()*6) + 3) * 100
        //post.key = new Date().getTime()
        posts.push(post)
    }
    return NextResponse.json({ posts: posts })
}