import React, { Component } from 'react';

class Course extends Component {
    state = {
        title: null
    }
    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search); 
        const tags = params.get('title');
        this.setState({title: tags});
    }

    componentDidUpdate(prevState) {
        const params = new URLSearchParams(this.props.location.search); 
        const tags = params.get('title');
        if(this.state.title && this.state.title != tags){
            this.setState({title: tags});       
        }
    }    

    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;