import React, { Component } from "react";
import ProductDataService from "../services/ProductDataService";
import AuthService  from "../services/auth.service";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
export default class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
        this.newProduct = this.newProduct.bind(this);

        this.state = {
            id: null,
            name: "",
            description: "",
            price: 0,
            submitted: false,
            userReady: false,
            currentUser: { username: "" },
            file: null
        };
    }
    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();
        this.setState({ currentUser: currentUser, userReady: true })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value,
        });
    }

    onChangeImage(e) {
        this.setState({
            file: e.target.files[0],
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value,
        });
    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value,
        });
    }

    saveProduct() {
        var data = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            image: this.state.file,
            userId: this.state.currentUser.id
        };

        ProductDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    description: response.data.description,
                    price: response.data.price,
                    submitted: true,
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newProduct() {
        this.setState({
            id: null,
            name: "",
            description: "",
            price: 0,
            submitted: false,
        });
    }

    render() {
        return (
            <section id="about" className="block about-block">
                <Container fluid>
                    <div className="title-holder">
                        <div className="subtitle"></div>

                        <h2>List of products</h2>
                        <div className="subtitle">learn more about app</div>
                    </div>
                    <Row>
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newProduct}>
                            Add Another Product
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"

                                required
                                value={this.state.name}
                                onChange={this.onChangeName}
                                name="name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                required
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                name="description"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                required
                                value={this.state.price}
                                onChange={this.onChangePrice}
                                name="price"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Image</label>
                            <input
                                type="file"
                                className="form-control"
                                id="image"
                                required
                                value={this.state.image}
                                onChange={this.onChangeImage}
                                name="image"
                            />
                        </div>

                        <button onClick={this.saveProduct} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
                    </Row>
                </Container>
            </section>
        );
    }
}
