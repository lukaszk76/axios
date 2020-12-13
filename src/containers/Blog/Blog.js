import React, { Component } from 'react';
//import axios from "axios";
//import axios from '../../axios';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';
import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

class Blog extends Component {

    state = {
        auth: false
    }

    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink 
                                    exact={true}
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
                    {this.state.auth ? <Route path='/new-post' component={NewPost}/> : null}
                    <Route path='/posts' component={Posts}/> 
                    <Route render={() => <h1>output not found!</h1>}/>
                    {/* <Redirect from='/' to='/posts' /> */}
                </Switch>
                
            </div>
        ); 
    }
}

export default Blog;