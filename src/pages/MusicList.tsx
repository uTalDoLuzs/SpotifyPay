import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { songs, chunkSongs } from '../data/songs';

const MusicList = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const chunks = chunkSongs(songs, 6);
  const currentSongs = chunks[page - 1] || [];

  const handleNextPage = () => {
    if (page < chunks.length) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Avaliação de Músicas - Página {page}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentSongs.map((song) => (
          <div
            key={song.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate(`/evaluation/${song.id}`)}
          >
            <img src={song.coverUrl} alt={song.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{song.title}</h2>
              <p className="text-gray-600">{song.artist}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className="px-4 py-2 bg-green-600 text-white rounded-lg disabled:bg-gray-400"
        >
          Anterior
        </button>
        <button
          onClick={handleNextPage}
          disabled={page === chunks.length}
          className="px-4 py-2 bg-green-600 text-white rounded-lg disabled:bg-gray-400"
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default MusicList;