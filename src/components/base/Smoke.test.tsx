import * as React from "react";
import SmokeText from './SmokeText'
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    // const testRenderer = TestRenderer.create(<SmokeText />); 
        const tree = renderer     
        //@ts-ignore
        .create(<SmokeText />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});