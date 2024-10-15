import React from 'react';
import artistImage from '../assets/Artist.svg';
// import topmenuImage from '../assets';
// import searchImage from '../assets';



const SongList = ({ songs, setCurrentSongIndex }) => {
  return (

    <div className="w-full h-full sm:w-68 bg-red-900 text-white p-4">

      {/* Artist image */}
      <div className="flex justify-center">
        <img src={artistImage} alt="Artist" className="w-2/4  h-2/4" />
      </div>

      {/* Song List */}
      <div className="p-4 flex-grow overflow-auto">
        <h2 className="text-xl text-white mb-4">Popular Songs</h2>

        <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-900 text-left">
                <th className="p-2">#</th>
                <th className="p-2">Title</th>
                <th className="p-2">Playing</th>
                <th className="p-2">Time</th>
                <th className="p-2">Artist</th>
              </tr>
            </thead>

            <tbody>
              {songs.map((song, index) => (
                <tr 
                  key={index} 
                  onClick={() => setCurrentSongIndex(index)} 
                  className="bg-red-900 p-2 rounded-lg cursor-pointer hover:bg-red-700 transition-colors text-white"
                >
                  <td className="p-2">{index+1}</td>
                  <td className="p-2">{song.title}</td>
                  <td className="p-2">{song.playing ? 'Playing' : '-'}</td>
                  <td className="p-2">{song.time}</td>
                  <td className="p-2">{song.artist}</td>
                </tr>
              ))}
            </tbody>
          </table>
            </div>
          </div>
    
   
  );
};

export default SongList;


