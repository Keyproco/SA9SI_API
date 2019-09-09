import React, { Component } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";

export default class Example extends Component {
    state = {
        body: "",
        title: "",
        tag: "",
        image: "",
        questions: []
    };
    handleTagOption = e => this.setState({ tag: e.target.value });
    handleTextArea = e => {
        this.setState({ body: e.target.value });
    };
    handleTitle = e => this.setState({ title: e.target.value });
    handleImage = e => {
        // let form = new FormData();
        // form.append("image", e.target.files[0]);
        this.setState({ image: e.target.files[0] });
    };
    handleSubmit = e => {
        e.preventDefault();
        let form = new FormData();
        form.append("image", this.state.image);
        form.append("title", this.state.title);
        form.append("body", this.state.body);
        form.append("tag", this.state.tag);
        Axios.post("/question", form, {
            headers: {
                "Content-Type": `multipart/form-data; boundary=${form._boundary}`
            }
        })
            .then(({ data }) => {
                this.setState(prevState => ({
                    questions: [...prevState.questions, data]
                }));
                console.log("Hey", data);
            })
            .catch(e => console.log("ERROR", e));
    };
    questions() {
        return this.state.questions.map((question, i) => {
            return (
                <tr key={i}>
                    <td>
                        <img
                            src={question.image}
                            class="img-fluid"
                            alt="Responsive image"
                        />
                        <a href={"/question/" + question.id}>
                            {question.title}
                        </a>
                    </td>
                </tr>
            );
        });
    }
    componentWillMount() {
        Axios.get("/question").then(({ data }) => {
            console.log(data);
            this.setState({ questions: data });
        });
    }
    render() {
        console.log("body", this.state.body, this.state.title, this.state.tag);
        return (
            <div className="container">
                <table>
                    <tbody>
                        {this.state.questions.length > 0 && this.questions()}
                    </tbody>
                </table>
                <div className="row justify-content-center">
                    <div className="card">
                        <div className="card-header">Question</div>
                        <form>
                            <div className="form-group">
                                <label htmlFor="password">Titre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="password"
                                    // value={this.state.title}
                                    onChange={this.handleTitle}
                                    placeholder="Votre titre"
                                />
                            </div>
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
                            <div class="form-group">
                                <label htmlFor="exampleFormControlFile1">
                                    Ajouter une image de couverture
                                </label>
                                <input
                                    type="file"
                                    className="form-control-file"
                                    id="exampleFormControlFile1"
                                    onChange={this.handleImage}
                                />
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
