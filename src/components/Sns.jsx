import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import BookIcon from '@mui/icons-material/Book';

const sns = () => {
  return (
    <>
      <ul 
      className='fixed right-0 inset-y-2/4 w-10 bg-gray-200/30 backdrop-blur-lg h-36 border border-gray-200/30 shadow-lg z-10'
        >
        <li className='flex justify-center items-center'>
          <a href="https://twitter.com/takaki_web">
            <TwitterIcon  style={{ fontSize: "2rem" }} className=' text-black'/>
          </a>
        </li>
        <li className='mt-5 flex justify-center items-center'>
          <a href="https://github.com/tkg-reis">
            <GitHubIcon  style={{ fontSize: "2rem" }} className='text-black'/>
          </a>
        </li>
        <li className='mt-5 flex justify-center items-center'>
          <a href="https://takaki-masataka-web02.work/news">
            <BookIcon  style={{ fontSize: "2rem" }} className='text-black'/>
          </a>
        </li>
      </ul>
    </>
  )
}

export default sns