import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import SearchInput from './Form-search';
import SelectInput from './Form-select';
import { getFilteredPostsByQuery } from '../../../store/actions/filter_posts';

class Form extends Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const query = this.props.state.query;
        this.props.dispatch( getFilteredPostsByQuery(query) );
    }

    render() {
        return (
            <form autoComplete="off" onSubmit={this.handleSubmit}>
                <Grid container spacing={40}>
                    <Grid item lg="8" md={6} xs={12}>
                        <FormControl className="form-control">
                            <SearchInput handleSearch = {this.props.dispatch} />
                        </FormControl>
                    </Grid>
                    <Grid item lg="4" md={6} xs={12}>
                        <FormControl className="form-control">
                            <SelectInput/>
                        </FormControl>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

const mapStateToProps = (state) => ({state});
const mapDispatchToProps = dispatch => ({dispatch});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);