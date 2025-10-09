import React, { useEffect, useRef } from "react";
import "./Modal.css";

export default function Modal(props) {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        contentRef.current &&
        !contentRef.current.contains(event.target)
      ) {
        if (props.closeModal) {
          props.closeModal();
        }
      }
    };

    if (props.status) {
      document.body.classList.add("active-modal");
      modalRef.current.style.opacity = "1";
      modalRef.current.style.visibility = "visible";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.classList.remove("active-modal");
      modalRef.current.style.opacity = "0";
      modalRef.current.style.visibility = "hidden";
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props.status, props.closeModal]);

  return (
    <div
      className={`modal-container ${props.status ? "show" : ""}`}
      ref={modalRef}
    >
      <div
        className="overlay"
        onClick={() => {
          if (props.closeModal) props.closeModal();
        }}
      ></div>
      <div className="modal-main" ref={contentRef}>
        <div className="modal-content" style={{ maxWidth: "100%" }}>
          {props.children}
        </div>
      </div>
    </div>
  );
}
