import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Item extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let { id, body, title, date, view } = this.props;
        date = (new Date(date)).toUTCString();
        return (
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Paper className="paper-block">
                    <h3> { title } </h3>
                    <p> { body } </p>
                    <p> <i> Post date </i> : { date }</p>
                    <p> <i> View </i> : { view }</p>
                    <Link to={`/${id}`} className="read-more-link">Read more</Link>
                </Paper>
            </Grid>
        );
    }
}

Item.propTypes = {
    id : PropTypes.number,
    title : PropTypes.string,
    body : PropTypes.string,
    date : PropTypes.number,
    view : PropTypes.number
};

export default Item;