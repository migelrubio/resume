import { endpoint } from '@/utils/endpoint'
import posts from '@/data/posts.json' 
import { randomDate } from '@/utils/date'

export async function getRandomPosts(){
    const qty = 5 
    const max = 149
    let data = []
    for (let x = 0; x < qty; x++){
        let id = Math.floor(Math.random() * max) + 1;
        let post = await fetch('https://dummyjson.com/posts/'+id).then(res => res.json())
        let user = await fetch('https://dummyjson.com/users/'+post.userId).then(res => res.json())
        post.user = user
        post.date = randomDate(new Date('2012','07','18'), new Date()).toDateString()
        post.imageHeight = (Math.floor(Math.random()*6) + 3) * 100
        //post.key = new Date().getTime()
        data.push(post)
    }

    return data
}

export async function getPostComments(id){
    const data = await fetch(`https://dummyjson.com/posts/${id}/comments`).then(res => res.json())
    if (!data.comments){
        return { comments: [] }
    }
    for (let x=0;  x<data.comments.length; x++){
        const user = await fetch('https://dummyjson.com/users/'+data.comments[x].user.id).then(res => res.json())
        //console.log(user)
        data.comments[x].userdata = user
    }
    return data

}

export async function getPostsByType(type){
    const data = posts.data.filter(
        item => item.type == type
    )
    data.map(item => item.reactions = Math.floor(Math.random()*100))
    return data
}

export async function getPostById(id){
    const data = posts.data.find(
        item => item.id == id
    )
    data.reactions = Math.floor(Math.random()*100)
    return data
}

export async function getPostsByTag(tag){
    const data = posts.data.filter(
        item => item.tags.includes(tag)
    )
    data.map(item => item.reactions = Math.floor(Math.random()*100))
    return data
}