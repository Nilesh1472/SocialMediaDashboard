import axios from 'axios';

// Fetch data from the Random User Generator API (just an example)
const fetchSocialMediaMetrics = async () => {
  try {
    // Using a random user API as a stand-in for social media data
    const response = await axios.get('https://randomuser.me/api/');
    
    // Process the random user data to simulate social media metrics
    const user = response.data.results[0];
    const metrics = {
      followers: Math.floor(Math.random() * 10000) + 1000,  // Random followers count
      likes: Math.floor(Math.random() * 5000) + 1000,       // Random likes count
      posts: Math.floor(Math.random() * 100) + 20,          // Random posts count
      comments: Math.floor(Math.random() * 500) + 50,       // Random comments count
      username: user.login.username,
      profilePic: user.picture.large,
    };

    return metrics;
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      followers: 12000,
      likes: 23000,
      posts: 500,
      comments: 3500,
      username: 'DemoUser',
      profilePic: 'https://randomuser.me/api/portraits/men/90.jpg',
    };
  }
};

export default fetchSocialMediaMetrics;
