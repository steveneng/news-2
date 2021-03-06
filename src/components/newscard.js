import './stylesheet.css'
import React from 'react';

const NewsCard = (props) =>{

    return(
    <div className=" ui items">
      <a rel="noopener noreferrer" href={props.article.url} className="item" target="_blank">
        <div className="image">
          <img alt="news cards" src={props.article.urlToImage} />
        </div>
        <div className="content">
          <div className="header">{props.article.title}</div>
          <div className="description">
            <p>{props.article.description}</p>
          </div>
          <div className="extra">
            {props.article.author}
          </div>
        </div>
      </a>
    </div>
 
    )
}

export default NewsCard