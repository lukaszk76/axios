import React, { Component } from 'react';
//import axios from "axios";
//import axios from '../../axios';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';
import './Blog.css';
import { Route, NavLink, Switch } from 'react-router-dom';

class Blog extends Component {

    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink 
                                    exact='true'
                                    to='/posts'
                                    activeClassName='my-active'
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: "underline"
                                    }}
                                    >Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?search=text'
                                    }}
                                    >New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route exact path='/' render={() => <h1>Home</h1>}/> */}
                <Switch>
                    <Route path='/new-post' component={NewPost}/>
                    <Route path='/posts' component={Posts}/> 
                </Switch>
                
            </div>
        ); 
    }
}

export default Blog;