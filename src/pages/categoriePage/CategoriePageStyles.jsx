import styled from 'styled-components';

export const Container = styled.div`
	padding: 2rem 101px;

	min-height: 20vh;
	border: 1px solid green;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const CategorieTitle = styled.h1``;
export const CategorieItemsContainer = styled.div`
	min-height: 60vh;
	width: 100%;
	border: 1px solid red;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 40px;
	flex-wrap: wrap;
`;
