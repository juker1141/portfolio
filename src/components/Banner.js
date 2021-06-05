import React from 'react';

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center py-48 items-center">
        <div className="flex flex-col items-center w-2/3 italic">
          <div className="w-2/3 backdrop-filter backdrop-filter backdrop-brightness-50 py-16 px-12 text-white">
            <div className="text-6xl text-center font-black mb-10">Front-end Developer</div>
            <div className="flex justify-center text-xl">
              喜歡寫程式，將想像變為現實<br />
              對未知的事物感到好奇，並嘗試不同的思考方式來解決問題
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;