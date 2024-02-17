"use client"
import DownloadButton from '@/app/components/DownloadButton';
import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
const videos = [
  {
    id: 1,
    title: 'Lecture 1',
    src: 'https://www.youtube.com/embed/AovUY4OqyNM',
    slideUrl:"https://drive.google.com/file/d/1r6mVeVs4uk0u6_Z2Ls8sF2Bk-2rCAstr/view?usp=sharing"
  },
  {
    id: 2,
    title: 'Lecture 2',
    src: 'https://www.youtube.com/embed/z-4ZnPffbvc',
    slideUrl:"https://drive.google.com/file/d/1uCNavikjGzmA9kZUUTJcQ_dTkbcVFkia/view?usp=drive_link"
  },
  // Add more videos as needed
];
const VideoSidebar = ({ onSelectVideo, isOpen }) => {
  return (
    <div className={`md:w-1/4  bg-white  dark:bg-gray-700 h-screen overflow-y-auto transition-all duration-700 ease-in-out ${isOpen ? 'block' : 'hidden'} `}>
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Lectures</h2>
      <ul>
        {videos.map((video) => (
          <li key={video.id} className="cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800 p-2 rounded-md" onClick={() => onSelectVideo(video)}>
            {video.title}
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
};

const VideoPlayer = ({ videoSrc }) => {
  return (
    <div className="md:flex-1">
      <iframe className="w-full md:h-screen min-h-[300px]" src={videoSrc} frameBorder="0" allowFullScreen="allowFullScreen"></iframe>
    </div>
  );
};

const IndexPage = ({params}) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const selectVideo = (video) => {
    setCurrentVideo(video);
    if (isOpen) {
      setIsOpen(false); // Close the sidebar when a video is selected on small screens
    }
  };

  return (
    <>
          <h2 className='text-center text-3xl my-3 font-semibold'>{params.course.replace(/%20/g, " ")}</h2>

    <div className="md:flex">
      <VideoPlayer videoSrc={currentVideo.src} />
      <div >
        <button className="p-2" onClick={toggleSidebar}>
           <IoMdMenu className="h-6 w-6" />
        </button>
      </div>
      <VideoSidebar onSelectVideo={selectVideo} isOpen={isOpen} />
    </div>

    <DownloadButton fileUrl={currentVideo.slideUrl} />
      </>
  );
};

export default IndexPage;