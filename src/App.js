import React, { Component } from 'react';
import axios from 'axios';
import apiKey from './config';

import ImgList from './components/ImgList';

export default class App extends Component {
    state = {
        images: []
    }

    componentDidMount() {
        this.performSearch();
    }

    performSearch = (query = 'sunsets') =>{
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(res => {
                const images = res.data.photos.photo;
                this.setState({images});
            })
    }

    render() {
        return(
            <div className="container">
                <ImgList data={this.state.images} />
            </div>
        );
    }
}