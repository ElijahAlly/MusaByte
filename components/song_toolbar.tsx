import React from 'react';
 
const SongToolbar = () => {
    return (  
        <section className='song-toolbar'>
            <h1 id='select-song'>Select a song</h1>
            <h1 id='current-song'>Currently Playing</h1>
            <h1 id='comment'>Comment Anonymously</h1>
        </section>
    );
}

export default SongToolbar;