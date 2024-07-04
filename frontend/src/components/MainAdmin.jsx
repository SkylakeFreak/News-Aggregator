import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.scss';
import Url from '../Url';
import toast, { Toaster } from 'react-hot-toast';

function MainAdmin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [data, setData] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  const isAdminFunc = async () => {
    const token = localStorage.getItem('token');
    console.log(token)
    try {
      const response = await axios.post(`${Url.userUrl}/login/admin`, {}, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      console.log(response);
      if (response.status === 200) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } catch (error) {
      console.log("Error Message")
      console.error(error);
      setIsAdmin(false);
    }
  };

  const getData = async () => {
    try {
      const response = await axios.get(`${Url.newsUrl}/admin/news`);
      setData(response.data); // Set data received from API response
      console.log(data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    isAdminFunc();
  }, []);

  useEffect(() => {
    if (isAdmin) {
      getData();
    }
  },[isAdmin]);

  const handleTileClick = (element) => {
    setSelectedElement(element);
  };

  const handleCloseModal = () => {
    setSelectedElement(null);
  };

  const handleApprove = async () => {
    try {
      await axios.post(`${Url.newsUrl}/admin/approve`, { id: selectedElement._id });
      toast.success("Article Approved");
      setSelectedElement(null);
      getData(); // Refresh the data after approval
    } catch (error) {
      console.error("Error approving article", error);
      toast.error("Error approving article");
    }
  };
  const handleDeny = async (element) => {
    setSelectedElement(element);
    if (!selectedElement) {
      console.error('No selected element to deny');
      return;
    }
  
    try {
      await axios.post(`${Url.newsUrl}/admin/deny`, { id: selectedElement._id });
      toast.success("Article Denied");
      setSelectedElement(null);
      getData(); // Refresh the data after denial
    } catch (error) {
      console.error("Error denying article", error);
      toast.error("Error denying article");
    }
  };
  

  const Tile = ({ element }) => (
    <div className='tile'>
      <div onClick={() => handleTileClick(element)}>
        <h2>{element.Title}</h2>
        <p>Sender: {element.Owner}</p>
        <span>{element.Date}</span>
      </div>
      {/* <button className='deny-button' onClick={() => handleDeny(element._id)}>Deny</button> */}
      <button className='deny' onClick={handleDeny}>Deny</button>

    </div>
  );

  const Modal = ({ element, onClose }) => (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close' onClick={onClose}>&#10006;</span>
        <h2>{element.Title}</h2>
        <p>{element.Date}</p>
        <img src={element.imgUrl} alt={element.Title} />
        <p className='content'>{element.Content}</p>
        <div>
          <button className='approve' onClick={handleApprove}>Approve</button>
          {/* <button className='deny' onClick={() => handleDeny(element._id)}>Deny</button> */}
          <button className='deny' onClick={handleDeny}>Deny</button>

        </div>
      </div>
    </div>
  );

  return (
    <>
      <Toaster />
      {isAdmin ? (
        <div className='admin-panel'>
          <h1>Admin Panel</h1>
          <div className='tiles'>
            {data.map((element, index) => (
              <Tile key={index} element={element} />
            ))}
          </div>
          {selectedElement && (
            <Modal element={selectedElement} onClose={handleCloseModal} />
          )}
        </div>
      ) : (
        <div id="me" className='h-screen text-3xl flex justify-center items-center text-white'>
          <p>Not Authorized</p>
        </div>
      )}
    </>
  );
}

export default MainAdmin;