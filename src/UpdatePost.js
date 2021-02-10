import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './UpdatePost.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function UpdatePost() {

    const {id} = useParams();
    const [post , setPost] = useState();
    const [caption , setCaption] = useState("");
    const [url , setURL] = useState("");

    const notify = () => toast.success("Post Updated Successfully!!!");

    const getPost = () => {
        var uri = `https://gspringdemo.herokuapp.com/memes/`+id;
        console.log(uri);
        axios.get(uri)
        .then(res => {
            setPost(res.data);
            console.log("fetched data")
            console.log(res.data);
        });         
    }; 

    useEffect(() => {
        console.log("id has changed ");
        getPost();
        console.log(post);     
    },[id]);

    const handleUpdatePost = (e) => {
        e.preventDefault();
        let data = null;
        if(caption.length>0 && url.length>0)
        {
            data = {
                "caption" : caption,
                "url" : url
            }
        }
        if(caption.length>0 && url.length==0)
        {
            data = {
                "caption" : caption,
            }
        }
        if(caption.length==0 && url.length>0)
        {
            data = {
                "url" : url,
            }
        }
        console.log(data);
        updateDataInServer(data);
        setTimeout(
            function(){ window.location.reload();; }, 2000
            );
    };

    const updateDataInServer = (data) => {
        var uri = `https://gspringdemo.herokuapp.com/memes/`+id;
        axios.patch(uri,data)
            .then((response) => {
                console.log(response);
                notify();
                console.log("success")
                },
                (error) => {
                    console.log(error);
                    console.log("success")
                }
            )
    };

    return (
        
        <div className="updatepost__body">
        <div class="login-box">
            <h2>Update Post</h2>
            <p className="postid">Post Id : {post?.id || "Loading...."}</p>
            <form>
                <div class="user-box">
                    <input type="text" name="name" value={post?.name || "Loading Name...."} required 
                        placeholder="" disabled style={{color:"#f5f5f5a6"}}/>
                    {/* <label>Enter name </label> */}
                </div>
                {/* defaultValue={post?.caption || "Loading...."} */}
                <div class="user-box">
                    <input type="text" name="caption"  required
                       onChange={(e) => setCaption(e.target.value)} placeholder=""/>
                    <label>Enter New caption</label>
                </div>
                <div class="user-box">
                    <input type="text" name="url" required
                        onChange={(e) => setURL(e.target.value)} placeholder=""/>
                    <label>Enter New photoURL</label>
                </div>
                <a type="submit" onClick={handleUpdatePost}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Update Post                      
                </a>        
            </form>
            
            <ToastContainer position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
            <br></br>
            <Link to = {`/`}>
                <div className='inputOption1' >
                    <AddPhotoAlternateIcon style={{ color: "white" }}  />
                    <p> Add New Post </p>
                </div>
            </Link>
        </div>

        

        {/* <div>
            <p>{post?.id || "Loading...."}</p>
            <p>{post?.name || "Loading...."}</p>
            <p>{post?.caption || "Loading...."}</p>
            <p>{post?.url || "Loading...."}</p>
        </div> */}
        
    </div>
    )
}

export default UpdatePost
