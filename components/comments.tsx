import React from 'react';
import Image from 'next/image'
import getRandomArtistName from '../lib/random_artist_name';

const Comments = () => {
	const name = getRandomArtistName();
	console.log(name);
	
	return (
		<section className='comments'>
           {/* <form>
			   <input type="text" name="body" placeholder="Leave an anonymous comment"/>
			   <button>Post Comment</button>
		   </form> */}
			<div className='new-comment'>
				<Image src="https://picsum.photos/200/300/?blur=2" className='profile-picture' alt=''/>
				<h2 className='profile-username'></h2>
		   	</div>
		</section>
	);
};

export default Comments;
