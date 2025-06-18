import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router";

function Item_desc({ item,addToCart }) {
  const [activeImage, setActiveImage] = useState(item.mainImage);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleBuyNow = () => {
  navigate("/checkout", { state: { cartItems: [item] } });
};

  return (
    <>
    <div className="tot">
        <div className="Main_content">
        <ul>
            <li className="itm_im_det">
                <div className="image-gallery">
                  <ul><li className="itm_im_det">
                    <div className="thumbnails">
                {item.thumbnails.map((thumb, index) => (
                <motion.img
                    className={activeImage === thumb ? "active-thumb" : ""}                
                    key={index}
                    src={thumb}
                   alt={`thumb-${index}`}

                    onClick={() => setActiveImage(thumb)}
                    style={{
                    cursor: "pointer",
                    
                    width: "60px",
                    margin: "5px",
                    border:
                        activeImage === thumb ? "2px solid #000" : "none",
                    }}
                />
                ))}
            </div>
                    </li>
                    <li className="itm_im_det">
                      <div className="main-image">
                        <motion.img
                        src={activeImage}
                        alt="Main Product"
                        style={{ width: "400px",cursor: "zoom-in" }}       
                        key={activeImage}  
                        className="fade-in"
                        onClick={() => setShowModal(true)}
                        />
                        
                    </div>
                    </li>
                    </ul>
                

            
            </div>
            {showModal && (
            <div className="zoom-modal" onClick={() => setShowModal(false)}>
            <img src={activeImage} alt="Zoomed Product" />
            </div>
            )}
            </li>
            <li className="itm_im_det">
                <div className="product-details">
                <h1 className="product-title">{item.title}</h1>
                <div className="rating">{item.rating}</div>
                <div className="badge">{item.badge}</div>
                <div className="price-section">
                    <span className="price">{item.price}</span>
                    <span className="discount">{item.discount}</span>
                </div>
                <div className="stock-status">{item.stockStatus}</div>
                <div className="quantity-cart">
                   <button onClick={() => addToCart(item)}>Add to Cart</button>


                    <button onClick={handleBuyNow}>Buy Now</button>
                </div>
                <div className="offers">{item.offers}</div>
                </div>
            </li>
        </ul>
      </div>

      <div className="highlights">
        <h2>Product Highlights</h2>
        <ul>
          {item.highlights.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="description">
        <h2>Product Description</h2>
        <p>{item.description}</p>
      </div>
    </div>
      
    </>
  );

}

export default Item_desc;