import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';
import { getSearchQuery } from '../../../store/actions/filter_posts';

class SearchInput extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const query = e.target.value; 
        this.props.handleSearch(getSearchQuery(query));
    }

    render() {
        return (
                <Input
                    id="search-field"
                    type="text"
                    placeholder="Search"
                    onChange = {this.handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton type="submit" aria-label="Search btn">
                                <Search className="search-btn" />
                            </IconButton>
                        </InputAdornment>
                    }
                />
        );
    }
}

export default SearchInput;