import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

class MedicalFacility extends Component {

    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,

        };
        return (
            <>
                <div className='section-share section-facility'>
                    <div className='section-container'>
                        <div className='section-header'>
                            <span className='section-title'>Cơ sở y tế nổi bật</span>
                            <a className='btn-expand'>Xem thêm</a>
                        </div>
                        <div className='section-content'>
                            <Slider {...settings}>
                                <div className='section-item'>
                                    <div className='section-img section-facility' />
                                    <div className='section-sub-title'> Bệnh viện 1</div>
                                </div>
                                <div className='section-item'>
                                    <div className='section-img section-facility' />
                                    <div className='section-sub-title'> Bệnh viện 2</div>
                                </div>
                                <div className='section-item'>
                                    <div className='section-img section-facility' />
                                    <div className='section-sub-title'> Bệnh viện 3</div>
                                </div>
                                <div className='section-item'>
                                    <div className='section-img section-facility' />
                                    <div className='section-sub-title'> Bệnh viện 4</div>
                                </div>
                                <div className='section-item'>
                                    <div className='section-img section-facility' />
                                    <div className='section-sub-title'> Bệnh viện 5</div>
                                </div>
                                <div className='section-item'>
                                    <div className='section-img section-facility' />
                                    <div className='section-sub-title'> Bệnh viện 6</div>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
