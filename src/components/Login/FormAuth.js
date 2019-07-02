import React from 'react';
import { InputLabel } from '../../common_components/Inputs';
import Button from '../../common_components/Button';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { getLogIn } from '../../store/actions/authActions'

class FormAuth extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            data: {
                login: '',
                password: ''
            }
        }
    }

    handleEnter = () => {
        this.props.getLogIn(this.state.data)
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            data: {
                ...this.state.data,
                [name]: value
            }
        });
    }

    render() {
        if (this.props.authData.data.successEnter) {
            return <Redirect from="/login" to="/profile" />;
        }

        return (
            <div className="form-auth">
                <InputLabel
                    text={"Login:"}
                    name={"login"}
                    onChange={this.handleInputChange}
                    value={this.state.data.login}
                />
                <InputLabel
                    text={"Password:"}
                    name={"password"}
                    onChange={this.handleInputChange}
                    value={this.state.data.password}
                />
                {this.props.authData.error.status ? <span className="error-text">{this.props.authData.error.text}</span> : null}
                <Button onClick={this.handleEnter} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authData: state.authReducer.authData
    }
}

const mapDispatchToProps = { getLogIn }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormAuth)
