import React from 'react';
import Popup from './Popup';
import $ from 'jquery';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import './PopupGallery.css'
import { Container } from 'react-bootstrap';
SwiperCore.use([ Pagination]);

const PopupGallery = ({setClosePopup, img, imagesArr}) => {
  const PopupCloseHandler = () => {
    setClosePopup(false)
    $('html').removeClass('rs_popup_open');
  }

  return (
    <Popup className='popup-img' autoOpen={true} width="auto" onClose={PopupCloseHandler}>
        <Swiper  slidesPerView={1} >
          <SwiperSlide>
            <img src={img} className='img-fluid ps-0 p-0 m-0' alt='icon'/>
          </SwiperSlide>
          {imagesArr.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.img} className='img-fluid ps-0 p-0 m-0' alt='icon'/>
            </SwiperSlide>
          ))}
        </Swiper>
    </Popup>
  )
}

export default PopupGallery;