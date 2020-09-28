import React from 'react'
import youtube from '../apis/youtube'
import SearchBar from './searchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'


class App extends React.Component {

    state = {
        videoList : [],
        selectedVideo: null,
    }

    onTermSubmit = async (text) =>{
        console.log(text)
        const list = await youtube.get('/search', {params: {q: text}})
        this.setState({
            videoList : list.data.items,
            selectedVideo: list.data.items[0],
        })
        console.log(this.state.videoList)
    }

    onVideoSelect = async (video) => {

        await this.setState({
            selectedVideo: video,
        })
        window.scrollTo(0, 0)
        console.log('From the app!', this.state.selectedVideo);

    }

    componentDidMount (){
        this.onTermSubmit('popular')
    }


    render(){
        return (
            <div className='ui container'>
                <SearchBar search={this.onTermSubmit}/>
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videoList} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App