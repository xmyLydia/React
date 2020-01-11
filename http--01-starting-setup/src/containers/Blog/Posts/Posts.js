import React, { Component } from "react";
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import '../Posts/Posts.module.css';

class Posts extends Component {
    state = {
        posts: []
    }
    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
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
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}
                />
            }
            );
        }
        return (<section className="Posts">
            {posts}
        </section>
        )
    }
}
export default Posts;