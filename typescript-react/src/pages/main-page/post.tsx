import { Post as IPost} from './main';

interface Props {
    post: IPost
}

export const Post = (props: Props) => {
    const {post} = props;
    return (
        <div>
            <div className='title'>
                <h1> {post.title} </h1>
            </div>
            <div className='Post-body'>
                <p> {post.description} </p>
            </div>
            <div className='psot-footer'>
                <p> @{post.username} </p>
            </div>
            <hr/>
           
        </div>
    );
};