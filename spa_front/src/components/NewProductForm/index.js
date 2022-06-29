import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import {
  ProductFormContainer,
  ProductFormWrapper,
  Title,
  FormWrap,
  FormContent,
  Form,
  Column1,
  Column2,
  ImgWrapper,
  ImgProduct,
  FormLabel,
  ButtonWrapper,
  FormInput,
  FormButton,
} from './NewProductFormElements'

const ProductForm = () => {
  const [imgPreview, setImgPreview] = useState(null);

  const [values, setValues] = useState({
    name: '',
    code: '',
    price: '',
    description: ''
});

  const handleImageChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } 
  };

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, code, price, description } = values;
    const product = { name, code, price, description };

    axios.post('/products/create', product)
        .then((response) => {
          const status = response.status;
            if (status === 200) {
                window.location = '/'
            }
        })
        .catch((error) => {
            console.error(error);
        });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <ProductFormContainer>
      <ProductFormWrapper>
        <Title>Nuevo producto</Title>
        <FormWrap>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <Column1>
                <ImgWrapper className="imgPreview" imgPreview={imgPreview}>
                  {!imgPreview && (
                    <>
                      <ImgProduct htmlFor="imgProduct" className='customFileUpload'>Selecciona imagen</ImgProduct>
                      <FormInput type='file' id='imgProduct' onChange={handleImageChange} />
                    </>
                  )}
                </ImgWrapper>
              </Column1>
              <Column2>
                <FormLabel>Nombre: 
                  <FormInput type='text' name='name' value={values.name} onChange={handleChange} required/>
                </FormLabel>
                <FormLabel>Código: 
                  <FormInput type='text' name='code' value={values.code} onChange={handleChange} required/>
                </FormLabel>
                <FormLabel>Precio: 
                  <FormInput type='number' name='price' value={values.price} onChange={handleChange} required/>
                </FormLabel>
                <FormLabel>Descripción: 
                  <FormInput type='text' max={150} name='description' value={values.description} onChange={handleChange} required/>
                </FormLabel>
              </Column2>
              <ButtonWrapper>
                <FormButton id='cancel' type='button' onClick={routeChange}>Cancelar</FormButton>
                {imgPreview && (
                    <FormButton id='remove' onClick={() => setImgPreview(null)}>Eliminar imagen</FormButton>
                )}
                <FormButton type='submit'>Guardar</FormButton>
              </ButtonWrapper>
            </Form>
          </FormContent>
        </FormWrap>
      </ProductFormWrapper>
    </ProductFormContainer>
  )
}

export default ProductForm