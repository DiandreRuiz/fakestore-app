import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import EditJunkTile from "./EditJunkTile";
import EditJunkForm from "./EditJunkForm";
import DeleteJunkModal from "./DeleteJunkModal";

const MyJunk = () => {
    const [myJunk, setMyJunk] = useState([]);
    const [targetJunk, setTargetJunk] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorStatus, setErrorStatus] = useState(null);
    const [deleteResponse, setDeleteResponse] = useState({});
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        // On mount, we grab the first 3 'products' from the API and list them as this user's junk
        const getMyJunk = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const responseData = await response.json();
                const firstThreeItems = responseData.slice(0, 3);
                setMyJunk(firstThreeItems);
                setLoading(false);
            } catch (error) {
                setErrorStatus(`Issue with retrieving 'My Junk' junk: ${error.message}`);
                setLoading(false);
            }
        };

        getMyJunk();
    }, []);

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };

    const handleJunkDelete = (junkId) => {
        const deleteJunk = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${junkId}`, {
                    method: "DELETE",
                });

                if (!response.ok) {
                    throw new Error(`Server error when trying to delete product id: ${junkId} - ${response.status}`);
                }

                const responseData = await response.json();
                setDeleteSuccess(true);
                setShowDeleteModal(true);
                setDeleteResponse(responseData);
            } catch (err) {
                setErrorStatus(`Issue with deleting product id: ${junkId} - ${err.message}`);
                setDeleteSuccess(false);
                setShowDeleteModal(true);
            }
        };
        deleteJunk();
    };

    if (loading) {
        return (
            <Container className="text-center">
                <br />
                <br />
                <Spinner animation="border" variant="primary" className="mt-5"></Spinner>
            </Container>
        );
    }

    if (errorStatus) {
        return (
            <Container className="text-center">
                <p style={{ color: "red" }}>{errorStatus}</p>
            </Container>
        );
    }

    return (
        <Container>
            <DeleteJunkModal itemObj={deleteResponse} deleteSuccess={deleteSuccess} showModal={showDeleteModal} handleCloseModal={handleCloseDeleteModal}></DeleteJunkModal>
            <div className="bg-light p-4 rounded">
                <Row className="text-center mb-3">
                    <h4>My Junk</h4>
                </Row>
                <Row>
                    {myJunk.map((junk) => (
                        <Col key={junk.id}>
                            <EditJunkTile itemObj={junk} targetJunkStateSetterForParent={setTargetJunk} isSelected={targetJunk?.id === junk.id}></EditJunkTile>
                        </Col>
                    ))}
                </Row>

                <Row>{targetJunk && <EditJunkForm targetJunk={targetJunk} />}</Row>
            </div>
        </Container>
    );
};

export default MyJunk;
