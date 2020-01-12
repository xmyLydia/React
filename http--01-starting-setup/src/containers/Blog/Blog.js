import React, { Component } from 'react';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch } from 'react-router-dom';
import './Blog.module.css';
import axios from '../../axios';
import NewPost from './NewPost/NewPost';
import Post from './FullPost/FullPost';
//import axios from 'axios';

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                activeStyle={
                                    {
                                        color: '#fa923f',
                                        textDecoration: 'underline',
                                    }
                                }>Posts</NavLink></li>
                            <li><NavLink to={{
                                //pathname: this.props.match.url + '/new-post',// relative path
                                pathname: '/new-post',// absolute path
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={()=><h1>Home</h1>}/>
              <Route path="/"  render={()=><h1>Home2</h1>}/>*/}
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />

                </Switch>
            </div>
        );
    }
}
export default Blog;