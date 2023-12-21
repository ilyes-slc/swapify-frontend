import React, { useState, useMemo, useRef } from 'react';
import TinderCard from 'react-tinder-card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import './ProductCard.css';
import IconButton from "@mui/material/IconButton";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import './SwipeButtons.css';
import axios from 'axios';  // Import Axios if not already done
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function Advanced({ products, productId }) {
    const [currentIndex, setCurrentIndex] = useState(products.length - 1);
    const [lastDirection, setLastDirection] = useState();
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex);

    const childRefs = useMemo(
        () =>
            Array(products.length)
                .fill(0)
                .map((i) => React.createRef()),
        [products.length]
    );

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val);
        currentIndexRef.current = val;
    };

    const canGoBack = currentIndex < products.length - 1;

    const canSwipe = currentIndex >= 0;

    // set last direction and decrease current index
    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction);
        updateCurrentIndex(index - 1);
        if (direction==='right'){
            console.log(productId)
            let likedProductId = products[index]._id

            axios.post('http://localhost:8080/api/products/likes', { productId, likedProductId })
                .then(response => {
                    // Handle the response here
                    if (response.data.message === 'Match found.') {
                        // Display a custom styled alert celebrating the match
                        Swal.fire({
                            title: 'Congratulations!',
                            text: 'You\'ve got a match!',
                            icon: 'success',
                            confirmButtonText: 'Awesome!'
                        });
                    } else {
                        // Handle other cases if needed
                        console.log(response.data);
                    }
                })
                .catch(error => {
                    console.error(error);
                    // Handle errors if necessary
                });
        }
    };

    const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
        // handle the case in which go back is pressed before card goes outOfFrame
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    };

    const swipe = async (dir) => {
        console.log(productId+' liked '+ currentIndex);
        if (canSwipe && currentIndex < products.length) {
            await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
        }
    };

    // increase current index and show card
    const goBack = async () => {
        if (!canGoBack) return;
        const newIndex = currentIndex + 1;
        updateCurrentIndex(newIndex);
        await childRefs[newIndex].current.restoreCard();
    };

    return (
        <section id="about" className="block about-block">
            <Container fluid>
                <div className="title-holder">
                    <div className="subtitle"></div>

                    <h2>List of products</h2>
                    <div className="subtitle">learn more about app</div>
                </div>
                <Row>
                    <div>
                        <div className='cardContainer'>
                            {
                                products.map((product, index) => (
                                    <TinderCard
                                        ref={childRefs[index]}
                                        className='swipe'
                                        key={product.name}
                                        onSwipe={(dir) => swiped(dir, product.name, index)}
                                        onCardLeftScreen={() => outOfFrame(product.name, index)}
                                    >
                                        <div
                                            style={{backgroundImage: `url(http://localhost:8080/images/${product.imageName})`}}
                                            className='card'
                                        >
                                            <h3>{product.name}</h3>
                                            <p>{product.description}</p>
                                        </div>
                                    </TinderCard>
                                ))}
                        </div>

                        <div className="swipe__Button">
                            <IconButton className="swipeButton__repeat" onClick={() => goBack()}>
                                <ReplayIcon fontSize="large"/>
                            </IconButton>
                            <IconButton className="swipeButton__left" onClick={() => swipe('left')}>
                                <CloseIcon fontSize="large"/>
                            </IconButton>
                            <IconButton className="swipeButton__star">
                                <StarRateIcon fontSize="large"/>
                            </IconButton>
                            <IconButton className="swipeButton__right" onClick={() => swipe('right')}>
                                <FavoriteIcon fontSize="large"/>
                            </IconButton>
                        </div>

                    </div>
                </Row>
            </Container>
        </section>
    );
}

export default Advanced;
