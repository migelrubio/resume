/**
Renders a Next.js page component that displays posts that have certain tag.
@component
@param {Object} props - The component props.
@param {Object} props.params - The parameters passed to the page component.
@param {string} props.params.slug - The slug of the character.
@returns {JSX.Element} The rendered page component.
*/

import { PostsList } from "@/components/PostsList"
import { getPostsByTag } from "@/lib/posts"

export default async function Page({params={slug:''}}){
  const tag = params.slug
  const posts = await getPostsByTag(tag)
  return(
    <div className="flex flex-col gap-4">
      <p className="text-lg">#{tag}</p>
      <hr/>
      <PostsList data={posts} infinite={false}/>
    </div>
  )
}