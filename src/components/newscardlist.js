import React from 'react'
import NewsCard from './newscard'

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
            {Cards}
        </div>
    )
}

export default NewsCardList

