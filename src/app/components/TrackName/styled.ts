import styled from 'styled-components';

export const ArtistName = styled.p`
  font-size: 18px;
  margin: 0 0 10px 0;
`;
export const SongName = styled.p`
  font-size: 28px;
  margin: 0;
`;

export const TrackNameWrapper = styled.div`
  position: fixed;
  top: 77%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${ArtistName}, ${SongName} {
    color: #ddd;
    font-weight: bold;
    display: block;
    text-align: center;
  }
`;
