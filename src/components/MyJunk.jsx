import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import EditJunkTile from "./EditJunkTile";

const MyJunk = () => {
    const [formData, setFormData] = useState({
        title: "",
        price: 0,
        description: "",
        category: "",
        image: "",
        targetJunkId: "",
    });
    const [myJunk, setMyJunk] = useState([]);
    const [targetJunk, setTargetJunk] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorStatus, setErrorStatus] = useState(null);

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

    const handleChangeTargetJunk = (e) => {
        const selectedJunk = e.target.JunkCard;
        // update formData here including target ID to be modified
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
            <div className="bg-light p-4 rounded">
                <Row className="text-center mb-3">
                    <h4>My Junk</h4>
                </Row>
                <Row>
                    {myJunk.map((junk) => (
                        <Col key={junk.id}>
                            <EditJunkTile itemObj={junk}></EditJunkTile>
                        </Col>
                    ))}
                </Row>
                
            </div>
        </Container>
    );
};

export default MyJunk;
