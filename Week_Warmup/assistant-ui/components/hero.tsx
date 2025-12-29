import React from 'react'

export const Hero = () => {
  return (
    <div className='root-hero'>
        <div className='btn'>
            <button className="glow-btn">
                <span className="star">⭐</span>
                <span className="count">7.8k</span>
                <span className="text">Star us on GitHub</span>
            </button>
        </div>
        <div className='hero-title'>The UX of ChatGPT in your own app</div>
        <div className='hero-subtitle'>Open-source React toolkit for production AI chat experiences.</div>

        <button className='text-btn'>
            <span>$</span>
            <span>npx assistant-ui init</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check absolute size-3.5 text-green-500 transition-all duration-100 scale-50 opacity-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
            </span>
        </button>

        <div className='hero-sec'>
            <a href="">Get Started</a>
            <span className='dot'></span>
            <a href="">Contact Sales</a>
            <span className='dot'></span>
            <span  className="yc inline-flex w-full items-center gap-1.5 sm:w-auto" >Backed by
                <img src="yc_logo.webp" width="20px" height="20px" alt="" />
                Combinator</span>
        </div>
    </div>
  )
}
