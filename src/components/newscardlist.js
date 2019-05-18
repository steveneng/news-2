import React from 'react'
import NewsCard from './newscard'




// class NewsCardList extends React.Component{
//     constructor(props){
//         super(props)
//         this.dog = React.createRef()
//     }

//     componentDidUpdate(){
//         console.log("will mount")
        
//     }

//     render(){

//         const Cards = this.props.feed.map(
    
//             (feeder,i)=>{
//                 return(
//                     <NewsCard key={i} article={feeder} />
//                 )
//             }
//         )
//             if(Cards){
//                 return(
//                     <div className="ui container">
//                     {Cards}
        
//                 </div>)
//             }
//             else{
//           return(
//             <div className="ui container">
//             Loading...
//         </div>
//           )
//             }
        
        
//     }
// }


const NewsCardList = (props) =>{
    const Cards = props.feed.map(
    
        (feeder,i)=>{
            return(
                <NewsCard key={i} article={feeder} />
            )
        }
    )
    return(
        <div className="ui container">
            <h1 id="topstories"><i className="newspaper outline icon"></i> Top Stories</h1>
            {Cards}
            <h1 id="business"><i className="dollar sign icon"></i> Business</h1>
            <h1 id="science"><i className="flask sign icon"></i> Science</h1>
            <h1 id="technology"><i className="react icon"></i> Technology</h1>
        </div>
    )
}

export default NewsCardList

