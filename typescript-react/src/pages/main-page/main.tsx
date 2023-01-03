import {getDocs, collection, doc} from 'firebase/firestore';
import {db} from '../../config/firebase';
import { useEffect, useState } from 'react';
import { Post } from './post';

export interface Post {
    id: string;
    userId: string;
    title: string;
    username: string;
    description: string;
}

export const Main = () => {
    const postsRef = collection(db, 'posts');
    const [postList, setPostList] = useState<Post[] | null>(null);

    const getPosts = async () => {
        const data = await getDocs(postsRef)
        setPostList(data.docs.map((doc) => ({
            ...doc.data(), id: doc.id
        })) as Post[])
    }
    getPosts();
    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="App">
            <h1> Home Page</h1>
            {postList?.map((post) => <Post post={post}/>)}
        </div>
    );
};