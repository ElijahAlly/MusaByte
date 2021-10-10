import React from 'react';
import Link from 'next/link';

const Navbar = ({
	music,
	shop,
	contact,
}: {
	music?: Boolean;
	shop?: Boolean;
	contact?: Boolean;
}) => {
	return (
		<section className='navbar'>
			<Link href='/'>
				<h1 id='artist-name'>MusaByte</h1>
			</Link>
			<ul className='navbar-links'>
				<Link href='/music'>
					<a className={`nav-link ${music ? 'highlight-link' : ''}`}>Music</a>
				</Link>
				<Link href='/shop'>
					<a className={`nav-link ${shop ? 'highlight-link' : ''}`}>Shop</a>
				</Link>
				<Link href='/contact'>
					<a className={`nav-link ${contact ? 'highlight-link' : ''}`}>Contact</a>
				</Link>
			</ul>
		</section>
	);
};

export default Navbar;
