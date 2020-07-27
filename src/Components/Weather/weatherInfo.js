import React,{Component} from "react";

export class WeatherInfo extends Component{
     render(){
    return (

        <div>
            {this.props.city &&
                <div>
                <p>City: {this.props.city},{this.props.country}</p>
                <p>Temperature:{this.props.temp}</p>
                <p>Pressure:{this.props.pressure}</p>
                <p>Sunset:{this.props.sunset}</p>
            </div>
                }
            <p>{this.props.error}</p>
        </div>
    )
}
}