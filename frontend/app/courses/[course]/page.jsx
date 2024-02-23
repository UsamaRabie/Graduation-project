"use client";
import DownloadButton from "@/app/components/DownloadButton";
import { Button, Spinner } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faLeftLong } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import Spin from "@/app/components/Spin";

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
  {
    id: 3,
    title: "Lecture 3",
    src: "https://www.youtube.com/embed/z-4ZnPffbvc",
    slideUrl:
      "https://drive.google.com/file/d/1uCNavikjGzmA9kZUUTJcQ_dTkbcVFkia/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Lecture 4",
    src: "https://www.youtube.com/embed/z-4ZnPffbvc",
    slideUrl:
      "https://drive.google.com/file/d/1uCNavikjGzmA9kZUUTJcQ_dTkbcVFkia/view?usp=drive_link",
  },
  {
    id: 5,
    title: "Lecture 5",
    src: "https://www.youtube.com/embed/z-4ZnPffbvc",
    slideUrl:
      "https://drive.google.com/file/d/1uCNavikjGzmA9kZUUTJcQ_dTkbcVFkia/view?usp=drive_link",
  },
];

const VideoSidebar = ({ onSelectVideo, isOpen, toggleSidebar }) => {
  const [currentVid, setCurrentVid] = useState(videos[0]);
  const [scroll, setIsScroll] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleDisappear = () => {
    isOpen === true ? setIsVisible(true) : setIsVisible(false);
  };

  const selectVidIndex = (video, toggleSidebar) => {
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
      className={`rounded-xl md:w-1/4 bg-white dark:bg-gray-800 h-[100vh] overflow-y-auto
      ${scroll ? "sticky top-0 right-0" : ""}
    ${
      isVisible
        ? "animate__animated animate__bounceInRight"
        : "animate__animated animate__fadeOutRight"
    }
    `}
    >
      <div className="p-4">
        <div className="flex mb-4 border-b-2 pb-2 items-center">
          <h2 className="text-lg font-bold ">Lectures</h2>

          <Button
            id="x"
            onClick={() => {
              handleDisappear();
              toggleSidebar();
            }}
            className="text-md ml-auto hidden  rounded-full md:flex justify-center items-center bg-indigo-500 dark:bg-red-600 w-3 h-3 p-3.5 dark:hover:bg-red-700 transition-all duration-300 hover:rotate-180"
          >
            <FontAwesomeIcon icon={faXmark} />
          </Button>
        </div>
        <div className="flex flex-col">
          {videos.map((video) => (
            <Button
              key={video.id}
              className={`bg-gray-200 text-black cursor-pointer p-2 dark:text-white rounded-xl last:border-none transition-all duration-200 mb-6 ${
                currentVid.id === video.id
                  ? "bg-indigo-500 text-white dark:bg-slate-900 "
                  : "dark:bg-slate-500"
              }`}
              onClick={() => {
                onSelectVideo(video);
                selectVidIndex(video);
              }}
            >
              {video.title}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

const VideoPlayer = ({ videoSrc }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    const handleIframeLoad = () => {
      setIframeLoaded(true);
    };
    const iframe = document.querySelector("iframe");
    if (iframe && iframe.contentWindow) {
      setIframeLoaded(true);
    }
    window.addEventListener("message", handleIframeLoad);

    return () => {
      window.removeEventListener("message", handleIframeLoad);
    };
  }, []);

  return (
    <div className="animate__animated animate__backInDown   bg-gray-300  shadow-lg flex justify-center items-center md:flex-1 md:min-h-[500px] md:h-[700px] dark:bg-gray-700">
      {!iframeLoaded && <Spin />}

      <iframe
        className={` mx-auto min-w-[370px] h-[320px] md:h-full md:w-3/4 animate__animated animate__fadeIn ${
          iframeLoaded ? "" : "hidden"
        }`}
        src={videoSrc}
        allowFullScreen="allowFullScreen"
      ></iframe>
    </div>
  );
};

const IndexPage = () => {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const selectVideo = (video) => {
    setCurrentVideo(video);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [courseContent , setCourseContent]=useState(false)

  const [isHovered, setIsHovered] = useState(true);

  return (
    <div className="md:flex pt-5 mx-5 overflow-x-hidden ">
      <div
        className={`transition-all duration-200 ${
          isSidebarOpen ? `w-full md:w-3/4 md:mr-5` : `w-full`
        } `}
      >
        <VideoPlayer videoSrc={currentVideo.src} />
        <DownloadButton fileUrl={currentVideo.slideUrl} />

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
        <button
          onClick={toggleSidebar}
          onMouseEnter={() => {
            setIsHovered(true);
            setCourseContent(true);
          }}
          onMouseLeave={() => {
          
            setCourseContent(false);
          }}
          className={`${
            isSidebarOpen ? "hidden" : "hidden md:block"
          } absolute top-[200px] right-5 p-4 bg-indigo-500 dark:bg-slate-800 text-white ${isHovered ? "animate__animated animate__fadeInRight" : ""} `}
        >
          <FontAwesomeIcon icon={faLeftLong} />
          <span  className={`${courseContent?"inline-block":"hidden"} mx-3 ${isHovered ? "animate__animated animate__fadeInRight" : "animate__animated animate__fadeOutRight"} `}>Course content</span>
        </button>
      </div>
      {isSidebarOpen && (
        <VideoSidebar
          onSelectVideo={selectVideo}
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      )}
    </div>
  );
};

export default IndexPage;
