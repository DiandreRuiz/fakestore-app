import Modal from "react-bootstrap/Modal";
import { formatUSD } from "../utilities/pricing_utilities";

const EditJunkModal = ({ itemObj, submitted, showModal, handleCloseModal }) => {
    return (
        <>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton="true">
                    <Modal.Title>Junk Edit Successful!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {submitted && (
                        <>
                            <p>
                                <b>Junk Name: </b>
                                {itemObj.title}
                            </p>
                            <p>
                                <b>Category: </b>
                                {itemObj.category}
                            </p>
                            <p>
                                <b>Price: </b>
                                {formatUSD(itemObj.price)}
                            </p>
                            <p>
                                <b>Description: </b>
                                {itemObj.description}
                            </p>
                        </>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default EditJunkModal;
