import React from 'react';
import {shallow} from 'enzyme';
import Placeholder from './placeholder';

descript('<Placeholder/>',()=>{
    test('Rendering the simple component',()=>{
        const inputplaceholder=shallow(<Placeholder/>)
        expect(inputplaceholder.text()).toEqual('placeholder')
    });
});