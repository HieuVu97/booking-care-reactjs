import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
class HomeFooter extends Component {
    render() {

        return (
            <>
                <div className='home-footer'>
                    <p>&copy; 2022 with <a target='_blank' href='https://www.facebook.com/hieuctv1502'>Hieu Vu</a></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
