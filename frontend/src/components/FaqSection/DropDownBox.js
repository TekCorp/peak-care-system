import React,{useState} from 'react'

function DropDownBox(props) {
    const [dropOpen , setDropOpen] = useState(false)
  return (
    <div
      className={`dropdown-box container mb-4 px-0 ${dropOpen && "dropdown-box-active"}`}
      onClick={() => {
        setDropOpen((prev) => {
          return !prev;
        });
      }}
      
    >
      <div className={`box-head ${dropOpen && "box-head-active"} d-flex align-items-center justify-content-between gap-3  `}>
        <h5 className={`secondary-body-heading mb-0 ${dropOpen && "color-white"} `} >{props.title}</h5>
        <div style={{minWidth:"40px"}}>
          <img src={!dropOpen?'/images/icons/dropdown-less-icon.png':"/images/icons/dropdown-minus-icon.png"} className={`eye-icon ${dropOpen && "invertedEye"}`} alt='dropdown-icon'/>
        </div>
      </div>
      <div className={`box-content  slide ${dropOpen?"slide-in-cus py-3":"slide-out-cus"}`}>
        <div className='mb-0' dangerouslySetInnerHTML={{__html:props.content}}></div>
      </div>
      
    </div>
  );
}

export default DropDownBox