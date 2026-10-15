
import { FaStar, FaRegStar } from "react-icons/fa";
import CustomButton from "../common/Button";
import { CiShoppingCart } from "react-icons/ci";
import { CardListStyles } from "./style";
import { Link} from "react-router-dom";
import { Package } from "lucide-react";




const ProductCardList = (props) => {
const { product, onAddToCart } = props;
//Math.round(4.3) = 4 (تقريب لأقرب رقم صحيح)
  const filledStars = Math.round(product?.rating);

    return (
        
      <CardListStyles cardColor={product?.cardColor}>
<div className="divImg">

<Package size={42} color="#d3d3d3" />
</div>
<div className="content-wrapper">
  <div className="div1">
  <div>
  {product?.badge &&  <p className="p1"> 
    {/* {product?.badge && <span>{product.badge}</span>} */
    <span>{product.badge}</span> }
    </p>}

<h3>{product?.name}</h3>

<p className="p2">
    
    {product?.category }
</p>
</div>
    <p className="p3">${product?.price}<span className="p2 span">/mo</span></p>


</div>
<p className="p4">{product?.description}</p>
<div className="div2">
<div className="div3">
  <div>
  {[1, 2, 3, 4, 5].map((starNumber) => (
    starNumber <= filledStars 
      ? <FaStar key={starNumber} size={14} color="#FBCB00" /> 
      : <FaRegStar key={starNumber} size={14} color="#D1D5DB" />
  ))}
  </div>
<div>
  <p className="p5">{product?.rating} ({product?.reviewsCount} reviews)</p>
  {/* <p className="p1">({product?.reviewsCount} reviews)</p> */}
</div>
</div>
<div className="div4">
  <Link to={`/products/${product?.id}`}>
   <CustomButton className = "CustomButton" onClickFunction={() => console.log("Details")} 
          label="View Details"
          padding="4px 10px"
          color="var(--color-accent)"
          border="var(--color-accent)"
          backgroundColor="var(--color-bg-white)"
          backgroundColorHover="var(--color-accent)"
          colorHover="var(--color-bg-white)"
          borderHover="null"

    /></Link>
   <CustomButton className = "CustomButton" onClickFunction={() => onAddToCart(product)} 
          label="Add to Cart"
          icon={CiShoppingCart}
          padding="4px 10px"
          
    />
</div>

</div>
</div>


</CardListStyles>

    )
};
export default ProductCardList;