import { endpoint } from '@/utils/endpoint'
import posts from '@/data/posts.json' 

export async function getRandomPosts(){
    const data = await fetch(`${endpoint}/posts/random`)

    if (!data.ok) {
        throw new Error('Failed to fetch data')
    }

    return data.json()
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
    return data
}

export async function getPostById(id){
    const data = posts.data.find(
        item => item.id == id
    )
    return data
}

export async function getPostsByTag(tag){
    const data = posts.data.filter(
        item => item.tags.includes(tag)
    )
    return data
}