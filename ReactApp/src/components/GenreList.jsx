import { use, useState, Suspense } from "react";
import { fetchGenres, MusicContext } from "../context/MusicContext";
import GenreCard from "./GenreCard";

function GenreContent() {
  // Use use(fetchGenres()) to read genres data
  // Manage selectedGenre state (null initially)
  // Manage sortBy state ('name' initially)
  
  // Handle empty genres: return empty state message
  
  // Sort genres based on sortBy (name alphabetically, popularity descending)
  
  // Filter genres based on selectedGenre (show all if null, filter by id if set)
  
  // Find selectedGenreData from genres array

  return (
    <MusicContext.Provider value={{ 
      // Provide selectedGenre, onSelectGenre, sortBy, onSortChange, totalGenres, selectedGenreData
    }}>
      {/* Stats bar with total genres and conditional selected info */}
      
      {/* Filter buttons: All Genres + one per genre */}
      
      {/* Sort buttons: Name and Popularity */}
      
      {/* Genre grid: map filteredGenres to GenreCard */}
    </MusicContext.Provider>
  );
}

export default function GenreList() {
  return (
    <Suspense fallback={
      <div className="loading-container">
        {/* Loading spinner and "Loading genres..." text */}
      </div>
    }>
      <GenreContent />
    </Suspense>
  );
}