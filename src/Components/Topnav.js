import React, { useState } from 'react'
import './Topnav.css'


function Topnav() {
    const [showSidebar , setshowSidebar] = useState(false)


    function toggleHandle (){
        setshowSidebar(showSidebar => !showSidebar)
    }

    let toggleProfile = showSidebar ? '-active' : ''


  return (
    <div className='topnav-wrapper'>
        <div className='search-wrapper'></div>
        <div className='profile-wrapper' onClick={toggleHandle}>
            <div className='profile-content-wrapper'>
                <div className='profile-image-wrapper'>
                    <div className='image-wrapper-circle'></div>
                </div>
                <div className='profile-name-wrapper'>
                    <div className='profile-name'>keilsun alcantara</div>
                    <div className='profile-title'>title</div>
                </div>
            </div>   
        </div>
        <div className={`Profile-sidebar${toggleProfile}`}>profile content</div>
        
    </div>
    
  )
}

export default Topnav