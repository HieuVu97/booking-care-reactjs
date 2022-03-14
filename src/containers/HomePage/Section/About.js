import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
class About extends Component {
    render() {

        return (
            <>
                <div className='section-about'>
                    <div className='about-container'>
                        <div className='about-header'>
                            About us
                        </div>
                        <div className='about-content'>
                            <div className='about-content-left'>
                                <iframe
                                    width="100%"
                                    height="350px"
                                    src="https://www.youtube.com/embed/FyDQljKtWnI"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                                </iframe>
                            </div>
                            <div className='about-content-right'>

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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
