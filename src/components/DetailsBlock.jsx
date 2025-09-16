import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { formatUSD } from "../utilities/pricing_utilities";

const DetailsBlock = ({ itemObj }) => {
    console.log(itemObj);
    return (
        <Row className="justify-content-evenly">
            <Col s={12} md={6} className="bg-light p-5 rounded-3">
                <img src={itemObj.image} className="w-75 d-block mx-auto" />
            </Col>

            <Col s={12} md={4} className="bg-light p-5 text-center align-self-start rounded-3">
                <h6 className="mb-1 text-secondary">{itemObj.category} junk</h6>
                <h3 className="mb-3">{itemObj.title}</h3>
                <p className="text-start">{itemObj.description}</p>
                <p className="mb-1">
                    <b>{formatUSD(itemObj.price)}</b>
                </p>
                <Button className="mt-3">Add to Cart</Button>
            </Col>
        </Row>
    );
};

export default DetailsBlock;
