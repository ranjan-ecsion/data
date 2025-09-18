import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Cropper } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";

const AdvancedCropper = ({ image, onCropSave, onClose }) => {
    const [cropperRef, setCropperRef] = useState(null);

    const handleSave = () => {
        if (cropperRef) {
            const canvas = cropperRef.getCanvas();
            if (canvas) {
                canvas.toBlob((blob) => {
                    onCropSave(blob);
                }, "image/jpeg");
            }
        }
    };

    return (
        <Modal show={!!image} onHide={onClose} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Crop Image</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {image && (
                    <Cropper
                        src={image}
                        className="custom-cropper"
                        onChange={(cropper) => setCropperRef(cropper)}
                        stencilProps={{
                            handlers: true,
                            lines: true,
                            movable: true,
                            resizable: true,
                        }}
                        style={{ height: 400, width: "100%" }}
                    />
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Crop
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AdvancedCropper;
