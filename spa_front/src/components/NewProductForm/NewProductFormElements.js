import styled from 'styled-components';

export const ProductFormContainer = styled.div`
  padding-bottom: 50px;
`;

export const ProductFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: auto;
padding: 20px 24px;
`;

export const Title = styled.h1`
  grid-column: 1 / 3;
  grid-row: 1;
  color: #2b2b2b;
  margin-top: 24px;
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 500;
  text-align: center;
  margin-bottom: 40px;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: center; 
`;

export const FormContent = styled.div`
  height: 100%;
  max-width: 1000px;
  width: 100%;
  cursor: auto;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 0.75fr 1fr; 
  grid-template-rows: auto 0.5fr; 
  margin: 0 auto;
  padding: 32px 32px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 25px;
  grid-area: 1 / 1 / 2 / 2; 
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 25px;
  grid-area: 1 / 2 / 2 / 3; 
`;

export const FormLabel = styled.label`
  font-size: 15px;
  font-weight: 500;
  color: #2b2b2b;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  display: block;
`;

export const FormInput = styled.input`
  margin-left: 5px;
  font-size: 15px;
  color: gray;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #536976;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
  background-color: transparent;
  &#imgProduct {
    display: none;
  }
`;

export const ImgWrapper = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  border-radius: 4px;
  background: ${({ imgPreview }) => (imgPreview ? `url('${imgPreview}') no-repeat center/cover`  : 'none')};
`;

export const ImgProduct = styled.label`
  border-radius: 4px;
  border: #536976 solid 1px;
  padding: 10px 22px;
  color: #536976;
  cursor: pointer;
  font-size: 16px;
  display: block;
  width: 60%;
`;

export const ButtonWrapper = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  display: block;
`;

export const FormButton = styled.button`
  border-radius: 4px;
  background: #536976;
  padding: 10px 22px;
  color: #f9f9f9;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 10px;
  float: right;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #BBD2C5;
    color: #536976;
    transform: scale(1.02);
  }
  &#cancel {
    background: #ad625c;
    float: left;
    &:hover {
      transition: all 0.2s ease-in-out;
      background: #e3b7b3;
      color: #ad625c;
      transform: scale(1.02);
    }
  }
  &#remove {
    background: #ad625c;
    float: left;
    &:hover {
      transition: all 0.2s ease-in-out;
      background: #e3b7b3;
      color: #ad625c;
      transform: scale(1.02);
    }
  }
`;