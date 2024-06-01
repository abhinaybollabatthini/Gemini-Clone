/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import "./MainPage.css";
import {assets} from "../../assets/assets" ;
import { Context } from '../../context/context';

const MainPage = () => {

  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <div>
        <img src={assets.user_icon} alt="user-icon-img" />
        </div>
      </div>
      <div className="main-container">

     {showResult ? <div className='result'>
      <div className="result-title">
        <img src={assets.user_icon} alt="user-icon" />
        <p>{recentPrompt}</p>
      </div>
      <div className="result-data">
        <img src={assets.gemini_icon} alt="gemini-icon" />
        {loading ? 
        <div className='loader'>
          <hr />
          <hr />
          <hr />
        </div> : 
         <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
        
      </div>
     </div> :
          <>
          <div className="greeting">
          <p className='greet'>Hello, Dev</p>
          <p>How can i help you today ?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places for an upcoming road trip.</p>
            <img src={assets.compass_icon} alt="compass-icon" />
          </div>
          <div className="card">
            <p>Summerize this concept : Global Warming</p>
            <img src={assets.bulb_icon} alt="bulb-icon" />
          </div>
          <div className="card">
            <p>Bonding activities for our work team</p>
            <img src={assets.message_icon} alt="messege-icon" />
          </div>
          <div className="card">
            <p>improve the reliablity of following code</p>
            <img src={assets.code_icon} alt="code-icon" />
          </div>
        </div>
          </>
      }

        
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
            <div>
              <img src={assets.gallery_icon} alt="gallery-icon" />
              <img src={assets.mic_icon}alt="mic-icon" />
              {input && <img onClick={() => onSent()} src={assets.send_icon} alt="send-icon" />}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, hence double check its responses. Your privacy and Gemini Apps.
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default MainPage;
