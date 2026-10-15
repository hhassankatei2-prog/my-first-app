import { useState } from "react";
import { LuLayoutGrid } from "react-icons/lu";
import { BsGridFill, BsListUl } from "react-icons/bs";
import ProductCardGrid from "../../components/ProductCardGrid";
import ProductCardList from "../../components/ProductCardList";
import {
  StyleDivHeader,
  PageContainer,
  FilterBar,
  CategoryButtons,
  ViewToggle,
  ResultsCount,
  ProductsGrid,
  ProductsList,
  HrMargin,
  DivContainer,
  BackgroundColor,
} from "./style";
import Footer from "../Footer";
import { productsArray as productsAR } from "../../assets/locals/ar/products";
import { productsArray as productsEN} from "../../assets/locals/en/products";
import { useTranslation } from "react-i18next";

const categories = ["All", "Software", "AI", "Hardware", "Robotics", "Security"];

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const {i18n,t} = useTranslation();
const  currentLang = i18n.language;

  const addToCart = (product) => {
    console.log(product);
  };
 const products = currentLang === "ar" ? productsAR : productsEN ;
  const filteredProducts = products?.filter (
    (product) => selectedCategory === "All" || product.category === selectedCategory
  );

   return (
    <>
    <div>
          <StyleDivHeader >
            <h1>{t("productsTitle")}</h1>
            <p>{t("productsSubtitle")}</p>
          </StyleDivHeader>
    <BackgroundColor >
            <div className="container">
              
            <FilterBar>
              <CategoryButtons>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={selectedCategory === cat ? "active" : ""}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {t(`category${cat}`)}
                  </button>
                ))}
              </CategoryButtons>
    
    
              <ViewToggle>
                <button
                  className={viewMode === "grid" ? "active" : ""}
                  aria-label={t("productsGridView")}
                  onClick={() => setViewMode("grid")}
                >
                  <LuLayoutGrid />
                </button>
                <button
                  className={viewMode === "list" ? "active" : ""}
                  aria-label={t("productsListView")}
                  onClick={() => setViewMode("list")}
                >
                  <BsListUl />
                </button>
              </ViewToggle>
            </FilterBar>
            </div>
    <HrMargin/>
            </BackgroundColor>
    <DivContainer >
    <div className="container">
          <PageContainer>
            <ResultsCount>{t("productsFound", { total: filteredProducts.length })}</ResultsCount>
    
            {filteredProducts.length === 0 && (
              <p>{t("productsNoResults")}</p>
            )}
    
            {viewMode === "grid" ? (
              <ProductsGrid >
                {filteredProducts.map((product) => (
                  <ProductCardGrid
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                  />
                ))}
              </ProductsGrid>
            ) : (
              <ProductsList>
                {filteredProducts.map((product) => (
                  <ProductCardList
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                  />
                ))}
              </ProductsList>
            )}
          </PageContainer>
          </div>
          </DivContainer>
        </div> 
        <HrMargin/>
          
    {/* <div>
      <StyleDivHeader >
        <h1>Our Products</h1>
        <p>Explore our range of software, AI tools, hardware kits, and robotics solutions built<br/> for modern teams.</p>
      </StyleDivHeader>
<BackgroundColor >
        <div className="container">
          
        <FilterBar>
          <CategoryButtons>
            {categories.map((cat) => (
              <button
                key={cat}
                className={selectedCategory === cat ? "active" : ""}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </CategoryButtons>


          <ViewToggle>
            <button
              className={viewMode === "grid" ? "active" : ""}
              onClick={() => setViewMode("grid")}
            >
              <LuLayoutGrid />
            </button>
            <button
              className={viewMode === "list" ? "active" : ""}
              onClick={() => setViewMode("list")}
            >
              <BsListUl />
            </button>
          </ViewToggle>
        </FilterBar>
        </div>
<HrMargin/>
        </BackgroundColor>
<DivContainer >
<div className="container">
      <PageContainer>
        <ResultsCount>{filteredProducts.length} products found</ResultsCount>

        {filteredProducts.length === 0 && (
          <p>No products found</p>
        )}

        {viewMode === "grid" ? (
          <ProductsGrid >
            {filteredProducts.map((product) => (
              <ProductCardGrid
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </ProductsGrid>
        ) : (
          <ProductsList>
            {filteredProducts.map((product) => (
              <ProductCardList
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </ProductsList>
        )}
      </PageContainer>
      </div>
      </DivContainer>
    </div> 
    <HrMargin/>
       */}
</>

  );
};

export default ProductsPage;
