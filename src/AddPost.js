import axios from 'axios';
import React, { useState } from 'react'
import './AddPost.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddPost() {

    const [name , setName] = useState("");
    const [caption , setCaption] = useState("");
    const [url , setURL] = useState("");

    const notify = () => toast.success("Meme Added Successfully!!!");

    const handleSubmitPost = (e) => {
        e.preventDefault();
        const data = {
            "name" : name,
            "caption" : caption,
            "url" : url
        }
        //console.log(data);
        postDataToServer(data);
        setTimeout(
            function(){ window.location.reload();; }, 2000
            );
        
    }

    const postDataToServer = (data) => {
        axios.post('https://gspringdemo.herokuapp.com/memes',data)
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
        <div className="addpost__body">
            <div class="login-box">
                <h2>Add New Meme</h2>
                <form>
                    <div class="user-box">
                        <input type="text" name="name" value={name} required 
                            onChange={(e) => setName(e.target.value)} placeholder=""/>
                        <label>Enter name </label>
                    </div>
                    <div class="user-box">
                        <input type="text" name="caption" value={caption} required
                            onChange={(e) => setCaption(e.target.value)} placeholder=""/>
                        <label>Enter caption</label>
                    </div>
                    <div class="user-box">
                        <input type="text" name="url" value={url} required
                            onChange={(e) => setURL(e.target.value)} placeholder=""/>
                        <label>Enter photoURL</label>
                    </div>
                    <a type="submit" onClick={handleSubmitPost}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Add Post                      
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
            </div>
            
        </div>
    )
}

export default AddPost
