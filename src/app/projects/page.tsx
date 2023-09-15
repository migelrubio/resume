
import { getPostsByType } from '@/lib/posts'
import { PostsList } from '@/components/PostsList'

export default async function History() {
  const posts = await getPostsByType('project')
  return (
    <PostsList data={posts} infinite={false}/>
  )
}