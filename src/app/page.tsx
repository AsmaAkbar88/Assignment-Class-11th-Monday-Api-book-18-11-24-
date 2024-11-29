
import PostCard from "@/components/PostCard";
export interface Post {
    userId: number;
    id: number;          //hm islye bna rhy hen taky bad main hmy asni ho 
    title: string;
    body: string;
}

// hm ny is py async function bnaya hy taky hm route ko yahan show krwa sky 

export default async function Home() {
    const response = await fetch("http://localhost:3000/api/external"); //veribal bnya hy 
    if (!response.ok) {
        return <div>Something went Wrong</div>;
    }
    const data = await response.json();
    const posts: Post[] = data.data;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-8 gap-8">
            {posts.map((post) => (



                < PostCard key={post.id}
                    body={post.body}
                    title={post.title} />

                // <p>  
                //     key={post.id}    
                //     title={post.title}
                // </p>
                // <PostCard  body={post.body}  />
            ))}
        </div>
    )
}