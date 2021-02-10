import React from 'react'
import './SideBar.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AddPost from './AddPost';
import UpdatePost from './UpdatePost';

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar__body">
                {/* <h1>Sidebar</h1> */}
                {/* <hr/> */}
                    <Switch>
                        <Route path="/update/:id">
                            <UpdatePost />
                        </Route>
                        <Route path="/">
                            <AddPost />
                        </Route>
                    </Switch>                
            </div>
            
        </div>
    )
}

export default SideBar
