import React,{Component} from 'react';
import Navbar from './navbar';
import NewsCardList from './newscardlist';
import News from '../api/newsapi'
import FrontPage from './frontpage'


class App extends Component{

state={
    articles :[]
}

onNewsSearch = async(term) =>{
    const results = await News.get('/everything',{
        params:{
            q:term,
            // apiKey:"5e161d0fb95b487da8bf2daced3e729d"
        }
    })
    this.setState({
        articles:results.data.articles
    })
    console.log(this.state.articles)
}

onNewsClick = async(clicked) =>{
    const results = await News.get(`/${clicked}`,{
        params:{
            country:"us"
        }
    })

    this.setState({
        articles:results.data.articles
    })
    console.log(this.state.articles)
}


    render(){
        return(
            <div>
                <Navbar onClick={this.onNewsClick} onSearchTerm={this.onNewsSearch}/>
                <FrontPage />
                <NewsCardList feed={this.state.articles}/>
            </div>
        )
    }
}

export default App;