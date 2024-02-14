import React from 'react';

function Page({ params }) {
  return (
    <div>
      <h1 className='text-center font-semibold text-3xl my-5'>{params.course}</h1>

      <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-[380px] h-[260px]  md:w-[560px] md:h-[320px] mx-auto"
            src="https://www.youtube.com/embed/AovUY4OqyNM"
            frameborder="0"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
    </div>
  );
}

export default Page;
