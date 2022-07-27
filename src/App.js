import React from 'react';
import styled from 'styled-components';
import Nav from './components/navigation/Nav';

const Container = styled.div`
	min-height: 100vh;
`;

class App extends React.Component {
	render() {
		return (
			<Container>
				<Nav />
			</Container>
		);
	}
}

export default App;
