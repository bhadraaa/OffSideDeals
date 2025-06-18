import Item_desc from "./components/item_desc";
import jerseyImage from "./assets/jersey/item1/i1.png";
import thumb1 from "./assets/jersey/item1/i2.png";
import thumb2 from "./assets/jersey/item1/i3.png";
import { useNavigate } from "react-router-dom";

function Homee({ addToCart }) {
  const navigate = useNavigate();

  const handleCart = () => {
    navigate("/cart");
  };

  const itemDetails = {
    title: "Teky Argentina Football Jersey 2025",
    rating: "★★★★☆ (200 reviews)",
    badge: "Bestseller",
    price: "₹3,299",
    discount: "-20%",
    stockStatus: "In Stock ✅",
    mainImage: jerseyImage,
    thumbnails: [jerseyImage, thumb1, thumb2],
    highlights: [
      "Official 2025 Jersey",
      "Machine Washable",
      "Breathable fabric",
    ],
    description:
      "Detailed description about the football jersey material, fit, care instructions, and more.",
    offers: "Free delivery for orders above ₹999",
  };

  return (
    <>
      <button onClick={handleCart}>Go to Cart</button>
      <Item_desc item={itemDetails} addToCart={addToCart} />
    </>
  );
}

export default Homee;
