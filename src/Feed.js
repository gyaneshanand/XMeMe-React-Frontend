import React, { useCallback, useEffect, useState } from 'react'
import './Feed.css'
import Post from './Post'
import axios from 'axios'

function Feed() {

    const [posts , setPosts] = useState([]);

    const getAllPosts = () => {
        axios.get(`https://gspringdemo.herokuapp.com/memes`)
        .then(res => {

            res.data.sort((a, b) => b.id - a.id);
            setPosts(res.data);
        });         
    };

    useEffect(() => {
        getAllPosts();
        console.log(posts)       
    },[]);

    return (
        <div className="feed scrollbar-juicy-peach">
        
            { posts.map((post) => 
                (<Post key={post.id} id={post.id} creatorName={post.name} postCaption={post.caption} 
                photoURL={post.url} />) )}


            {/* <Post creatorName="Gyanesh Anand"  postCaption="This is the caption"  
            photoURL="https://3c534w2w7sa3ma8ved14ax12-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/Copy-of-Untitled-2020-07-08T105340.290-1080x630.png" />
            <Post creatorName="Gyanesh Anand"  postCaption="This is the caption"  
            photoURL="https://www.dictionary.com/e/wp-content/uploads/2018/03/dank-meme.jpg" />
            <Post creatorName="Aryan Anand"  postCaption="This is the caption"  
            photoURL="https://www.timecamp.com/blog/wp-content/uploads/2018/02/work-memes-4.jpg" /> */}
        </div>
    )
}

export default Feed
