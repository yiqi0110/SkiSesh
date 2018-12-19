import React, { Component } from "react";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";
import Modal from "../components/Modal";

class Login extends Component {
    state = {
        username: "",
        password: "",
        age: "",
        skill: "",
        display: "none",
        header: "Login"
    };

    componentDidMount = () => {
        this.setState({
            display: "block"
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password && this.state.age) {
            console.log(this.state.username)
            API.saveUser({
                username: this.state.username,
                password: this.state.password,
                age: this.state.age
            })
                // .then(res => this.loadBooks())
                .then(console.log(this.state.username))
                .catch(err => console.log(err));
        }
    };

    toggleModal = () => {
        this.setState({
            display: "block"
        });
    }

    handleCloseModal = () => {
        this.setState({
            display: "none"
        });
    }

    handleSignUp = () => {
        this.setState({
            header: "Sign Up!"
        })
    }

    render() {
        if (this.state.header === "Sign Up!") {
            return (
                <div>
                    <Modal display={this.state.display}
                        header={this.state.header}>
                        <form>
                            <Input
                                value={this.state.username}
                                onChange={this.handleInputChange}
                                name="username"
                                placeholder="Username (required)"
                            />
                            <Input
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                type="password"
                                name="password"
                                placeholder="Password (required)"
                            />
                            <Input
                                value={this.state.age}
                                onChange={this.handleInputChange}
                                type="number"
                                name="age"
                                placeholder="Age"
                            />
                            <FormBtn
                                disabled={!(this.state.username && this.state.password && this.state.age)}
                                onClick={this.handleFormSubmit}
                            >
                                Register
                        </FormBtn>
                        </form>
                    </Modal>
                </div>
            )
        } else
            return (
                <div>
                    <Modal display={this.state.display}
                        header={this.state.header}>
                        <form>
                            <Input
                                value={this.state.username}
                                onChange={this.handleInputChange}
                                name="username"
                                placeholder="Username (required)"
                            />
                            <Input
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                type="password"
                                name="password"
                                placeholder="Password (required)"
                            />
                            <FormBtn
                                disabled={!(this.state.username && this.state.password)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit User
                        </FormBtn>
                        </form>
                        <p>Not a Member?
                        <button onClick={this.handleSignUp} className="btn-link" href="">Sign Up!</button>
                        </p>
                    </Modal>
                </div>
            )
    }
}

export default Login;