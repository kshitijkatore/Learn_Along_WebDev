import React from 'react'

export const Navbar = () => {
    const links =[
        {
            title: 'Home',
            href: '#'

        },
        {
            title: 'Careers',
            href: '#'
        } 
    ]
  return (
    <div className='root-navbar'>
        <div className='logo'>
            <img className='logos' src="logos.avif" alt="" />
        </div>
        <div className='links'>
            {links.map((link, idx) => (
                <a className='link-items' key={link.title} href={link.href}>{link.title}</a>
            ))}
        </div>
        <div>
            <button className='btn'>Book demo</button>
        </div>
    </div>
  )
}
