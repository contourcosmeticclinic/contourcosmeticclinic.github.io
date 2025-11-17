import React from "react";

import InteriorGallery from "../../components/layouts/gallery/interior-gallery";
import ReelsGallery from "../../components/layouts/gallery/reel-gallery";
import { reelVideos } from "../../lib/constant";

const GalleryPage = () => {
  return (
    <>
      <InteriorGallery />
      <ReelsGallery videos={reelVideos} />
    </>
  );
};

export default GalleryPage;
