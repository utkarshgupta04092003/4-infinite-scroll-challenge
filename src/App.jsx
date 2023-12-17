import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from './components/Image';
import Header from './components/Header';
// import process.env.REACT_APP_UNPLASH_ACCESS_KEY from ;
import { REACT_APP_UNPLASH_ACCESS_KEY } from '../utils';


export default function App() {

  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const delay = 2000;


  const fetchData = async ()=>{


    setTimeout(async () => {
      
      // Go to unsplash.com, register yourself as a developer, then create a app and copy the access key 
      // Now create a utils.js file parallel to package.json and save you access key there as a const variable REACT_APP_UNPLASH_ACCESS_KEY
      let response = await fetch(`https://api.unsplash.com/photos/?client_id=${REACT_APP_UNPLASH_ACCESS_KEY}&per_page=30`, { 
        method: "GET",
      });
      
      let data = await response.json();
      console.log(data);
      setItems((prevItems)=>{
        return prevItems.concat(data);
      });
      
    }, delay);
  }
  useEffect(() => {
    
    fetchData();
  },[]);


  return (
    <div>

      <Header count={items.length}/>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h4 className='font-bold text-2xl text-center mb-5'>Loading...</h4>}

        
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all.</b>
          </p>
        }
      >
        <div className=' flex flex-wrap justify-center mt-12'>

          {items.map((item, index) => (

            <Image key={index} image={item.urls.small} />
            // <div key={index}
            //   className=' h-[50px] m-2 border border-green-500 flex justify-center items-center'>
            //   div - #{index} - {item.id}
            // </div>
            ))}
          </div>

      </InfiniteScroll>

    </div>
  )
}
