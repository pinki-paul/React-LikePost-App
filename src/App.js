import React, { useState } from 'react';
import postImg from './images/image.jpg';
import { FaRegUserCircle, FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { LuShare2 } from 'react-icons/lu';


function App() {

  const [count, setCount] = useState(0);
  const [like, setLike] = useState(false);

  //handle Likes
  const handleLikes = () => {
    if (!like) {
      setLike(true);
      setCount( count + 1);
    } else {
      setLike(false);
      setCount(0);
    }
  }

  
  return (
    <div className="main-container">
      <h1>Post Like App</h1>
      <h4 className="likes">Total Likes: {count}</h4>
      <div className='card'>
        <div className='card-header' style={{color:"blueviolet", fontWeight:600}}>
          <FaRegUserCircle /> &nbsp; UserName
        </div>

        <img src={postImg} alt='post-img' onDoubleClick={handleLikes}/>

        <div className='card-footer'>
          {like ? <FaHeart
            size={25}
            style={{ color: "red", cursor: "pointer" }}
            onClick={handleLikes}
          /> :
            <FaRegHeart
              size={25}
              onClick={handleLikes}
              style={{ cursor: "pointer" }}
            />}

          &nbsp;
          <FaRegComment size={25} style={{ cursor: "pointer" }} />
          &nbsp;
          <LuShare2 size={25} style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
}

export default App;
