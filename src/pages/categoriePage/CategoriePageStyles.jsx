import styled from 'styled-components';

export const Container = styled.div`
	padding: 2rem 101px;

	min-height: 20vh;
	/* border: 1px solid green; */
	display: flex;
	flex-direction: column;
	gap: 2rem;
	max-width: 1440px;
	margin: 0 auto;
`;

export const CategorieTitle = styled.h1``;
export const CategorieItemsContainer = styled.div`
	min-height: 60vh;
	width: 100%;
	/* border: 1px solid red; */
	display: flex;
	max-width: 1400px;

	justify-content: center;
	gap: 39px;
	flex-wrap: wrap;
`;
