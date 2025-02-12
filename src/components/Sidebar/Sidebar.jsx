/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import "./Sidebar.css";
import {assets} from "../../assets/assets" ;
import { Context } from '../../context/context';


const Sidebar = () => {

    const [extended , setExtended] = useState(false);
    const {onSent , prevPrompt , setRecentPrompt, newChat} = useContext(Context);

    const loadPrompt = async (prompt) => {
      setRecentPrompt(prompt);
         await onSent(prompt);
    }

  return (
    <div className='sidebar'>
      <div className="top">
        <div>
        <img className="menu" onClick={()=> setExtended(prev => !prev)} src={assets.menu_icon} alt="menu-image" />
        </div>
        <div onClick={() => newChat()} className="newchat">
            <img src={assets.plus_icon} alt="plus-icon" />
            {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? 
        <div className="recent">
        <p className="recent-title">Recent</p>
        {prevPrompt.map((item, index) => {
          return (
            <div onClick={() => loadPrompt(item)} key={index}  className="recent-entry">
            <img src={assets.message_icon} alt="messege-icon" />
            <p>{item.slice(0, 18)}...</p>
        </div>
          );
        })}
        
    </div> : null
        }
        
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="question-icon" />
           {extended ? <p>Help</p> : null} 
        </div>

        <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="history-icon" />
           {extended ? <p>Activity</p> : null} 
        </div>


        <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="setting-icon" />
            {extended && <p>Settings</p>}
        </div>


      </div>
    </div>
  )
}

export default Sidebar;
