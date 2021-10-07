import { getAllSongs, SongObjType } from '../lib/songs';
import React, { useState } from 'react';
import SongBoard from '../components/song_board';
import Navbar from '../components/navbar';
import SongToolbar from '../components/song_toolbar';
import CurrentlyPlayingSong from '../components/currently_playing_song';
import Comments from '../components/comments';

const Songs = () => {
	const songs = getAllSongs();

	return (
		<>
			<Navbar song={true}/>
			<section className='song-page'>
                <SongToolbar />
                <section className='songs-board'>
                    {songs && (
                        <ul className='songs-list'>
                            {songs.map((song: SongObjType) => (
                                <SongBoard key={song.id} song={song} />
                                ))}
                        </ul>
                    )}
                    <CurrentlyPlayingSong />
                    <Comments />
                </section>
			</section>
		</>
	);
};

export default Songs;