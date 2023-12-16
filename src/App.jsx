import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function App() {

  const [items, setItems] = useState(Array.from({ length: 30 }));
  const [hasMore, setHasMore] = useState(true);
  const count=60
  const fetchData = () => {

    if (items.length < count) {


      setTimeout(() => {
        setItems((prevItems) => {
          return prevItems.concat(Array.from({ length: 10 }))
        })

      }, 1000);

    }
    else 
      setHasMore(false);
  }

  return (
    <div>
      <h1 className='font-bold text-xl m-2'>Infinite scroll </h1>
      <p className='fixed top-0 right-0 font-bold text-xl m-2'>Box count: {items.length}</p>

      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}

        
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all and reached {count}</b>
          </p>
        }
      >
        {items.map((item, index) => (
          <div key={index}
            className=' h-[50px] m-2 border border-green-500 flex justify-center items-center'>
            div - #{index}
          </div>
        ))}

      </InfiniteScroll>

    </div>
  )
}
