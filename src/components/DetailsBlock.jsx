import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const DetailsBlock = ({ itemObj }) => {
    console.log(itemObj);
    return (
        <Row className="justify-content-evenly">
            <Col className="col-6 bg-light p-5">
                <h3>{itemObj.title}</h3>
                <img src={itemObj.image} className="w-100"></img>
            </Col>
            <Col className="col-4 bg-light p-5">
                <p>{itemObj.description}</p>
                <p style={{ color: "grey" }}>${itemObj.price}</p>
                <Button>Add to Cart</Button>
            </Col>
        </Row>
    );
};

export default DetailsBlock;
