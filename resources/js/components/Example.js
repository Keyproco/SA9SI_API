import React, { Component } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";

export default class Example extends Component {
    state = {
        text: "",
        tag: ""
    };
    handleTagOption = e => this.setState({ tag: e.target.value });
    handleTextArea = e => this.setState({ text: e.target.value });
    handleSubmit = e => {
        e.preventDefault();
        Axios.post("/question", this.state)
            .then(r => console.log(r))
            .catch(e => console.log(e));
    };
    render() {
        console.log(this.state.tag);
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card">
                        <div className="card-header">Question</div>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">
                                    Thème
                                </label>
                                <select
                                    className="form-control"
                                    id="exampleFormControlSelect1"
                                    onChange={this.handleTagOption}
                                >
                                    <option>science</option>
                                    <option>culture</option>
                                    <option>physique</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">
                                    Quelle question voulez-vous poser?
                                </label>
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    value={this.state.text}
                                    onChange={this.handleTextArea}
                                />
                            </div>
                            <button
                                onClick={this.handleSubmit}
                                type="submit"
                                className="btn btn-primary"
                            >
                                sa9si
                            </button>
                        </form>

                        <div className="card-body" />
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
