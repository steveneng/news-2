import './stylesheet.css';
import React from 'react';
import Weather from '../api/openweather';
import axios from 'axios';

export default class FrontPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
                condition:"",
                temp:"",
                zip:10001,
                city:"",
                value:1001

        }
    }
    componentDidMount(){
        this.inputWeather()
    }

    inputWeather(){
        axios.get('https://api.openweathermap.org/data/2.5/weather',{
            params:{
                zip:this.state.zip,
                appid:"29353e068b18a6d5b8999d7d4aa45b7d",
                units:"imperial"
            }
        }).then(
            (response)=>{
         
                const conditions = response.data.main
                console.log(response)
                this.setState({
                        temp: conditions.temp,
                        city: response.data.name,
                        condition:response.data.weather[0].description,
                        img:'http://openweathermap.org/img/w/'+response.data.weather[0].icon+".png"
                        
                })
                console.log("current state",this.state)
            }
        )
        console.log("changed weather")
    }

     weather = () =>{
        const conditions = ["sun","cloud","snowflake","umbrella"];
        const current = this.state.condition;
        let icon = "";
        if (current.indexOf("rain") > 0) {
            icon = "umbrella"
        }
        else if ((current.indexOf("sun")>0) || (current.indexOf("clear")>=0)){
            icon = "sun"
        }
        else if (current.indexOf("cloud")>0){
            icon = "cloud"
        }
        else if(current.indexOf("snow")>0){
            icon = "snowflake"
        }
        return(
            <i className={`icon ${icon}`}></i>
        )
    }

    changeZip = (e) =>{
        e.preventDefault();
        this.setState({
            zip:this.state.value
        },()=>{
            this.inputWeather()
        })
        console.log(this.state)
    }

    handleChange = (event) =>{
        this.setState({
            value:event.target.value
        })
    }

    render(){

        const quarters = this.props.feed.map((article,i)=>{
            return(
                <a className="quarters" key={i} href={article.url} target="_blank">
                    <div>
                        <img src={article.urlToImage} />
                        <div className="description titles">
                            <p>{article.title}</p>
                        </div>
                        <div className="previewtitle">
                            <p>{article.source.name}</p>
                        </div>
                    </div>
                </a>
            )
        })



        return(
            <div className=" container ui">
                <div className="frontpage"> 
                    <div className="main">
                        <h1>Today's Weather</h1>
                        <div className="location">
                            {this.state.city}, {this.state.zip}
                        </div>
                        <div>
                            {this.state.condition}
                        </div>
                        <div className="temperature">
                            <div className="weathericon">{this.weather()}</div>
                            <h2>{this.state.temp} <sup>°F|°C</sup></h2>
                        </div>

                       
                        <form onSubmit={this.changeZip}>
                            <div className="ui input">
                                <input type="text" value ={this.state.value} onChange={this.handleChange}/>
                            </div>
                        </form>


                    </div>





                    {quarters}
                </div>
            </div>
        )
    }
}