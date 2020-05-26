import React from 'react'
import './App.css'

 export default class Results extends React.Component{

    determineEmoji=()=>{
        if (this.props.weatherResult.weather[0].description.includes("clear")){
            return (<h1>☀️</h1>)
        } else if (this.props.weatherResult.weather[0].description.includes("partly cloudy") || this.props.weatherResult.weather[0].description.includes("clouds")){
            return (<h1>🌤</h1>)
        } else if (this.props.weatherResult.weather[0].description.includes("clouds")){
            return (<h1>☁️</h1>)
        } else if (this.props.weatherResult.weather[0].description.includes("rain")){
            return (<h1>🌧</h1>)
        } else if (this.props.weatherResult.weather[0].description.includes("rain")){
            return (<h1>❄️</h1>)
        } else if (this.props.weatherResult.weather[0].description.includes("rain")){
            return (<h1>💨</h1>)
        } else if (this.props.weatherResult.weather[0].description.includes("mist") || this.props.weatherResult.weather[0].description.includes("fog")){
            return (<h1>🌫</h1>)
        } else if (this.props.weatherResult.weather[0].description.includes("drizzle")){
            return (<h1>🌧</h1>)
        }else {
            return (<h1>🤷🏻‍♂️</h1>)
        }
    }

    render(){

        // console.log(this.props.weatherResult)

        return(
            <div>
                {this.props.weatherResult.name?
                <div>
                    <h4>Results</h4>
                    <h1>{this.props.weatherResult.name}</h1>
                    <h2>{this.props.weatherResult.sys.country}</h2>
                    <h2>{this.props.weatherResult.weather[0].description}</h2>
                    <h3>{this.props.weatherResult.wind.speed} mph</h3>
                    {this.determineEmoji()}
                </div>
                :
                null
                }
            </div>
        )
    }
}