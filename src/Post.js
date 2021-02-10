import React , { useState,useEffect} from 'react'
import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import EditIcon from '@material-ui/icons/Edit'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './Post.css';

function Post({id,creatorName , postCaption , photoURL}) {

    const [likeButtonColor , setLikeButtonColor] = useState("gray");
    const [laughButtonColor , setLaughButtonColor] = useState("gray");
    const [loveButtonColor , setLoveButtonColor] = useState("gray");

    const [likeCount , setLikeCount] = useState(0);
    const [laughCount , setLaughCount] = useState(0);
    const [loveCount , setLoveCount] = useState(0);


    const changeLikeButtonColor = (e) => 
        {
            setLikeButtonColor("DodgerBlue");
            setLikeCount(likeCount+1);
        };

    const changeLaughButtonColor = (e) => 
        {
            setLaughButtonColor("gold"); 
            setLaughCount(laughCount+1);
        };

    const changeLoveButtonColor = (e) => 
        {
            setLoveButtonColor("FireBrick");
            setLoveCount(loveCount+1);
        };

    return (
        <div className="post">
            <div className="post__header">
                <Avatar style={{height:"4vh",width:"4vh"}} src={`https://avatars.dicebear.com/api/human/${creatorName}.svg`}/>
                <div className="post__info">
                    <h4>{creatorName}</h4>
                    
                </div>
            </div>
            <div className="post__body">
                <p>{postCaption}</p>
                <p className ="postidspan">Post Id : {id}</p>
            </div>
            <div className="post__image">
                <img src={photoURL}/>
            </div>

            <div className="post__buttons">
                <div className='inputOption'>
                    <ThumbUpAltOutlinedIcon onClick={() => changeLikeButtonColor()}  style={{ color: likeButtonColor }}  />
                    <h4>{likeCount}</h4>
                </div>
                <div className='inputOption'>
                    <EmojiEmotionsOutlinedIcon onClick={() => changeLaughButtonColor()} style={{ color: laughButtonColor }}  />
                    <h4> {laughCount} </h4>
                </div>
                <div className='inputOption'>
                    <FavoriteBorderOutlinedIcon onClick={() => changeLoveButtonColor()} style={{ color: loveButtonColor }}  />
                    <h4> {loveCount} </h4>
                </div>

                <Link to= {`/update/${id}`}>
                    <div className='inputOption' >
                        <EditIcon style={{ color: "gray" }}  />
                        <h4> Edit Post </h4>
                    </div>
                </Link>

                {/* <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
                <InputOption Icon={ChatBubbleOutlineOutlinedIcon} title="Comment" color="gray" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
                <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"  /> */}
            </div>


        </div>
    )
}

export default Post
