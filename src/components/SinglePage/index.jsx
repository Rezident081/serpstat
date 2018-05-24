import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SinglePage extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const {title,body} = this.props.singlePost[0];
        return (
            <main className="main-container">
                <div className="navigation-link">
                    <Link to="/"> &#8592; Back to home </Link>
                </div>
                <h1>{title}</h1>
                <p>{body}</p>
            </main>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    singlePost : state.defaultPosts.filter( post => post.id === Number(ownProps.match.params.id) )
});
const mapDispatchToProps = dispatch => ({dispatch});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SinglePage);