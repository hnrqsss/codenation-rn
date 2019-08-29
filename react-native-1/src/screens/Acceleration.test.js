import React from 'react';
import Acceleration from './Acceleration';
import AccelerationItem from '../components/AccelerationItem';
import renderer from 'react-test-renderer';
import { FlatList, Text } from 'react-native';

describe('Acceleration Initial', () => {
  test('Should have the codenation logo', () => {
    const instance = renderer.create(<Acceleration />).root;

    expect(instance.findAllByType('Image')[0].props.source).toEqual({uri: "https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png"});
  })
})
