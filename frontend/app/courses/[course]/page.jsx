"use client";
import DownloadButton from "@/app/components/DownloadButton";
import React, { useEffect, useState } from "react";

const videos = [
  {
    id: 1,
    title: "Lecture 1",
    src: "https://www.youtube.com/embed/AovUY4OqyNM",
    slideUrl:
      "https://drive.google.com/file/d/1r6mVeVs4uk0u6_Z2Ls8sF2Bk-2rCAstr/view?usp=sharing",
  },
  {
    id: 2,
    title: "Lecture 2",
    src: "https://www.youtube.com/embed/z-4ZnPffbvc",
    slideUrl:
      "https://drive.google.com/file/d/1uCNavikjGzmA9kZUUTJcQ_dTkbcVFkia/view?usp=drive_link",
  },
  // Add more videos as needed
];

const VideoSidebar = ({ onSelectVideo, isOpen }) => {
  const [currentVid, setCurrentVid] = useState(videos[0]);
  const [scroll, setIsScroll] = useState(false);

  const selectVidIndex = (video) => {
    setCurrentVid(video);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Set a threshold of 84px
      const threshold = 84;

      // Toggle the class based on scroll position
      setIsScroll(scrollY >= threshold);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`rounded-xl md:w-1/4 bg-white dark:bg-gray-700 h-[100vh] overflow-y-auto  ${
        scroll ? "sticky right-5 top-0" : ""
      }`}
    >
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4 border-b-2 pb-2">Lectures</h2>
        <ul>
          {videos.map((video) => (
            <li
              key={video.id}
              className={`cursor-pointer p-2 rounded-md last:border-none transition-all duration-200 mb-2 ${
                currentVid.id === video.id ? "bg-gray-300" : ""
              }`}
              onClick={() => {
                onSelectVideo(video);
                selectVidIndex(video);
              }}
            >
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
    <div className="md:flex-1 bg-gray-300 rounded-3xl p-5 min-h-[300px] h-[500px] shadow-md">
      <iframe
        className="w-3/4 mx-auto md:h-full min-h-[300px] rounded-2xl"
        src={videoSrc}
        frameBorder="0"
        allowFullScreen="allowFullScreen"
      ></iframe>
    </div>
  );
};

const IndexPage = ({ params }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const selectVideo = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div className="md:flex pt-5 mx-5 ">
      <div className="w-full md:w-3/4 md:mr-5">
        <VideoPlayer videoSrc={currentVideo.src} />
        <DownloadButton />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit magnam
          consequuntur deserunt non. Laborum fugiat dolorem ex suscipit iure
          dolor reiciendis veritatis enim, doloribus officia ad ut error
          repellendus mollitia autem necessitatibus fuga facilis obcaecati
          cumque nihil dolores est numquam. Suscipit excepturi reiciendis
          eligendi harum natus necessitatibus qui cum dignissimos? Ratione
          distinctio ipsam ad neque fuga natus placeat voluptatibus quod dolorem
          modi odio nobis accusamus, adipisci dignissimos illum nesciunt. Magnam
          nulla delectus sapiente ullam? Reprehenderit deserunt nam quam
          excepturi harum, debitis possimus. Illo, veniam? Facilis nostrum nemo
          nobis illum ullam consectetur mollitia qui officia voluptates, omnis
          natus a illo officiis animi, eveniet voluptas quam pariatur minima.
          Explicabo nam aliquid numquam, deleniti quas saepe cupiditate omnis,
          laboriosam inventore vitae nesciunt cum tenetur natus in earum
        </p>
      </div>

      <VideoSidebar onSelectVideo={selectVideo} isOpen={isOpen} />
    </div>
  );
};

export default IndexPage;
