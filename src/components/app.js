import React,{Component} from 'react';
import Navbar from './navbar';
import NewsCardList from './newscardlist';
import News from '../api/newsapi'
import FrontPage from './frontpage'


class App extends Component{

state={
    articles :[],
    frontpage:[]
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
    const results = await News.get('/top-headlines',{
        params:{
            country:"us",
            category: clicked

        }
    })

    this.setState({
        articles:results.data.articles
    })
    console.log(this.state.articles)
}

componentDidMount(){
    News.get('/top-headlines',{
        params:{
            country:"us",

        }
    }).then((response)=>{
        this.setState({
            frontpage:response.data.articles.slice(0,4)
        })
    })


}


    render(){
        return(
            <div>
                <Navbar onClick={this.onNewsClick} onSearchTerm={this.onNewsSearch}/>
                <FrontPage feed={this.state.frontpage}/>
                <NewsCardList feed={this.state.articles}/>
            </div>
        )
    }
}

export default App;