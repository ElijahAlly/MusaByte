import React from 'react';
import Link from 'next/link';

const Navbar = () => {
	return (
		<section className='navbar'>
            <Link href='/'>
                <h1 id='artist-name'>MusaByte</h1>
            </Link>
			<ul className='navbar-links'>
				<Link href='/songs'>
					<a className='nav-link'>Songs</a>
				</Link>
				<Link href='/songs'>
					<a className='nav-link'>Merchandise</a>
				</Link>
				<Link href='/songs'>
					<a className='nav-link'>Contact</a>
				</Link>
			</ul>
		</section>
	);
};

export default Navbar;
