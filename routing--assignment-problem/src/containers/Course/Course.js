import React, { Component } from 'react';

class Course extends Component {
    componentDidUpdate() {
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>You selected the Course with ID: {this.props.id}</p>
            </div>
        );
    }
}

export default Course;