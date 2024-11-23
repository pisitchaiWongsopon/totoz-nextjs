import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
import {useEffect, useState} from "react";

import MyComponent from "@/component/MyComponent";

export default function Users(){
    //const router = useRouter();
    //const {username} = router.query;

    const [count, setCount] = useState(0);

    console.log("count", count)
    useEffect(() => {
        if(count == 6){
            setCount(0)
        }
    }, [count]);

    return <div>
        {/* <h1>User Page</h1>*/}
        <MyComponent title = "Hello,Next.js!" />
        {/*<h1>Username : {username}</h1>*/}
        {/*<Link href="/posts/123/comments/love">
        Go to Comment Page
        </Link>*/}

        <br/>
        {/*<p>count : {count}</p>
        <button onClick= {() => setCount(count +1)}>Increment</button><br/>
        <button onClick= {() => setCount(count -1)}>Decrement</button><br/>*/}

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-[4px] rounded">
            Click Me
        </button>
    </div>
}