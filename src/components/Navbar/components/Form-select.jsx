import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { sortPosts } from '../../../store/actions/filter_posts';

class SelectInput extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.dispatch(sortPosts(e.target.value));
    }

    render() {
        return (
            <Select 
                onChange = {this.handleChange}
                value={this.props.state.sortBy}
                inputProps={{
                    name: 'sortBy',
                }}
            >
                <MenuItem value="view">Views</MenuItem>
                <MenuItem value="date">Post date</MenuItem>
            </Select>
        );
    }
}

const mapStateToProps = (state) => ({state});
const mapDispatchToProps = dispatch => ({dispatch});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectInput);