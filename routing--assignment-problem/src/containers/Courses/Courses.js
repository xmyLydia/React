import React, { Component } from 'react';
import Course from '../Course/Course';
import { Route, NavLink, Link } from 'react-router-dom';
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        choosedTitle: null,
        choosedId: null
    }
    postSelectedHandler = (id, title) => {

    /*    this.props.history.push({
            pathname: '/courses/' + id
        });
        */
        this.setState({ choosedId: id, choosedTitle: title })
    }

    render() {
        const courses = this.state.courses.map(course => {
            return <div
                key={course.id}
                className="Course"
            className="Course" 
                className="Course"
            onClick={() => this.postSelectedHandler(course.id, course.title)}
            ><Link to={'/courses/' + course.id}>{course.title}</Link></div>;
        });

        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {courses}
                </section>
                <Route path= {this.props.match.url + '/:id'} 
                render={()=>
                <Course   
                title = {this.state.choosedTitle} 
                id = {this.state.choosedId}
            /> } />
            </div>
        );
    }
}

export default Courses;