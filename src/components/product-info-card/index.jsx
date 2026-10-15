import { FiBox } from "react-icons/fi";
import { FaStar, FaRegStar} from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
 import { useState } from "react";
import ProductCardGrid from "../ProductCardGrid";
import { DivFlex, DivHh, DivRelated, H3Related, ImagePlaceholder, WritingPlaceholder } from "./style";
import CustomButton from "../common/Button";
import { Package } from "lucide-react";

 const ProductInfoCard= (props) =>{
const {product,allProducts}=props;
const [quantity, setQuantity] = useState(1);
//Math.round(4.3) = 4 (تقريب لأقرب رقم صحيح)
  const filledStars = Math.round(product?.rating);
const increaseQuantity = () => {
  setQuantity(quantity + 1);
};

const decreaseQuantity = () => {
  if (quantity > 1) {
    setQuantity(quantity - 1);
  }
};
const addToCart = () => {
  const cartItem = {...product,quantity: quantity,};
  console.log(cartItem);
};

const buyNow = () => {
  const orderItem = {...product,quantity: quantity,};
  console.log(orderItem);
};
const relatedProducts = 
allProducts?.filter((item) => item?.id !== product?.id)
  .slice(0, 3);

return(   
  
<div>
<DivFlex >

   <ImagePlaceholder cardColor={product?.cardColor}>
     <div className="divImg">
       <div>
         <Package size={110} color="#cecccc" />
         </div>
        {product?.badge && <span className="badge">{product.badge}</span> }
     </div>
   </ImagePlaceholder>

   <WritingPlaceholder  >
    <div className="DivWritingPlaceholder">
     <p className="p-category">
        {product?.category}
     </p>
     <h3 className="h3-name">
        {product?.name}
     </h3>
     <div className="Div-star-rating">
        <div>
            {[1, 2, 3, 4, 5].map((starNumber) => (
                starNumber <= filledStars 
                  ? <FaStar key={starNumber} color="#FBCB00" /> 
                  : <FaRegStar key={starNumber} color="#D1D5DB" />
              ))}
        </div>
        <p className="p-rating">
            <span>{product?.rating} out of 5 · {product?.reviewsCount}  reviews</span>
        </p>
     </div>

     <p className="p-description">{product?.description}</p>

     <div className="div-Circle">
        <p><FiCheckCircle color="#43ba14"/>  Real-time data streaming</p>
        <p><FiCheckCircle color="#43ba14"/>  ML-powered predictions</p>
        <p><FiCheckCircle color="#43ba14"/>  Custom dashboards</p>
        <p><FiCheckCircle color="#43ba14"/>  API integrations</p>
        <p><FiCheckCircle color="#43ba14"/>  Export to CSV / PDF</p>
     </div> 

     <p className="p-price">${product?.price}<span>/month</span></p>

     <div className="div-Qty">
  <p>Qty:</p>
  <div className="div-button">
  <button className="button-Qty button-n" onClick={decreaseQuantity}>−</button>
  <span className="button-Qty">{quantity}</span>
  <button className="button-Qty button-plus" onClick={increaseQuantity}>+</button>
  </div>
</div>
<div className="div-shop">
  
  <CustomButton onClickFunction={addToCart} 
          label="Add to Cart" 
          fullWidth="25vw"
          padding =" 12px"
          borderRadius="14px"
    />
  
  <CustomButton onClickFunction={buyNow} 
          label="Buy Now"   
          fullWidth="8vw"
          variant="white"
          padding =" 12px 6px"
          color="var(--color-accent)"
          border="2px solid var(--color-accent)"
          backgroundColor="var(--color-bg-white)"
          backgroundColorHover="#eeeeed"
          borderRadius="14px"
    />
</div>
</div>
   </WritingPlaceholder>

</DivFlex>
 
<DivRelated>
  <H3Related>Related Products</H3Related>
  
<DivHh>
    {relatedProducts?.map((item)=>(
  
  <ProductCardGrid height={"110px"} key={item.id} product={item} compact />
  
   ))}
   
   </DivHh>
</DivRelated>

</div>


)

 };
 export default ProductInfoCard;