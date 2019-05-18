import "./stylesheet.css";
import React from "react";
import axios from "axios";

export default class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: "",
      temp: "",
      zip: 10001,
      city: "",
      value: "",
      unit: "imperial",
      degrees:"°F",
      speedunit:"mph",
      humidity:"",
      wind:"",
      error:"",
      counter:0
    };
  }
  componentDidMount() {
    this.inputWeather();
  }

  inputWeather() {
    axios
      .get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          zip: this.state.zip,
          appid: "29353e068b18a6d5b8999d7d4aa45b7d",
          units: this.state.unit
        }
      })
      .then(response => {
        const conditions = response.data.main;
        console.log(response.data)
        this.setState({
          temp: conditions.temp,
          city: response.data.name+", ",
          condition: response.data.weather[0].description,
          humidity:conditions.humidity+"%",
          wind:response.data.wind.speed,
          rain: (()=>{
            if(response.data.rain){
              console.log(response.data)
              return response.data.rain["1h"]+"%"
            }
            else{
              return "no rain :)"
            }
          })(),
          
          error:"",
          degrees:(()=>{
            if(this.state.unit==="imperial"){
              return "°F"
            }
            else{
              return "°C"
            }
          })()

        });
      },
        (error)=>{
          this.setState({
            temp: ":( Invalid Zip",
            city: "404 woops",
            condition: "no droids here",
            zip:"",
            degrees:"",
            error:"none"
          });
        }
      );
    console.log("changed weather");
  }

  weather = () => {
    const current = this.state.condition;
    let icon = "";
    if (current.indexOf("rain") > 0) {
      icon = "umbrella";
    } else if (current.indexOf("sun") > 0 || current.indexOf("clear") >= 0) {
      let objDate = new Date();
      let hour = objDate.getHours();
      if(hour>=20 || hour<=4){
        icon = "moon"
      }
      else{
        icon="sun"
      }
    } else if (current.indexOf("overcast clouds") >= 0 || current.indexOf("broken clouds") >= 0 || current.indexOf("scattered clouds") >= 0) {
      icon = "cloud";
    } 
    else if (current.indexOf("few clouds") >= 0) {
      icon = "partial";
    }else if (current.indexOf("snow") > 0) {
      icon = "snowflake";
    }
 else if (current.indexOf("thunderstorm") >= 0) {
    icon = "thunder";
  }
    return <i className={`icon ${icon}`} />;
  };

  changeZip = e => {
    e.preventDefault();
    this.setState(
      {
        zip: this.state.value
      },
      () => {
        this.inputWeather();
      }
    );
  };

  changeUnits=()=>{
    if(this.state.unit==="imperial"){
        this.setState({
            unit:"metric",
            degrees:"°C",
            speedunit:"km/h"
        }, ()=>{
            this.inputWeather()
        })
    }
    else{
        this.setState({
            unit:"imperial",
            degrees:"°F",
            speedunit:"mph"
        }, ()=>{
            this.inputWeather()
        })
    }
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {

    const quarters = this.props.feed.map((article, i) => {
      return (
        <a rel="noopener noreferrer" className="quarters" key={i} href={article.url} target="_blank">
          <div>
            <img alt="newscards" src={article.urlToImage} />
            <div className="description titles">
              <p>{article.title}</p>
            </div>
            <div className="previewtitle">
              <p>{article.source.name}</p>
            </div>
          </div>
        </a>
      );
    });

    return (
      <div className=" container ui">
        <div className="frontpage">
          <div className="main">
            <h1>Today's Weather <i className="icon thermometer half"/></h1>
            <div className="location">
              {this.state.city} {this.state.zip}
            </div>
            <div>{this.state.condition}</div>
            <div className="temperature">
              <div className="weathericon">             <h2 id="temperature" onClick={this.changeUnits}>
              {this.weather()} 
                {this.state.temp} <sup>{this.state.degrees}</sup>
              </h2></div>
              <div style={{display:`${this.state.error}`}} className="temperatures ">
                <p>Wind: {this.state.wind} {this.state.speedunit}</p>
                <p>Humidity: {this.state.humidity}</p>
                <p>Precipitation: {this.state.rain}</p>
              </div>
            </div>
        
            <form className="zipcode" onSubmit={this.changeZip}>
              <div className="ui input">
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder="Change Zip ex:10001"
                />
              </div>
            </form>
          </div>

          {quarters}
        </div>
      </div>
    );
  }
}
