import React from "react";
import Tilt from "react-parallax-tilt";
import { tradingData, tickerData, referralLinks } from "../../constants";

const Trading = () => {
  return (
    <section
      id="trading"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative z-10"
    >
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white uppercase">Finance & Trading</h2>
        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          Beyond development, I have a strong passion for the financial markets, analyzing charts, and trading across various segments.
        </p>
      </div>

      {/* Stock Ticker Marquee */}
      <div className="w-full overflow-hidden bg-[#0d0a20]/80 border-y border-purple-900/50 py-3 mb-16 backdrop-blur-sm shadow-[0_0_15px_rgba(130,69,236,0.1)] flex relative">
        <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-[#050414] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-[#050414] to-transparent z-10"></div>
        
        <div className="flex animate-marquee whitespace-nowrap min-w-max">
          {[...tickerData, ...tickerData].map((ticker, index) => (
            <div key={index} className="flex items-center mx-8 space-x-3 bg-gray-900/50 px-4 py-1.5 rounded-lg border border-gray-800">
              <span className="font-bold text-gray-200">{ticker.symbol}</span>
              <span className="text-white font-mono">{ticker.price}</span>
              <span className={`font-bold font-mono ${ticker.isUp ? 'text-green-500' : 'text-red-500'} flex items-center`}>
                {ticker.isUp ? (
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" transform="rotate(180 10 10)"/></svg>
                ) : (
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                )}
                {ticker.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Market Interests Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-3 mb-20">
        {tradingData.map((data, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="#8245ec"
            glarePosition="all"
            glareBorderRadius="1rem"
            className="w-full h-full"
          >
            <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-700 p-8 shadow-[0_0_20px_rgba(130,69,236,0.15)] h-full flex flex-col group hover:border-[#8245ec] transition-colors duration-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#8245ec] transition-colors duration-300">
                  {data.category}
                </h3>
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center p-2 shadow-inner shadow-black flex-shrink-0">
                  <img src={data.icon} alt={data.category} className="w-full h-full object-contain filter invert opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              
              <div className="flex flex-col gap-4 flex-grow">
                {data.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-[#0d0a20] rounded-xl p-3 border border-gray-800 group-hover:border-purple-900/50 transition-colors">
                    <span className="text-gray-300 font-medium text-sm sm:text-base">{item.name}</span>
                    <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                      {item.symbol}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>
        ))}
      </div>

      {/* Start Trading Section (Referral Links) */}
      <div className="mt-12 bg-gradient-to-br from-gray-900/90 to-[#0f0b1e]/90 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-purple-900/40 shadow-[0_0_40px_rgba(130,69,236,0.1)]">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">
            Start Your Trading Journey
          </h3>
          <p className="text-gray-400">Open an account using my referral links and join the markets today.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Indian Brokers */}
          <div className="flex-1">
            <h4 className="text-white font-bold mb-6 flex items-center text-lg uppercase tracking-wider">
              <span className="w-8 h-1 bg-purple-500 mr-3 rounded-full"></span>
              Indian Market
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {referralLinks.indian.map((broker, idx) => (
                <a 
                  key={idx} 
                  href={broker.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-[#15102d] hover:bg-purple-900/30 border border-gray-800 hover:border-purple-500 p-4 rounded-2xl group transition-all duration-300 hover:shadow-[0_0_15px_rgba(130,69,236,0.3)] hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-black/40 rounded-full flex items-center justify-center p-2">
                      <img src={broker.icon} alt="Broker" className="w-full h-full object-contain filter invert opacity-70 group-hover:opacity-100" />
                    </div>
                    <span className="text-gray-200 font-semibold group-hover:text-white">{broker.name}</span>
                  </div>
                  <svg className="w-5 h-5 text-purple-500 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Crypto Exchanges */}
          <div className="flex-1">
            <h4 className="text-white font-bold mb-6 flex items-center text-lg uppercase tracking-wider">
              <span className="w-8 h-1 bg-pink-500 mr-3 rounded-full"></span>
              Crypto Exchanges
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {referralLinks.global.map((exchange, idx) => (
                <a 
                  key={idx} 
                  href={exchange.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-[#15102d] hover:bg-pink-900/20 border border-gray-800 hover:border-pink-500 p-4 rounded-2xl group transition-all duration-300 hover:shadow-[0_0_15px_rgba(236,69,165,0.2)] hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-black/40 rounded-full flex items-center justify-center p-2">
                      <img src={exchange.icon} alt="Exchange" className="w-full h-full object-contain filter invert opacity-70 group-hover:opacity-100" />
                    </div>
                    <span className="text-gray-200 font-semibold group-hover:text-white">{exchange.name}</span>
                  </div>
                  <svg className="w-5 h-5 text-pink-500 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trading;
