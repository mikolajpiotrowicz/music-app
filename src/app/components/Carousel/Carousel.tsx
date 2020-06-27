import React, { useContext, useState } from 'react';
import { AlbumCover, CarouselWrapper, ImagesWrapper, CarouselItem } from './styled';
import { AppContext } from '../../AppContext';

export const Carousel: React.FC<{}> = () => {
  const appContext = useContext(AppContext);
  const { state } = appContext;
  const { carouselRotation } = state;
  return (
    <CarouselWrapper>
      <ImagesWrapper currentRotation={carouselRotation}>
        <CarouselItem className="item a">
          <AlbumCover
            src="https://img.discogs.com/v021JfDRlj4NG9UwWnw3BAtOAfA=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8335524-1543580982-2799.jpeg.jpg"
            alt="Album cover"
          />
        </CarouselItem>
        <CarouselItem className="item b">
          <AlbumCover
            src="https://img.discogs.com/v021JfDRlj4NG9UwWnw3BAtOAfA=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8335524-1543580982-2799.jpeg.jpg"
            alt="Album cover"
          />
        </CarouselItem>
        <CarouselItem className="item c">
          <AlbumCover
            src="https://img.discogs.com/v021JfDRlj4NG9UwWnw3BAtOAfA=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8335524-1543580982-2799.jpeg.jpg"
            alt="Album cover"
          />
        </CarouselItem>
        <CarouselItem className="item d">
          <AlbumCover
            src="https://img.discogs.com/v021JfDRlj4NG9UwWnw3BAtOAfA=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8335524-1543580982-2799.jpeg.jpg"
            alt="Album cover"
          />
        </CarouselItem>
        <CarouselItem className="item e">
          <AlbumCover
            src="https://img.discogs.com/v021JfDRlj4NG9UwWnw3BAtOAfA=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8335524-1543580982-2799.jpeg.jpg"
            alt="Album cover"
          />
        </CarouselItem>
        <CarouselItem className="item f">
          <AlbumCover
            src="https://img.discogs.com/v021JfDRlj4NG9UwWnw3BAtOAfA=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8335524-1543580982-2799.jpeg.jpg"
            alt="Album cover"
          />
        </CarouselItem>
      </ImagesWrapper>
    </CarouselWrapper>
  );
};
