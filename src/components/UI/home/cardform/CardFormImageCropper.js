import React, { useState, Fragment } from "react";
import Cropper from "react-easy-crop";
import RangeSlider from "react-bootstrap-range-slider";

import { getCroppedImg } from "./cropper/businessCropImage";

import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

const CardFormImageCropper = ({ getBlob, inputImg }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = async (_, croppedAreaPixels) => {
    const croppedImage = await getCroppedImg(inputImg, croppedAreaPixels);
    getBlob(croppedImage);
  };

  return (
    <Fragment>
      <div className="card-form-image-cropper">
        <Cropper
          image={inputImg}
          crop={crop}
          zoom={zoom}
          aspect={1}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>
      <div className="card-form-image-cropper-controls">
        <RangeSlider
          value={zoom}
          min={1}
          max={10}
          variant="original"
          onChange={(e) => setZoom(e.target.value)}
        />
      </div>
    </Fragment>
  );
};

export default CardFormImageCropper;
