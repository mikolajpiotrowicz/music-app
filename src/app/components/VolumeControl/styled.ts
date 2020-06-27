import styled from 'styled-components';

export const VolumeRangeControl = styled.input`
  display: none;
  position: absolute;
  right: -180px;
  top: 50%;
  transform: translate(-50%, 0);
  padding-left: 40px;

  &[type='range'] {
    -webkit-appearance: none;
    width: 100px;
    background-color: transparent;
    transition: 1s all;
  }

  &[type='range']:focus {
    outline: none;
  }

  &[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 7px;
    cursor: pointer;
    background: #fff;
    border-radius: 10px;
    border: 0px solid #010101;
    margin-bottom: 3px;
  }

  &[type='range']::-webkit-slider-thumb {
    height: 16px;
    width: 16px;
    border-radius: 8px;
    background: #fff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -4px;
  }

  &[type='range']:focus::-webkit-slider-runnable-track {
    background: #fff;
  }

  &[type='range']::-moz-range-track {
    width: 100%;
    height: 31.2px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #46262c;
    border-radius: 0px;
    border: 0px solid #010101;
  }

  &[type='range']::-moz-range-thumb {
    box-shadow: 1.8px 1.8px 5.9px rgba(255, 0, 0, 0.49), 0px 0px 1.8px rgba(255, 26, 26, 0.49);
    border: 2.9px solid #941e00;
    height: 25px;
    width: 34px;
    border-radius: 28px;
    background: rgba(254, 55, 56, 0.93);
    cursor: pointer;
  }

  &[type='range']::-ms-track {
    width: 100%;
    height: 31.2px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &[type='range']::-ms-fill-lower {
    background: #351d22;
    border: 0px solid #010101;
    border-radius: 0px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }

  &[type='range']::-ms-fill-upper {
    background: #46262c;
    border: 0px solid #010101;
    border-radius: 0px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }

  &[type='range']::-ms-thumb {
    box-shadow: 1.8px 1.8px 5.9px rgba(255, 0, 0, 0.49), 0px 0px 1.8px rgba(255, 26, 26, 0.49);
    border: 2.9px solid #941e00;
    width: 34px;
    border-radius: 28px;
    background: rgba(254, 55, 56, 0.93);
    cursor: pointer;
    height: 25px;
  }

  &[type='range']:focus::-ms-fill-lower {
    background: #46262c;
  }

  &[type='range']:focus::-ms-fill-upper {
    background: #572f36;
  }
`;
export const VolumeControlWrapper = styled.button`
  display: flex;
  border: none;
  border-bottom: 10px solid transparent;
  position: relative;
  background-color: transparent;
  padding: 22px 10px 10px 10px;
  transition: 1s transform ease-in-out;
  cursor: pointer;
  &:hover ${VolumeRangeControl} {
    display: block;
  }
  &:hover svg {
    transform: scale(1.15);
  }
`;
