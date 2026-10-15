
import { CardStyles } from "./style";
import { FiTag } from "react-icons/fi";
import { FaStar, FaRegStar } from "react-icons/fa";
import CustomButton from "../common/Button";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Package } from "lucide-react";
const ProductCardGrid = (props) => {
  const { product, onAddToCart,compact  } = props;
  //Math.round(4.3) = 4 (تقريب لأقرب رقم صحيح)
  const filledStars = Math.round(product?.rating);
// console.log({product});

  return(
<CardStyles cardColor={product?.cardColor} height={props?.height}>
  <div className=" hoverCard" >
<div className="image-placeholder">
   {!compact && (
    <>
    {product?.badge && <span className="badge">{product.badge}</span>}</>
    )}
    
     <Package size={64}  />
</div>
<div  className="writing-placeholder">
<p className="p1">
    <span><FiTag/></span>
    {product?.category }
</p>
<h3>{product?.name}</h3>
{!compact && <p className="p2-description">{product?.description}</p>}
{/* مشان حسب التقييم يعبي النجم  */}

{!compact && (
          <div className="div1">
            <div>
              {[1, 2, 3, 4, 5].map((starNumber) => (
                starNumber <= filledStars 
                  ? <FaStar key={starNumber} color="#FBCB00" /> 
                  : <FaRegStar key={starNumber} color="#D1D5DB" />
              ))}
            </div>
            <p className="p12">({product?.reviewsCount})</p>
          </div>
        )}

<div className="div2" > 
    <p className="p3">${product?.price}<span className="p1">/mo</span></p>
  <div className="div3" >
    {onAddToCart && (
    <Link to={`/products/${product?.id}`}>
   <CustomButton  onClickFunction={() =>console.log("Details") }
          label="Details"
          variant ="white"
           padding="4px 10px"
          />
    </Link>
     )}
          {onAddToCart && (<CustomButton onClickFunction={() => onAddToCart(product)} label="Add" icon={CiShoppingCart}  padding="4px 10px"/>
            )}
  
</div>
</div>
</div>
</div>
</CardStyles>

  )

};
export default ProductCardGrid;