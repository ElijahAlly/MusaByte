import React from 'react';

const Comments = () => {
	return (
		<section className='comments'>
           <form>
			   <input type="text" name="body" placeholder="Leave an anonymous comment"/>
			   <button>Post Comment</button>
		   </form>
		</section>
	);
};

export default Comments;
