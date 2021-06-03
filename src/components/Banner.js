import React from 'react';

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center my-24 items-center">
        <div className="flex flex-col w-1/3 italic">
          <div className="text-xl">Here's</div>
          <div className="text-7xl text-center font-black mb-10">Ryu</div>
          <div className="flex justify-center">
            喜歡寫程式，將想像變為現實<br />
            對未知的事物感到好奇，並嘗試不同的思考方式來解決問題
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;