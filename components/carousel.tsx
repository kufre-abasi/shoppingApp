import React, { useState, useEffect } from "react";

const stories = [
  {
    id: 1,
    username: "user1",
    imageUrl: "/images/image.svg",
  },
  {
    id: 2,
    username: "user2",
    imageUrl: "/images/Frame 1000009300.png",
  },
  {
    id: 3,
    username: "user3",
    imageUrl: "/images/Frame 1000009299 (1).png",
  },
];

const StorySlider = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStoryIndex((prevIndex) =>
        prevIndex === stories.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center  text-center  items-center ">
      <div
        className="relative w-[50vh] h-[50vh] flex justify-center  items-center "
        style={{}}
      >
        {stories.map((story, index) => (
          // <div></div>
          <img
            key={story.id}
            src={story.imageUrl}
            alt={story.username}
            className={`absolute inset-0 object-cover flex justify-center  w-[70vh] h-[70vh] rounded-xl transition-opacity duration-400 ${
              index === currentStoryIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {stories.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 bg-white rounded-full ${
                index === currentStoryIndex ? 'bg-white' : ''
              }`}
              onClick={() => setCurrentStoryIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Carousel() {
  return (
    <div>
      <StorySlider />
    </div>
  );
}
