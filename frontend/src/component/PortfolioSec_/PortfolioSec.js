import React, { useState } from "react";
import { Data } from "./data";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./PortfolioSec.module.css";
import PopupGallery from "./PopupGallery";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

let CurrentImgUrl = null;

const PortfolioSec = ({
  portfolioTextReq = true,
  paddingBottom,
  paddingTop,
}) => {
  const [id, setId] = useState("1");
  const [existingId, setExistingId] = useState(null);

  const [showPopup, setShowPopup] = useState(false);

  const ClickImageHandler = (imgUrl, val) => {
    setExistingId(val);
    CurrentImgUrl = imgUrl;
    setShowPopup(true);
  };

  return (
    <div
      style={{ paddingBottom: paddingBottom, paddingTop: paddingTop }}
      className={styles.main}
    >
      <Container
        style={{ padding: "0px" }}
        className="d-flex justify-content-center align-items-center flex-column"
        fluid
      >
        <Container>
          {portfolioTextReq && (
            <h1 className="heading_capital">
              Recent <span style={{ fontWeight: "900" }}>Work</span>
            </h1>
          )}
          <div className={styles.buttonCont}>
            <Swiper
              autoplay={{
                delay: 2200,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1200: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 4,
                  spaceBetween: 25,
                },
                778: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
              }}
            >
              {Data.map((item) => (
                <SwiperSlide className={styles.swiperSlide}>
                  <button
                    onClick={() => setId(item.id)}
                    className={
                      item.id === id ? styles.buttonActive : styles.button
                    }
                  >
                    {item.heading}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
        <div className={styles.box}>
          {Data.map(
            (item) =>
              item.id === id && (
                <>
                  <div className={styles.galleryCont}>
                    <Row className={`${styles.gallery} gy-lg-4`}>
                      {item.list.map((element) => (
                        <Col lg={4} className={styles.imgCont}>
                          <img
                            onClick={() =>
                              ClickImageHandler(element.img, element.id)
                            }
                            className="img-fluid gallery-img w-100 p-0 m-0"
                            src={element.img}
                            alt='icon'
                          />
                        </Col>
                      ))}
                    </Row>
                  </div>
                  {showPopup && (
                    <PopupGallery
                      imagesArr={item.list?.filter(
                        (val) => val.id !== existingId
                      )}
                      img={CurrentImgUrl}
                      setClosePopup={setShowPopup}
                    />
                  )}
                </>
              )
          )}
        </div>
      </Container>
    </div>
  );
};

export default PortfolioSec;
