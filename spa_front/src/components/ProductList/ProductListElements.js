import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductListContainer = styled.div`
	padding-bottom: 50px;
`;

export const ProductListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1400px;
	margin: auto;
	padding: 20px 24px;
`;

export const TitleWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(1,1fr);
`;

export const Title = styled.h1`
	grid-column: 1 / 3;
	grid-row: 1;
	color: #2b2b2b;
	margin-top: 24px;
	font-size: 2rem;
	line-height: 1.1;
	font-weight: 500;
	text-align: left;
	margin-bottom: 25px;
`;

export const ProductWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(5,1fr);
`;

export const ProductInfo = styled.div`
	display: grid;
	width: auto;
	height: auto;
	box-shadow: 0 6px 10px rgba(0,0,0,.05);
	border-radius: 4px;
	margin-bottom: 20px;
	@media screen and (max-width: 775px) {
		grid-template-columns: repeat(2,1fr);
		padding-right: 20px;
	};
`;

export const ImgProduct = styled.img`
	grid-row: 1;
	justify-self: center;
	width: 90%;
	margin: 15px;
	border-radius: 2%;
`;

export const InfoWrap = styled.div`
	grid-row: 2;
	align-self: center;
	margin: 0 15px 0 15px;
	@media screen and (max-width: 775px) {
		text-align: left;
	};
`;

export const Info = styled.span`
	display: block;
	font-size: 16px;
	color: #2e2e2e;
	margin-bottom: 10px;
	text-align: left;
	&#name {
		color: #536976;
		font-size: 18px;
		margin-bottom: 0px;
	}
	&#code {
		color: gray;
		font-style: italic;
		font-size: 12px;
	}
	&#price {
		color: #2b2b2b;
		font-size: 18px;
	}
	&#description {
		color: #999999;
		font-size: 14px;
	}
`;

export const BtnWrapper = styled.div`
grid-column: 3 / 3;
grid-row: 1;
margin: 20px;
&#search {
	display: inline;
	margin-left: 5px;
}
`;

export const BtnLink = styled(Link)`
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

&:hover {
	transition: all 0.2s ease-in-out;
	background: #BBD2C5;
	color: #536976;
	transform: scale(1.02);
}
`;