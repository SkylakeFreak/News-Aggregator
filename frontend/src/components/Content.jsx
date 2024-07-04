import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Url from '../Url';
import './style.scss';
import '../index.css';

function Content({ currentuser, currentemail }) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await axios.get(`${Url.newsUrl}/newsData`, {
        params: { email: currentemail },
      });
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="me" className="flex flex-col h-screen">
      <p className="font-bold text-3xl mt-2 flex justify-center">
        {currentuser} Current Uploaded Data
      </p>
      <p className="text-xl mt-10 text-center">
        Welcome {currentemail}
      </p>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="p-5 h-[500px] max-w-[1000px] overflow-y-scroll mr-4 ml-4 mb-4">
          {data.length > 0 ? (
            data.map((newsItem, index) => (
              <div className="outline outline-2 mb-3 p-4 rounded-lg bg-white shadow-md" key={index}>
                <h2 className="font-bold text-2xl mb-2">{newsItem.Title}</h2>
                <p className="text-gray-600 mb-2">Owner: {newsItem.Owner}</p>
                <p className="text-gray-600 mb-2">Date: {newsItem.Date}</p>
                <img
                  src={newsItem.imgUrl}
                  alt={newsItem.Title}
                  className="w-full h-64 object-cover mb-4 rounded-lg"
                />
                <p className="text-gray-800 mb-4">{newsItem.Content}</p>
                <div className="flex justify-between">
                  <span className="text-green-600">Likes: {newsItem.Like}</span>
                  <span className="text-red-600">Reports: {newsItem.Reported}</span>
                  <span className="text-blue-600">Approved: {newsItem.Approved ? "Yes" : "No"}</span>
                </div>
              </div>
            ))
          ) : (
            <p>No news data available.</p>
          )}
        </div>
        <button
          onClick={() => {
            navigate("/NewsData");
            window.scrollTo(0, 0);
          }}
          className="bg-gray-500 text-white p-2 rounded-md hover:bg-black mt-4"
        >
          Request to Upload New Post
        </button>
      </div>
    </div>
  );
}

export default Content;
