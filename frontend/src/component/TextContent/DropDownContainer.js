import React,{useState} from 'react'

function DropDownContainer(props) {
    const [dropOpen , setDropOpen] = useState(false)
  return (
    <div
      className={`dropdown-box container my-3`}
      onClick={() => {
        setDropOpen((prev) => {
          return !prev;
        });
      }}
    >
      <div className="box-head d-flex align-items-center justify-content-between gap-3">
        <h5 className="title font-noto mb-0" style={dropOpen ? {color:"#729BC7"}:{color:"#575757"}}>{props.title}</h5>
        <img src={dropOpen ? '/images/icons/dropdown-open.svg':'/images/icons/dropdown-close.svg'}  className='eye-icon' alt='icon'/>
      </div>
      <div className="box-content my-3" style={dropOpen?{animation:"bottomBoxOpen .6s ease-in-out",display:"block"}:{display:"none"}}>
          <p className='body-paragraph mb-0 text-start'>{props.content}</p>
      </div>
    </div>
  );
}

export default DropDownContainer