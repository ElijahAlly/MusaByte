import React from 'react';
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
				<img src="https://picsum.photos/200/300/?blur=2" className='profile-picture'/>
				<h2 className='profile-username'></h2>
		   	</div>
		</section>
	);
};

export default Comments;
