import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

// Custom Components
import AddJunkModal from "./AddProductModal";

const AddJunkForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        price: null,
        description: "",
        category: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [errorState, setErrorState] = useState(null);
    const [validated, setValidated] = useState(false);

    // Set state for Modal visibility (ui-helper)
    const handleCloseModal = () => {
        setShowModal(false);
    };

    // Updates field data state for this piece of the form input
    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Closes alert closed by error & resets form data
    const handleAlertClose = () => {
        setSubmitted(false);
        setFormData({
            title: "",
            price: null,
            description: "",
            category: "",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            try {
                const response = fetch()
            }
        }
    };
};

export default AddJunkForm;
