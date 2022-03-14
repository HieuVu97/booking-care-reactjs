import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLogin } from '../../services';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
        }
    }

    handleOnChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        const { username, password } = this.state;

        try {
            let data = await handleLogin(username, password);
            console.log(data)
            this.setState({
                errMessage: data && data.errCode != 0 && data.message
            })
            if (data && data.errCode == 0) {
                this.props.userLoginSuccess(data.user)
            }
        } catch (error) {
            this.setState({
                errMessage: error.response && error.response.data && error.response.data.message
            })
        }

    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }


    render() {

        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 text-login">Login</div>
                        <div className="col-12 form-group input-login">
                            <label>UserName</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Your UserName"
                                onChange={(e) => this.handleOnChange(e)}
                                name="username"
                            />
                        </div>
                        <div className="col-12 form-group input-login">
                            <label>Password</label>
                            <div className="custom-input-password" >
                                <input
                                    type={this.state.isShowPassword ? "text" : "password"}
                                    className="form-control"
                                    placeholder="Enter Your PassWord"
                                    onChange={(e) => this.handleOnChange(e)}
                                    name="password"
                                />
                                <span onClick={() => this.handleShowHidePassword()}>
                                    <i className={this.state.isShowPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                                </span>

                            </div>

                        </div>
                        <div className="col-12" style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>
                        <div className="col-12 ">
                            <button
                                className='btn-login'
                                onClick={() => this.handleLogin()}
                            >
                                Login
                            </button>
                        </div>

                        <div className="col-12">
                            <span className='forgot-password'>Forgot your password?</span>
                        </div>
                        <div className="col-12 text-center mt-5">
                            <span className='other-login'>Or log in with:</span>
                        </div>
                        <div className="col-12 social-login">
                            <i className="fab fa-google google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                            <i className="fab fa-twitter twitter"></i>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        //userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
