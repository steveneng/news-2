import React,{Component} from 'react';

const NewsCard = (props) =>{

    return(
    
      <div className=" ui items">

      <a href={props.article.url} className="item" target="_blank">
        <div className="image">
          <img src={props.article.urlToImage}/>
        </div>
        <div className="content">
          <div className="header">{props.article.title}</div>
          <div className="meta">
            <span>{props.article.description}</span>
          </div>
          <div className="description">
            <p></p>
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