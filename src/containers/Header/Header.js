import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import { LANGUAGES } from '../../utils/constant';
import { FormattedMessage } from 'react-intl';


class Header extends Component {

    handleChangeLanguage(language) {
        this.props.changeLanguageAppRedux(language);
    }
    render() {
        const { processLogout, language, userInfo } = this.props;

        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>


                <div>
                    <span className='welcome'>
                        <FormattedMessage id='homeheader.welcome'></FormattedMessage>
                        {userInfo && userInfo.firstName && userInfo.lastName ? userInfo.firstName + ' ' + userInfo.lastName : ''}
                    </span>
                    <span className='languages'>
                        <span
                            className={language === LANGUAGES.VI ? 'lang_vi active' : 'lang_vi'}
                            onClick={() => this.handleChangeLanguage(LANGUAGES.VI)}
                        >
                            VI
                        </span>
                        <span
                            className={language === LANGUAGES.EN ? 'lang_en active' : 'lang_en'}
                            onClick={() => this.handleChangeLanguage(LANGUAGES.EN)}
                        >
                            EN
                        </span>
                    </span>
                    {/* nút logout */}
                    <div className="btn btn-logout" onClick={processLogout} title="log out" >
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        userInfo: state.user.userInfo

    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (lang) => dispatch(actions.changeLanguageApp(lang)),
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
