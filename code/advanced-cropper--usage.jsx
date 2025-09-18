import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Image from "next/image";
import AdvancedCropper from "./AdvancedCropper"; // your cropper component
import ImageRegular from "../public/placeholder.png"; // fallback image

const ImageUploader = () => {
    const fileInputRef = useRef(null);
    const [imageLoader, setImageLoader] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null); // final cropped image
    const [cropImage, setCropImage] = useState(null); // image to crop

    const handleCropSave = (blob) => {
        const url = URL.createObjectURL(blob);
        setSelectedImage(url); // set cropped image
        setCropImage(null); // close modal
    };

    return (
        <div className="d-flex mb-3">
            <div className="image-uploader-container">
                <div className="camera-icon-placeholder">
                    <Image
                        src={selectedImage ? selectedImage : ImageRegular}
                        width={100}
                        height={80}
                        className="img-sm gallery-placeholder-img"
                        alt="..."
                    />
                </div>

                {/* Hidden input */}
                <input
                    type="file"
                    accept="image/*"
                    className="image-input"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={(event) => {
                        const file = event.target.files[0];
                        if (file) {
                            setImageLoader(true);
                            const url = URL.createObjectURL(file);
                            setCropImage(url); // open cropper modal
                            setImageLoader(false);
                        }
                    }}
                />

                <Button
                    variant="primary"
                    className="camera-button"
                    onClick={() => fileInputRef.current.click()}
                >
                    {imageLoader ? "Loading..." : <i className="fa-solid fa-camera"></i>}
                </Button>
            </div>

            {/* Cropper modal */}
            {cropImage && (
                <AdvancedCropper
                    image={cropImage}
                    onCropSave={handleCropSave}
                    onClose={() => setCropImage(null)}
                />
            )}
        </div>
    );
};

export default ImageUploader;
