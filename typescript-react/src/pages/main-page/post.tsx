import { async } from '@firebase/util';
import { addDoc, getDocs, deleteDoc, collection, query, where, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../config/firebase';
import { Post as IPost } from './main';

interface Props {
    post: IPost
}

interface like {
    likeId: string;
    userId: string;
}

export const Post = (props: Props) => {
    const { post } = props;

    const [likes, setLikes] = useState<like[] | null>(null);

    const [user] = useAuthState(auth)

    const likesRef = collection(db, 'likes');

    const likesDoc = query(likesRef, where('postId', '==', post.id))

    const getLikes = async () => {
        const data = await getDocs(likesDoc);
        setLikes(data.docs.map((doc) => ({ userId: doc.data().userId, likeId: doc.id })));
    }

    const addLike = async () => {
        try {
            const newDoc = await addDoc(likesRef, {
                userId: user?.uid,
                postId: post.id
            });
            if (user) {
                setLikes((prev) => prev ? [...prev, { userId: user?.uid, likeId: newDoc.id }] : [{ userId: user?.uid, likeId: newDoc.id }]);
            };
        } catch (error) {
            console.log(error);
        }
    };

    const removeLike = async () => {
        try {
            const likeToDeleteQuery = query(likesRef, where('postId', '==', post.id), where('userId', '==', user?.uid))
            const likeToDeleteData = await getDocs(likeToDeleteQuery)
            const likeId = likeToDeleteData.docs[0].id;
            const likeToDelete = doc(db, 'likes', likeId);
            await deleteDoc(likeToDelete);
            if (user) {
                setLikes((prev) => prev && prev.filter((like) => like.likeId !== likeId));
            };
        } catch (error) {
            console.log(error);
        }
    };

    const hasUserLiked = likes?.find((like) => like.userId === user?.uid)

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
                <button onClick={hasUserLiked ? removeLike : addLike}> {hasUserLiked ? <> &#128078; </> : <> &#128077; </>} </button>   {/* HTML entitis */}
                {likes?.length && <p> Likes: {likes?.length}</p>}
            </div>
            <hr style={{width: '500px', color: 'purple'}}/>
        </div>
    );
};