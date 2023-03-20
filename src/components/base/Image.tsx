import * as React from 'react';
import styled from 'styled-components';

 const Image = (props) => {

	const {src, height, width} = props;
	const Img = styled.div`
		background-image: url(${src}); 
		width: ${width}px;
		height: ${height}px
		`;

	return (
		<Img/>
	);
};

export default Image;