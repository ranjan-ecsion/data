import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function SmsPrimaryOffCanvas({ show, data, setShow, callBack, canvasWidth }) {
    return (
        <Offcanvas show={show} placement={"end"} style={{ width: canvasWidth }}>
            <Offcanvas.Header className="justify-content-between">
                <Offcanvas.Title>{data?.title}</Offcanvas.Title>
                <div className="d-flex gap-2">
                    {data?.type === "view" ? (
                        <>
                            <Button
                                variant="none"
                                className="edit-btn"
                                onClick={() => {
                                    callBack("edit_contacts",data?.item);
                                }}
                            >
                                Edit
                            </Button>
                        </>
                    ) : (
                        ""
                    )}
                    <Button
                        variant="none"
                        className="canvas-btn"
                        onClick={() => setShow(false)}
                    >
                        <i className="fa-solid fa-xmark fa-lg text-dark"></i>
                    </Button>
                </div>
            </Offcanvas.Header>
            <Offcanvas.Body>{data?.content}</Offcanvas.Body>
        </Offcanvas>
    );
}
