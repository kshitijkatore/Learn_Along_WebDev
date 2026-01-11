import React from 'react'

export const Navbar = () => {
  const links =[
        {
            title: 'Home',
            href: '#'

        },
        {
            title: 'Community',
            href: '#'
        },
        {
          title: 'Pricing',
          href: "#"
        },
        {
          title: 'Changelog',
          href:'#'
        }

    ]
  return (
    <div className='navbar-root'>
      <div className='logo'>
        <img src="lightimg.webp" alt="" />
        <h2>Lightbox</h2>
      </div>
      <div className='links'>
            {links.map((link, idx) => (
                <a className='link-items' key={link.title} href={link.href}>{link.title}</a>
            ))}
      </div>
      <div className='btns'>
        <button className='btn1'>Log in</button>
        <button className='btn2'>Create a project</button>
        <button className='navigation'><img src="menu-line.svg" alt="" /></button>
      </div>
    </div>
  )
}

