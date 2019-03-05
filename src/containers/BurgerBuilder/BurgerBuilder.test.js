import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { BurgerBuilder } from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import Spinner from '../../components/UI/Spinner/Spinner';

configure({adapter: new Adapter()});

describe('<BurgerBuilder />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onInitIngredients={() => { }} />);
  });

  it('should render <BuildControls /> and <Burger /> when receiver ingredients', () => {
    wrapper.setProps({ings: {salad: 0}});
    expect(wrapper.find(BuildControls)).toHaveLength(1);
    expect(wrapper.find(Burger)).toHaveLength(1);
  });

  it('should render <Spinner /> and no <BuildControls /> and <Burger /> if no ingredients', () => {
    expect(wrapper.find(Spinner)).toHaveLength(1);
  })
});
