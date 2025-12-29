import React from 'react'

export const Navbar = () => {
    const links =[
        {
            title: 'Docs',
            href: '#'

        },
        {
            title: 'Showcase',
            href: '#'
        },
        {
            title: 'Example',
            href: '#'
        },
        {
            title: 'Dashboard',
            href: '#'
        },
        {
            title: 'Too UI',
            href: '#'
        },
        {
            title: 'Pricing',
            href: '#'
        }
    ]


  return (
    <nav className='root-navbar'>
        <div className='navbar-left'>
            <div className='icon'>
                <img className='logo' src="icons-chat.png" alt="" />
                <h4>assistant-ui</h4>
            </div>

            <div className='links'>
            {links.map((link, idx) => (
                <a className='link-items' key={link.title} href={link.href}>{link.title}</a>
            ))}
            </div>
        </div>

        <div className='navbar-right'>
            <div className='search-bar'>
                <span><img className='search-icon' src="icons-search.png" alt="" /></span>
                <span>search</span>
            </div>

            <div className='toggle-btn'>
                <div className='toggle'>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="size-6.5 rounded-full p-1.5 bg-fd-accent text-fd-accent-foreground"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg></span>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="size-6.5 rounded-full p-1.5 bg-fd-accent text-fd-accent-foreground"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg></span>
                </div>

            </div>
            <div className='discord-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" className="size-4"><path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"></path></svg>
            </div>
            <div className='github-btn'>
                <img src="icons8-github.svg" alt="" />
            </div>

        </div>
    </nav>
  )
}
