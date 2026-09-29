import { use } from "react";
import { MusicContext } from "../context/MusicContext";

export default function GenreCard({ genre }) {
  // Read MusicContext using use() in try-catch (handle null context)
  let context = null;
  try {
    context = use(MusicContext);
  } catch {
    context = null;
  }
  
  // Determine if this genre is selected

  return (
    <div data-testid={`genre-${genre.id}`}>
      {/* Conditionally render selected badge with data-testid="selected-badge" */}
      {/* Genre icon */}
      {/* Genre name */}
      {/* Genre description */}
      {/* Card meta: origin and era */}
      {/* Popularity bar with fill width */}
      {/* Popularity percentage text */}
    </div>
  );
}