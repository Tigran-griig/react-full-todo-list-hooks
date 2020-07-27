import React,{useState} from "react";
import {Info} from "./info";
import {WeatherForm} from "./weatherForm";
import {WeatherInfo} from "./weatherInfo";
const API_KEY="74a665a048c561f4915b972e7e62bde4"

export class WeatherApps extends React.Component {
    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: undefined,
    }


    getWeather = async (e) => {
        e.preventDefault()

        const city = e.target.elements.city.value;
       if(city) {
        const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        const data = await api_url.json()
      const sunset= data.sys.sunset;
        const date=new Date();
        date.setTime(sunset);
        const sunset_date=date.getHours()+':'+date.getMinutes()+':'+ date.getSeconds();
        this.setState({
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            pressure: data.main.pressure,
            sunset: sunset_date,
            error: undefined,
        })
    }else{this.setState( {
               temp: undefined,
               city: undefined,
               country: undefined,
               pressure: undefined,
               sunset: undefined,
               error: "Enter the title",
             })
       }
}


    render() {
        return (
            <div className={'wrapper'}>


              <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-sm-5 info'}>
                        <Info/>
                    </div>
                    <div className={'col-sm-7'}>
                        <WeatherForm getWeater={this.getWeather}/>
                        <WeatherInfo
                            temp={this.state.temp}
                            city={this.state.city}
                            country={this.state.country}
                            pressure={this.state.pressure}
                            sunset={this.state.sunset}
                            error={this.state.error}

                        />
                    </div>

                </div>
              </div>

            </div>
        )
    }
}