import { use } from "react";
import { MusicContext } from "../context/MusicContext";

export default function GenreStats() {
  // Read MusicContext using use() in try-catch (handle null context)
  let context = null;
  try {
    context = use(MusicContext);
  } catch {
    context = null;
  }
  
  // Get totalGenres with fallback to 0
  // Get selectedGenreData

  return (
    <div className="stats-bar" data-testid="stats-bar">
      {/* Total Genres stat item */}
      {/* Conditional: selected name, era, popularity when genre selected */}
    </div>
  );
}