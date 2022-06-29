import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
  ProductListContainer,
  ProductListWrapper,
  TitleWrapper,
  Title,
  ProductWrapper,
  ProductInfo,
  ImgProduct,
  InfoWrap,
  Info,
  BtnWrapper,
  BtnLink
} from './ProductListElements'

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setProducts]);

  return (
    <ProductListContainer>
      <ProductListWrapper>
        <TitleWrapper>
          <Title>Mis productos</Title>
          <BtnWrapper>
            <BtnLink to='/newproduct'>Añadir Producto</BtnLink>
          </BtnWrapper>
        </TitleWrapper>
          <ProductWrapper>
            {products.map((item) => { 
              return ( 
                <ProductInfo> 
                  <ImgProduct src='https://picsum.photos/500'/>
                  <InfoWrap>
                    <Info id='name'>{item.name}</Info>
                    <Info id='code'>{item.code}</Info>
                    <Info id='price'>{item.price} €</Info>
                    <Info id='description'>{item.description}</Info>
                  </InfoWrap>
                </ProductInfo>
              ); 
            })}
          </ProductWrapper>
      </ProductListWrapper>
    </ProductListContainer>
  )
}

export default ProductList