import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBXbUnmIGk89-wbpZxX9P3OtjAszxJRXTI';

// Create a new component. This component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'french bulldog puppies'}, (videos) => {
            this.setState({ videos });
            // this.setState({videos})
        });
    }

    render() {
        return (
            <div>
                <Searchbar />
                <VideoDetail video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(
    <App/>, 
    document.querySelector('.container')
);