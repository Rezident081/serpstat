import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Form from './components/Form';

class Navbar extends Component {
    render() {
        return (
        <AppBar position="static">
            <Toolbar>
                <Grid container spacing={16} alignItems="center">
                    <Grid item lg="3" md={4} xs={12}>
                        <Typography variant="title" color="inherit">
                            Serpstat - test
                        </Typography>
                    </Grid>
                    <Grid item lg="9" md={8} xs={12}>
                        <Form />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        );
    }
}

export default Navbar;