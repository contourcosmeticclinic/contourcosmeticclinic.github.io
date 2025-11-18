import React from "react";

import InteriorGallery from "../../components/layouts/gallery/interior-gallery";
import ReelsGallery from "../../components/layouts/gallery/reel-gallery";
import { clientResultImages, reelVideos } from "../../lib/constant";
import ClientResults from "../../components/home/client-results";

const GalleryPage = () => {
  return (
    <>
      <InteriorGallery />
      <ReelsGallery videos={reelVideos} />
      <ClientResults images={clientResultImages} />
    </>
  );
};

export default GalleryPage;
