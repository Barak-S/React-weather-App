import React from 'react'
import './App.css'
import Results from './Results'


class Weather extends React.Component{

    state={
        cityName: "",
        weatherResult: []
    }

    searchAPI=()=>{
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&appid=827a998e41cda6984e61e05673fb503b`
        return(
            fetch(url)
            .then(resp=>resp.json())
            .then(weatherData=>this.setState({
                weatherResult: weatherData
            }))
        )
    }


    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.searchAPI()
    }


    render(){

        return(
            <div>
                <label>Search any city! </label><input type="text" name="cityName" value={this.state.cityName} onChange={(e)=>this.handleChange(e)}></input>
                <button type="submit" onClick={(e)=>this.handleSubmit(e)}>Search!</button>
                <br/>
                <Results weatherResult={this.state.weatherResult}/>
            </div>
        )
    }
}

export default Weather