import Card from "react-bootstrap/Card";
import style from "../styles/Card.module.css";
import Button from "react-bootstrap/Button";
import { formatUSD } from "../utilities/pricing_utilities";

const JunkCard = ({ itemObj, targetJunkStateSetterForParent, isSelected, handleDeleteJunk }) => {
    return (
        <Card key={itemObj.id} className={`${style.junkCard} rounded-3 ${isSelected ? "border border-primary border-3" : ""}`}>
            <Card.Header className="flex-shrink-0">
                {itemObj.title}
                <br />
                <b>{formatUSD(itemObj.price)}</b>
            </Card.Header>

            <Card.Img variant="bottom" src={itemObj.image} className="p-2 w-25 mx-auto my-auto m-3"></Card.Img>
            <Card.Footer className="d-flex flex-column">
                <Button
                    className="d-inline-block mx-auto mb-1 mt-1"
                    onClick={() => {
                        targetJunkStateSetterForParent(itemObj);
                    }}
                >
                    Edit Junk
                </Button>
                <Button
                    variant="danger"
                    className="d-inline-block mx-auto mb-1 mt-1"
                    onClick={() => {
                        handleDeleteJunk(itemObj.id);
                    }}
                >
                    Delete
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default JunkCard;
