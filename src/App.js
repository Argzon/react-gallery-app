import React, { Component }from 'react';
import axios from 'axios';
import apiKey from './config';
import { 
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

// Components import
import ImgList from './components/ImgList';
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import NotFound from './components/NotFound';
import ErrorPage from './components/ErrorPage';

export default class App extends Component {
    state = {
        images: [],
        loading: true,
        query: this.props.query
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
                    query,
                    loading: false
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            }); 
    }

    render() {
        return(
            <div className="container">
                <SearchForm onSearch={this.performSearch} />
                <Router>
                    <Nav />
                    <Switch>
                        <Route exact path="/" />
                        <Route component={ErrorPage} />
                    </Switch>
                </Router>
                { (this.state.loading) ? <NotFound /> : <ImgList title={this.state.query} data={this.state.images} /> }
            </div>
        );
    }
}