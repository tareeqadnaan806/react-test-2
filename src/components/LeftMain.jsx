import React from 'react'
import photo from '../assests/photo.jpg'

const LeftMain = () => {
  return (
    <div className='left-main flex justify-center items-center'>
      <div>
        <div className='flex justify-center items-center'>
          <img
            src={photo}
            alt='Image'
            width={100}
            height={0}
            className='left-image'
          />
        </div>
        <h1>Mohammed Tareeq Adnaan</h1>
        <h2>Software Developer</h2>
        <hr />
        <h2>Age: 23 years old</h2>
        <h2>Location: Hyderabad, India</h2>
        <div>
          <span>
            <a href=''>
              <i class='fa-brands fa-github'></i>
            </a>
          </span>
          <span>
            <a href=''>
              <i class='fa-brands fa-linkedin'></i>
            </a>
          </span>
          <span>
            <a href=''>
              <i class='fa-brands fa-instagram'></i>
            </a>
          </span>
          <span>
            <a href=''>
              <i class='fa-brands fa-twitter'></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default LeftMain
