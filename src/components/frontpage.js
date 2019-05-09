import "./stylesheet.css";
import React from "react";
import Weather from "../api/openweather";
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
      degrees:"°F"
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
        this.setState({
          temp: conditions.temp,
          city: response.data.name+", ",
          condition: response.data.weather[0].description
        });
      },
        (error)=>{
          this.setState({
            temp: ":( Invalid Zip",
            city: "404 woops",
            condition: "no droids here",
            zip:"",
            degrees:""
          });
        }
      );
    console.log("changed weather");
  }

  weather = () => {
    const conditions = ["sun", "cloud", "snowflake", "umbrella"];
    const current = this.state.condition;
    let icon = "";
    if (current.indexOf("rain") > 0) {
      icon = "umbrella";
    } else if (current.indexOf("sun") > 0 || current.indexOf("clear") >= 0) {
      icon = "sun";
    } else if (current.indexOf("overcast clouds") >= 0) {
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
            degrees:"°C"
        }, ()=>{
            this.inputWeather()
        })
    }
    else{
        this.setState({
            unit:"imperial",
            degrees:"°F"
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
      );
    });

    return (
      <div className=" container ui">
        <div className="frontpage">
          <div className="main">
            <h1>Today's Weather</h1>
            <div className="location">
              {this.state.city} {this.state.zip}
            </div>
            <div>{this.state.condition}</div>
            <div className="temperature">
              <div className="weathericon">{this.weather()}</div>
              <h2 id="temperature" onClick={this.changeUnits}>
                {this.state.temp} <sup>{this.state.degrees}</sup>
              </h2>
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
