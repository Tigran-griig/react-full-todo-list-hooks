import React from "react";


class FormEmailChange extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            value: '',
            valueOld: '',
            changed: false,
            length: 0
        }
    }

    input1Change = (e) => {
        let next = this.state;
        next.value = e.target.value;
        next.changed = next.value !== next.valueOld;
        next.length = e.target.value.length;
        this.setState(next);
    }



        render() {
        const {handleClose}=this.props
            return (
                <div>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="col-sm-12">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="..."
                                        onChange={this.input1Change}
                                        value={this.state.value}
                                    />
                                    <span className="input-group-btn">
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={handleClose}
                        disabled={!this.state.changed}
                    >Go!</button>
                  </span>
                                </div>
                                {this.state.changed &&
                                <p className="text-success">

                                    you drove so much    {this.state.length} symbol
                                </p>
                                }
                            </div>
                        </div>
                    </div>
                </div>

            );
        }
    }
//this.stat.value



export default FormEmailChange