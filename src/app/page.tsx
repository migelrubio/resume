
import { PostsList } from '@/components/PostsList'
import { getPostById } from '@/lib/posts'

export default async function Home() {
  
  const intro = await getPostById(1000)
  //console.log(intro)
  return (
    <div className="flex flex-col gap-4">
      <PostsList data={[intro]} infinite={false}/>
      <PostsList />
    </div>
  )
}
44