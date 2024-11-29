import {Mooli} from "next/font/google"
const mf = Mooli({subsets: ['latin'], weight: ["400"]})

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,

} from "@/components/ui/card"
import React from 'react'

const PostCard = ({ body, title, }: { body: string, title: string }) => {
    return (
        <Card className={`${mf.className} border border-black bg-purple-200
         hover:bg-blue-200`}>
            <CardHeader className="text-blue-500 text-xl font-bold">{title}</CardHeader>
            
            <CardContent >
                <CardDescription className={`${mf.className} text-black`}>{body}</CardDescription>
            </CardContent>



        </Card>



    )
}

export default PostCard
