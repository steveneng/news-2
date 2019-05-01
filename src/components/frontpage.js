import React from 'react';
import Weather from '../api/openweather';
import axios from 'axios';

export default class FrontPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            weather:{}
        }
    }
    componentDidMount(){
        axios.get('https://api.openweathermap.org/data/2.5/weather',{
            params:{
                zip:10001,
                appid:"29353e068b18a6d5b8999d7d4aa45b7d",
                units:"imperial"
            }
        }).then(
            (response)=>{
                console.clear();
                const condition = response.main
                console.log(response.data.main)
            }
        )
        
    }
    render(){
        return(
            <div className=" container ui">
                <h1 className="header">Weather For Today</h1>

            </div>
        )
    }
}