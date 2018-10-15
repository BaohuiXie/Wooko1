import React from 'react';
import {shallow} from 'enzyme';
import Stars from './star';

descript('<Stars/>',()=>{
    test('Rendering the simple component',()=>{
        const stars=shallow(<Stars/>)
        expect(stars.text()).toEqual('placeholder')
    });
});