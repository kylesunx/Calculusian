import React, { useState } from 'react'
import './Forum.css'

function Forum() {
  const [forumCard, setForumCard] = useState(false)


  function toggleForumCard (){
    setForumCard (forumCard  => !forumCard)
  }
  let forumToggle = forumCard ? '-active' : '' 


  return (
    <div className='main-wrapper-forum'>
      <div className='share-thoughts-container'>create</div>
      <div className='shared-thoughts-container'>posted
        <div className='forum-cards' onClick={toggleForumCard}>
          cards
        </div>
        <div className={`forum-comment${forumToggle}`}>comment</div>
      </div>

    </div>
  )
}

export default Forum