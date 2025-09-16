import Modal from "react-bootstrap/Modal";

const AddJunkModal = ({ itemObj, submitted, showModal, handleCloseModal }) => {
    return (
        <>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton="true">
                    <Modal.Title>Form Submitted!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {submitted && (
                        <>
                            <p>Nice Job! Your Submitted Junk</p>
                            <p>
                                <b>Junk Name: </b>
                                {itemObj.title}
                            </p>
                            <p>
                                <b>Price: </b>
                                {itemObj.price}
                            </p>
                            <p>
                                <b>Description: </b>
                                {itemObj.description}
                            </p>
                            <p>
                                <b>Category</b>
                                {itemObj.category}
                            </p>
                        </>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default AddJunkModal;
