import React, { useState, useEffect } from 'react';
import fetchSocialMediaMetrics from './APIService';
import Card from './Card';
import { FaUsers, FaHeart, FaFileAlt, FaComment } from 'react-icons/fa'; // Icons for visual appeal

const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    followers: 0,
    likes: 0,
    posts: 0,
    comments: 0,
    username: '',
    profilePic: '',
  });
  const fetchData = async () => {
    const newMetrics = await fetchSocialMediaMetrics();
    setMetrics(newMetrics);
  };

  // Fetch the data from the API on component mount
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSocialMediaMetrics();
      setMetrics(data);
    };

    fetchData();
  }, []); // Empty dependency array means this only runs once when the component mounts

  return (
    <div className="dashboard">
      <h1>Social Media Dashboard</h1>
      
      {/* Display the profile picture and username */}
      <div className="user-info">
        <img src={metrics.profilePic} alt="Profile" className="profile-pic" />
        <h2>{metrics.username}</h2>

      </div>

      <div className="cards">
        <Card title="Followers" value={metrics.followers} icon={<FaUsers />} />
        <Card title="Likes" value={metrics.likes} icon={<FaHeart />} />
        <Card title="Posts" value={metrics.posts} icon={<FaFileAlt />} />
        <Card title="Comments" value={metrics.comments} icon={<FaComment />} />
      </div>
      <button onClick={fetchData} className="refresh-button">Refresh Data</button>

    </div>
  );
};

export default Dashboard;
