import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, name, price, stock }) => {
    const isOutOfStock = stock === 0;
    const isLowStock = stock < 10 && stock > 0;

    return (
        <div className={`product-card ${isOutOfStock ? 'out-of-stock' : ''}`}>
            <div className="image-container">
                <img src={image} alt={name} className="product-image" />
                {isOutOfStock && <span className="badge out-stock">Out of Stock</span>}
                {isLowStock && <span className="badge low-stock">Low Stock</span>}
            </div>

            <div className="card-content">
                <h3 className="product-name">{name}</h3>
                <p className="product-price">${price.toFixed(2)}</p>

                <div className="card-actions">
                    <button
                        className="add-to-cart-btn"
                        disabled={isOutOfStock}
                    >
                        {isOutOfStock ? 'Unavailable' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
