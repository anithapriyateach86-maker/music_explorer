import { use } from "react";
import { MusicContext, genres } from "../context/MusicContext";

export default function GenreFilter() {
  // Read MusicContext using use() in try-catch (handle null context)
  let context = null;
  try {
    context = use(MusicContext);
  } catch {
    context = null;
  }
  
  // Extract selectedGenre and onSelectGenre from context

  return (
    <div className="genre-filter">
      {/* All Genres button (active when no selection) */}
      {/* Map genres to filter buttons with active state */}
    </div>
  );
}