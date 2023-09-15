
import { Card } from '@/components/Card'

export const TagsList = ({className = ''}) => {
    const tags = [
        'html',
        'css',
        'javascript',
        'sql',
        'java',
        'php',
        'wordpress',
        'expressionengine',
        'craftcms',
        'nextjs',
        'react',
        'vuejs',
        'jquery'
    ]
    return(
        <Card className={`${className}`}>
            <div className="flex flex-col gap-4 p-4">
                <p className="text-slate-600 text-sm">Tags</p>
                {tags.map((item, key) => {
                    return(
                        <a key={key} className="text-sm cursor-pointer hover:underline" href={`/tags/${item}`}>#{item}</a>
                    )
                })}
            </div>
        </Card>
    )
}