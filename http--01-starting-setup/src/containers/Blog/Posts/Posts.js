import React, { Component } from "react";
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import '../Posts/Posts.module.css';
import FullPost from "../FullPost/FullPost";
import {Route} from 'react-router-dom';

class Posts extends Component {
    state = {
        posts: []
    }
    postSelectedHandler = (id) => {
        this.props.history.push({
            pathname: '/posts/' + id
        });
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts_data = response.data.slice(0, 4);
                const updatePosts = posts_data.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({ posts: updatePosts })
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Post
                    key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
                )
            }
            );
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path= {this.props.match.url + '/:id'}  exact component={FullPost} />
            </div>
        )
    }
}
export default Posts;