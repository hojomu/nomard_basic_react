import { useState , useEffect } from "react";

function App() {
  
  const [loading , setLoading] = useState(true);

  const getVideos = async () => {
    const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=kr&key=AIzaSyCKtokkvXUMxJKSe9r7zsuHvRQCAfHJlIc`
      );
    const data = await response.json();
    console.log(data);
    setLoading(false);
  }

  useEffect(() => {
    getVideos();
  },[])

  return (
    <div>
      {loading ? (<h2>Loading</h2>) : null }
    </div>
  );
}

export default App;
