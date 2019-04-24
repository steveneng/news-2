import React,{Component} from 'react';

const NewsCard = (props) =>{

    return(
    <div className=" ui items">
      <div className="item">
        <div className="image">
          <img src={props.article.urlToImage}/>
        </div>
        <div className="content">
          <a className="header">{props.article.title}</a>
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
      </div>
    </div>
    )
}

export default NewsCard