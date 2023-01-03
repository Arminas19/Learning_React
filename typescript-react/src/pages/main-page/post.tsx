import { async } from '@firebase/util';
import { addDoc, getDocs, collection, query, where } from 'firebase/firestore';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../config/firebase';
import { Post as IPost } from './main';

interface Props {
    post: IPost
}

export const Post = (props: Props) => {
    const { post } = props;

    const [user] = useAuthState(auth)

    const likesRef = collection(db, 'likes');

    const likesDoc = query(likesRef, where('postId', '==', post.id))

    const getLikes = async () => {
        const data = await getDocs(likesDoc);
        console.log(data.docs.map((doc) => ({
            ...doc.data(), id: doc.id
        })));
    }

    const addLike = async () => {
        await addDoc(likesRef, {
            userid: user?.uid,
            postId: post.id
        });
    };

    useEffect(() => {    
        getLikes();
    }, []);
    

    return (
        <div>
            <div className='title'>
                <h1> {post.title} </h1>
            </div>
            <div className='Post-body'>
                <p> {post.description} </p>
            </div>
            <div className='post-footer'>
                <p> @{post.username} </p>
                <button onClick={addLike}> &#128077; </button>   {/* HTML entitis */}
                <p> Likes: { }</p>
            </div>
        </div>
    );
};