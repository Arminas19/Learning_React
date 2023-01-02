import React from 'react';
import { PostForm } from './post/form';
import '../App.css';

export default function Posts() {
    return (
        <div className='App'>
            <h1> posts </h1>
            <div className='PostForm'>
            <PostForm />
            </div>
        </div>
    );
};
