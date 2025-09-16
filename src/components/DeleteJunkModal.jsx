import Modal from "react-bootstrap/Modal";
import { formatUSD } from "../utilities/pricing_utilities";

const DeleteJunkModal = ({ itemObj, deleteSuccess, showModal, handleCloseModal }) => {
    return (
        <>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton="true">{deleteSuccess ? <Modal.Title>Junk Delete Successful!</Modal.Title> : <Modal.Title>Junk Delete Unsuccessful!</Modal.Title>}</Modal.Header>
                <Modal.Body>
                    {deleteSuccess ? (
                        <>
                            <p>
                                <b>Junk Name: </b>
                                {itemObj.title}
                            </p>
                            <p>
                                <b>Price: </b>
                                {formatUSD(itemObj.price)}
                            </p>
                            <p>
                                <b>Description: </b>
                                {itemObj.description}
                            </p>
                            <p>
                                <b>Category: </b>
                                {itemObj.category}
                            </p>
                        </>
                    ) : (
                        <h5>There was an issue with your deletion! Please try again.</h5>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default DeleteJunkModal;
