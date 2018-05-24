import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../store/actions/posts';
import Grid from '@material-ui/core/Grid';
import Item from './components/Item';

class Main extends Component {

    componentDidMount(){
        this.props.dispatch(fetchPosts(25));
    }

    render() {
        const posts = this.props.state.posts ? this.props.state.posts : this.props.state.defaultPosts;
        return (
            <main className="main-container">
                <Grid container spacing={24}>
                    {posts && posts.map( item => {
                        return <Item 
                            key = {item.id} 
                            id = {item.id}
                            title = {item.title}
                            body = {item.body}
                            view = {item.view}
                            date = {item.date}
                        />
                    })}
                </Grid>
            </main>
        );
    }
}

const mapStateToProps = state => ({state});
const mapDispatchToProps = dispatch => ({dispatch});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);