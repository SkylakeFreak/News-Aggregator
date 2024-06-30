import React, { useEffect,useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios';
import './style.scss';

function Tile({ element, onClick }) {
  return (
    <div className='tile'>
      <div onClick={onClick}>
        <h2>{element.Title}</h2>
        <p>Sender: {element.Owner}</p>
        <span>{element.date}</span>
      </div>
      <button>Deny</button>
    </div>
  );
}

function Modal({ element, onClose }) {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close' onClick={onClose}>&#10006;</span>
        <h2>{element.Title}</h2>
        <span>Sender: {element.Owner}</span>
        <p>{element.date}</p>
        
        <img src={element.Imglink} alt="Image" />
        <p className='content'>{element.Content}</p>
        <div>
          <button className='Approve'>Approve</button>
          <button className='Deny'>Deny</button>
        </div>
      </div>
    </div>
  );
}

function MainAdmin() {
  const [data1,setdata1]=useState([])
  const [selectedElement, setSelectedElement] = useState(null);

  useEffect(()=>{
    getdata()
  },[])
  const getdata=async()=>{
    const response=await axios.post("http://localhost:3004/getadmindata")
    setdata1(response.data)
  }
  const handleTileClick = (element) => {
    setSelectedElement(element);
  };

  const handleCloseModal = () => {
    setSelectedElement(null);
  };

  return (
    <div className='AdminPanel'>
      <h1>Admin Panel</h1>
      <div className='tiles'>
        {data1.map((element, index) => (
          <Tile key={index} element={element} onClick={() => handleTileClick(element)} />
        ))}
      </div>
      {selectedElement && (
        <Modal element={selectedElement} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default MainAdmin