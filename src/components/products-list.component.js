import React, { Component } from "react";
import ProductDataService from "../services/ProductDataService";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchName = this.onChangeSearchName.bind(this);
        this.retrieveProducts = this.retrieveProducts.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveProduct = this.setActiveProduct.bind(this);
        this.removeAllProducts = this.removeAllProducts.bind(this);
        this.searchName = this.searchName.bind(this);

        this.state = {
            products: [],
            currentProduct: null,
            currentIndex: -1,
            searchName: ""
        };
    }

    componentDidMount() {
        this.retrieveProducts();
    }

    onChangeSearchName(e) {
        const searchName = e.target.value;

        this.setState({
            searchName: searchName
        });
    }

    retrieveProducts() {
        ProductDataService.getAll()
            .then(response => {
                this.setState({
                    products: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshList() {
        this.retrieveProducts();
        this.setState({
            currentProduct: null,
            currentIndex: -1
        });
    }

    setActiveProduct(product, index) {
        this.setState({
            currentProduct: product,
            currentIndex: index
        });
    }

    removeAllProducts() {
        ProductDataService.deleteAll()
            .then(response => {
                console.log(response.data);
                this.refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    }

    searchName() {
        this.setState({
            currentProduct: null,
            currentIndex: -1
        });

        ProductDataService.findByTitle(this.state.searchName)
            .then(response => {
                this.setState({
                    products: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { searchName, products, currentProduct, currentIndex } = this.state;

        return (
            <section id="about" className="block about-block">
                <Container fluid>
                    <div className="title-holder">
                        <div className="subtitle"></div>

                        <h2>List of products</h2>
                        <div className="subtitle">learn more about app</div>
                    </div>
                    <Row>
                        <div className="list row">
                        <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by name"
                            value={searchName}
                            onChange={this.onChangeSearchName}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={this.searchName}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Products List</h4>

                    <ul className="list-group">
                        {products &&
                            products.map((product, index) => (
                                <li
                                    className={
                                        "list-group-item " +
                                        (index === currentIndex ? "active" : "")
                                    }
                                    onClick={() => this.setActiveProduct(product, index)}
                                    key={index}
                                >
                                    {product.name}
                                </li>
                            ))}
                    </ul>

                    <button
                        className="m-3 btn btn-sm btn-danger"
                        onClick={this.removeAllProducts}
                    >
                        Remove All
                    </button>
                </div>
                <div className="col-md-6">
                    {currentProduct ? (
                        <div>
                            <h4>Product</h4>
                            <div>
                                <label>
                                    <strong>Name:</strong>
                                </label>{" "}
                                {currentProduct.name}
                            </div>
                            <div>
                                <label>
                                    <strong>Description:</strong>
                                </label>{" "}
                                {currentProduct.description}
                            </div>
                            <div>
                                <label>
                                    <strong>Price:</strong>
                                </label>{" "}
                                {currentProduct.price}
                            </div>
                            <div>
                                <label>
                                    <strong>Image:</strong>
                                </label>{" "}
                                <img
                                    src={`http://localhost:8080/images/${currentProduct.imageName}`}
                                    alt="Product Image"
                                    style={{maxWidth: '100%', maxHeight: '200px'}}
                                />
                            </div>
                            <div style={{marginTop: '10px'}}>
                                <button onClick={() => delete(currentProduct.id)} className="btn btn-danger">
                                    Delete
                                </button>
                                {' '}
                                <Link
                                    to={`/swipe/${currentProduct._id}`}
                                    className="btn btn-success"
                                >
                                    Swipe
                                </Link>
                            </div>

                            <Link
                                to={`/products/${currentProduct.id}`}
                                className="badge badge-warning"
                            >
                                Edit
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <br/>
                            <p>Please click on a Product...</p>
                        </div>
                    )}
                </div>
                        </div>
                    </Row>
                </Container>
            </section>
        );
    }
}
