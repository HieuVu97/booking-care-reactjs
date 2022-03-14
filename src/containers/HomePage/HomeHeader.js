import { lang } from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils/constant';
import { changeLanguageApp } from '../../store/actions';

class HomeHeader extends Component {

    changeLang = (language) => {
        this.props.changeLanguageAppRedux(language);
    }

    render() {
        console.log(this.props);
        let { language } = this.props
        return (
            <>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo'></div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.speciality" /></b></div>
                                <div className='sub-title'><FormattedMessage id="homeheader.searchdoctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.health-facility" /></b></div>
                                <div className='sub-title'><FormattedMessage id="homeheader.select-room" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.doctor" /></b></div>
                                <div className='sub-title'><FormattedMessage id="homeheader.select-doctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.package" /></b></div>
                                <div className='sub-title'><FormattedMessage id="homeheader.health-check" /></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'>
                                <i className="fas fa-question-circle"></i>
                                <FormattedMessage id="homeheader.support" />
                            </div>
                            <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => this.changeLang(LANGUAGES.VI)}>VI</span></div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => this.changeLang(LANGUAGES.EN)}>EN</span></div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='up-content'>
                        <div className='title1'><FormattedMessage id="banner.title1" /></div>
                        <div className='title2'><FormattedMessage id="banner.title2" /></div>
                        <div className='search'>
                            <i className="fas fa-search"></i>
                            <FormattedMessage id="banner.search" defaultMessage="search">
                                {placeholder =>
                                    <input placeholder={placeholder} />
                                }
                            </FormattedMessage>
                        </div>
                    </div>
                    <div className='down-content'>
                        <div className='option'>
                            <div className='option-item'>
                                <div className='option-icon'><i className="far fa-hospital"></i></div>
                                <div className='option-title'><FormattedMessage id="banner.opt1" /></div>
                            </div>
                            <div className='option-item'>
                                <div className='option-icon'><i className="fas fa-phone"></i></div>
                                <div className='option-title'><FormattedMessage id="banner.opt2" /></div>
                            </div>
                            <div className='option-item'>
                                <div className='option-icon'><i className="fas fa-stethoscope"></i></div>
                                <div className='option-title'><FormattedMessage id="banner.opt3" /></div>
                            </div>
                            <div className='option-item'>
                                <div className='option-icon'><i className="fas fa-vial"></i></div>
                                <div className='option-title'><FormattedMessage id="banner.opt4" /></div>
                            </div>
                            <div className='option-item'>
                                <div className='option-icon'><i className="fas fa-heart"></i></div>
                                <div className='option-title'><FormattedMessage id="banner.opt5" /></div>
                            </div>
                            <div className='option-item'>
                                <div className='option-icon'><i className="fas fa-hospital"></i></div>
                                <div className='option-title'><FormattedMessage id="banner.opt6" /></div>
                            </div>
                            <div className='option-item'>
                                <div className='option-icon'><i className="fas fa-briefcase-medical"></i></div>
                                <div className='option-title'><FormattedMessage id="banner.opt7" /></div>
                            </div>
                            <div className='option-item'>
                                <div className='option-icon'><i className="fas fa-notes-medical"></i></div>
                                <div className='option-title'><FormattedMessage id="banner.opt8" /></div>
                            </div>

                        </div>
                    </div>


                </div>
            </>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (lang) => dispatch(changeLanguageApp(lang)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
