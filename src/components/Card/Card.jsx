import { IconButton } from '@mui/material';
import React from 'react';
import sale from '../../images/sale.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import { addAndDeleteProductInFavorites, productNewPrice } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from '../../redux/productsActions';

const Card = ({ product }) => {
    const dispatch = useDispatch()
    const favorites = useSelector(state => {
        const { productsReducer } = state
        return productsReducer.favorites
    })

    let checkInFavorites = favorites.some(item => item.product.id === product.id);
    const newPrice = productNewPrice(product)

    return (
        <div className="card">
            <div className="card-photo">
                {
                    product.sale ? (
                        <div className="card-sale">
                            <div className="card-sale-number">
                                <img src={sale} alt="" />
                                <div>{product.sale}%</div>
                            </div>
                        </div>
                    ) : null
                }
                <IconButton onClick={() => {
                    addAndDeleteProductInFavorites(product)
                    dispatch(getFavorites())
                }}>
                    {
                        checkInFavorites ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />
                    }
                </IconButton>
                <img src={product.images[0]} alt="" />
            </div>
            <Link to={`/details/${product.id}`}>
                <div className="card-info">
                    <h3>{product.title}</h3>
                    {
                        product.sale ? (
                            <h2>{newPrice} &#8381; <span>{product.price} &#8381;</span></h2>
                        ) : (
                            <h2>{product.price} &#8381;</h2>
                        )
                    }
                    <p>Размер: {product.size}</p>
                    <div className="color-buttons">
                        {
                            product.color.map((item, index) => (
                                <button style={{ background: item }} key={index}></button>
                            ))
                        }
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;