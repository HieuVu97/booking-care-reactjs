import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
class GoodDoctor extends Component {

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
                <div className='section-share section-doctor'>
                    <div className='section-container'>
                        <div className='section-header'>
                            <span className='section-title'>Bác sĩ nổi bật tuần qua</span>
                            <a className='btn-expand'>Xem thêm</a>
                        </div>
                        <div className='section-content'>
                            <Slider {...settings}>
                                <div className='section-item custom'>
                                    <div className='custom-border'>
                                        <div className='section-img section-doctor' />
                                        <div className='section-sub-title text-center'>
                                            <div className=' degree-name-title'> Giáo sư ABC</div>
                                            <div className=' specialty-title'> Da liễu</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-item custom'>
                                    <div className='custom-border'>
                                        <div className='section-img section-doctor' />
                                        <div className='section-sub-title text-center'>
                                            <div className=' degree-name-title'> Giáo sư ABC</div>
                                            <div className=' specialty-title'> Da liễu</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-item custom'>
                                    <div className='custom-border'>
                                        <div className='section-img section-doctor' />
                                        <div className='section-sub-title text-center'>
                                            <div className=' degree-name-title'> Giáo sư ABC</div>
                                            <div className=' specialty-title'> Da liễu</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-item custom'>
                                    <div className='custom-border'>
                                        <div className='section-img section-doctor' />
                                        <div className='section-sub-title text-center'>
                                            <div className=' degree-name-title'> Giáo sư ABC</div>
                                            <div className=' specialty-title'> Da liễu</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-item custom'>
                                    <div className='custom-border'>
                                        <div className='section-img section-doctor' />
                                        <div className='section-sub-title text-center'>
                                            <div className=' degree-name-title'> Giáo sư ABC</div>
                                            <div className=' specialty-title'> Da liễu</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-item custom'>
                                    <div className='custom-border'>
                                        <div className='section-img section-doctor' />
                                        <div className='section-sub-title text-center'>
                                            <div className=' degree-name-title'> Giáo sư ABC</div>
                                            <div className=' specialty-title'> Da liễu</div>
                                        </div>
                                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(GoodDoctor);
