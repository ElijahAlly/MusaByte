import React from 'react';
import Link from 'next/link';

const Navbar = ({
	song,
	merch,
	contact,
}: {
	song?: Boolean;
	merch?: Boolean;
	contact?: Boolean;
}) => {
	return (
		<section className='navbar'>
			<Link href='/'>
				<h1 id='artist-name'>MusaByte</h1>
			</Link>
			<ul className='navbar-links'>
				<Link href='/songs'>
					<a className={`nav-link ${song ? 'highlight-link' : ''}`}>Songs</a>
				</Link>
				<Link href='/merchandise'>
					<a className={`nav-link ${merch ? 'highlight-link' : ''}`}>Merchandise</a>
				</Link>
				<Link href='/contact'>
					<a className={`nav-link ${contact ? 'highlight-link' : ''}`}>Contact</a>
				</Link>
			</ul>
		</section>
	);
};

export default Navbar;
