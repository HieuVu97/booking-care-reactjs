import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
class Specialty extends Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,

        };
        return (
            <>
                <div className='section-share section-specialty'>
                    <div className='section-container'>
                        <div className='section-header'>
                            <span className='section-title'>Chuyên khoa phổ biến</span>
                            <a className='btn-expand'>Xem thêm</a>
                        </div>
                        <div className='section-content'>
                            <Slider {...settings}>
                                <div className='section-item'>
                                    <div className='section-img section-specialty' />
                                    <div className='section-sub-title'> Cơ xương khớp 1</div>
                                </div>
                                <div className='section-item'>
                                    <div className='section-img section-specialty' />
                                    <div className='section-sub-title'> Cơ xương khớp 2</div>
                                </div>
                                <div className='section-item'>
                                    <div className='section-img section-specialty' />
                                    <div className='section-sub-title'> Cơ xương khớp 3</div>
                                </div>
                                <div className='section-item'>
                                    <div className='section-img section-specialty' />
                                    <div className='section-sub-title'> Cơ xương khớp 4</div>
                                </div>
                                <div className='section-item'>
                                    <div className='section-img section-specialty' />
                                    <div className='section-sub-title'> Cơ xương khớp 4</div>
                                </div>
                                <div className='section-item'>
                                    <div className='section-img section-specialty' />
                                    <div className='section-sub-title'> Cơ xương khớp 4</div>
                                </div>
                            </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
