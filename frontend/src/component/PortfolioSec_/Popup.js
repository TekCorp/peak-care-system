import React, { useState, useEffect } from 'react';
import './Popup.css';
import './PopupGallery.css'
import $ from "jquery";

const Popup = ({ onClose, autoOpen = false, width, className, children }) => {
  const [isOpen, setIsOpen] = useState(autoOpen);

  useEffect(() => {
    $('html').addClass('rs_popup_open');
    return () => {
      $('html').removeClass('rs_popup_open');
    }
  }, []);

  useEffect(() => {
    setIsOpen(autoOpen);
  }, [autoOpen]);

  const onCloseHandler = () => {
    $('html').removeClass('rs_popup_open');
    setIsOpen(false);
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  const styleContents = {};
  if (width) {
    styleContents.width = width;
  }

  const closeIconUrl = '/images/icons/cross.svg';

  return (
    <div className={className ? 'rs_popup_section ' + className : 'rs_popup_section'}>
      <div className='rs_popup_section_bg' onClick={onCloseHandler}></div>
      <div className='popup_contents' style={styleContents}>
        {children}
      </div>
    </div>
  );
};

export default Popup;