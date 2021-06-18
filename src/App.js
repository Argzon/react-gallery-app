import React, { Component }from 'react';
import axios from 'axios';
import apiKey from './config';
import { 
    BrowserRouter as Router,
} from 'react-router-dom';

// Components import
import ImgList from './components/ImgList';
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import NotFound from './components/NotFound';

export default class App extends Component {
    state = {
        images: [],
        loading: true
    }

    componentDidMount() {
        this.performSearch();
        document.title = 'Flickr React Gallery App';
    }

    performSearch = (query = 'waterfall') =>{
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(res => {
                const images = res.data.photos.photo;
                this.setState({
                    images,
                    loading: false
                });
            })
    }

    render() {
        return(
            <div className="container">
                <SearchForm onSearch={this.performSearch} />
                <Router>
                    <Nav />
                </Router>
                { (this.state.loading) ? <NotFound /> : <ImgList data={this.state.images} /> }
            </div>
        );
    }
}