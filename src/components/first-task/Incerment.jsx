import { useState, useEffect } from 'react';
import './style/style.css';


function increment(setCount, count ) {
  if (count < 10) {
    setCount(count + 1);
  } else if (count >= 10 && count < 100) {
    setCount(count + 10);
  } else if (count >= 100 && count < 1000) {
    setCount(count + 100);
  }
}


function decrement(setCount, count ) {
  if (count <= 1000 && count > 100) {
    setCount(count - 100);
  } else if (count <= 100 && count > 10) {
    setCount(count - 10);
  } else if (count > 0 && count <= 10) {
    setCount(count - 1);
  }
}


export default function Increment() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup1, setShowPopup1] = useState(true);
  const [changeBackground, setChangeBackground] = useState(false);

  useEffect(() => {
    if (count === 1000) {
      setCount1(true);
    }
  }, [count]);
  useEffect(() => {
    if(count === 10 || count === 100 || count === 1000){
      setShowPopup(true);
      setChangeBackground(true);
    }
    else{
      setChangeBackground(false);
    }  
  }, [count]);
  return (
    <div className={changeBackground ? "container2":"container"}>
      <div className="bottons">
      <p>{count}</p>
      <div className="btn">
      <button onClick={() => increment(setCount, count)}>Increment</button>
        {count1  && <button onClick={() => decrement(setCount, count)}>Decrement</button>}
      </div>
      </div>
      <div>
    {showPopup  && (
      <div className="popup">
        <p>Are You Sure You Want To Change The Number ?</p>
        <button onClick={()=>setShowPopup (false)}>Yes</button>
      </div>
    )}
    {showPopup1  && (
      <div className="popup">
        <p>Hello To Our Page</p>
        <button onClick={()=>setShowPopup1 (false)}>Countinue</button>
      </div>
    )}
  </div>
    </div>


  );
}


