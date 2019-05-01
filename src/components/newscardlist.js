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
            <h1><i class="newspaper outline icon"></i> Headlines</h1>
            {Cards}
        </div>
    )
}

export default NewsCardList

