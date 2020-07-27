import React,{Component} from "react";

export class WeatherForm extends Component {
    render() {


        return (


            <form onSubmit={this.props.getWeater}>
                <input type={'text'} name={'city'} placeholder={'town'} />
                <button>Find out the weather</button>
            </form>
        )
    }
}