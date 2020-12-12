import React, {Component} from 'react';
import './Posts.module.css';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import { Route } from 'react-router';
import FullPost from '../FullPost/FullPost';
// import { Link } from 'react-router-dom';

class Posts extends Component {

    state = {
        posts: []
    }

    postSelectedHandler = (id) => {
        // this.setState({selectedPostId: id});
        this.props.history.push({pathname: "/posts/"+id})
    }

    componentDidMount() {
        
        axios.get('/posts')
        .then(response => {
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Max'
                }
            })
            this.setState({posts: updatedPosts});
            //console.log(response);
        })
        .catch(error => {
            console.log(error);
            //this.setState({error: true});
        });
    }

    render() {

        let posts = <p style={{textAlign: "center", color: "red"}}>Something went wrong...</p>;
        
        if (!this.state.error) {
            posts = this.state.posts.map( post => {
                return ( 
                    // <Link to={'/' + post.id} key={post.id}> 
                        <Post 
                            key={post.id}
                            title={post.title} 
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}/>
                    // </Link>
                )
            });
        };
        
        return(
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route exact path={this.props.match.url + '/:id'} component={FullPost}/>
            </div>
            
        );
    };
}

export default Posts;