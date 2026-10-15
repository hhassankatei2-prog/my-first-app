import { useParams } from "react-router-dom";
import ProductInfoCard from "../../components/product-info-card";
import { DivContainer, HrStyle, PStyle, StyledLink, StyledLink2 } from "./style";
import { FaArrowLeft } from "react-icons/fa";
import { productsArray as productsAR } from "../../assets/locals/ar/products";
import { productsArray as productsEN} from "../../assets/locals/en/products";
import { useTranslation } from "react-i18next";


const ProductDetails = () => {
 const { id } = useParams();
 const {i18n} = useTranslation();
 const  currentLang = i18n.language;
 const products = currentLang === "ar" ? productsAR : productsEN ;
  const product = products?.find((item) => item?.id === Number(id)
  );

return(
     <>
    <PStyle className="container">
      <StyledLink to="/home">Home /</StyledLink>  <StyledLink to="/products">Products /</StyledLink>  {product?.name}
    </PStyle>
    <HrStyle />
    <DivContainer>
<div className="container">
      <StyledLink2 to="/products"><FaArrowLeft/> Back to Products </StyledLink2>
      <ProductInfoCard product={product} allProducts={products} />


    </div>
    </DivContainer>
    <HrStyle />
      {/* <Footer /> */}
    </> 
    );
};
export default ProductDetails ;