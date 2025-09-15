import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import style from "../styles/Card.module.css";

const JunkCard = ({ itemObj }) => {
    return (
        <Card key={itemObj.id} className={style.junkCard} as={Link} to={`products/${itemObj.id}`}>
            <Card.Header className="flex-shrink-0">{itemObj.title}</Card.Header>
            <Card.Img variant="bottom" src={itemObj.image} className="p-2 w-50 mx-auto my-auto m-3"></Card.Img>
        </Card>
    );
};

export default JunkCard;
