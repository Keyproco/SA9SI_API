import React, { Component } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";

export default class Example extends Component {
    state = {
        body: "",
        title: "My Question",
        tag: "",
        questions: []
    };
    handleTagOption = e => this.setState({ tag: e.target.value });
    handleTextArea = e => this.setState({ body: e.target.value });
    handleSubmit = e => {
        e.preventDefault();
        Axios.post("/question", this.state)
            .then(({ data }) =>
                this.setState(prevState => ({
                    questions: [...prevState.questions, data]
                }))
            )
            .catch(e => console.log(e));
    };
    renderQuestions() {
        console.log(this.state.questions);
        return this.state.questions.map((question, i) => {
            return (
                <tr key={i}>
                    <td>
                        <a href={"/question/" + question.id}>
                            {question.title}
                        </a>
                    </td>
                </tr>
            );
        });
    }
    componentWillMount() {
        Axios.get("/question").then(({ data }) =>
            this.setState({ questions: data })
        );
    }
    render() {
        return (
            <div className="container">
                <table>
                    <tbody>{this.renderQuestions()}</tbody>
                </table>
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
                                    value={this.state.body}
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
