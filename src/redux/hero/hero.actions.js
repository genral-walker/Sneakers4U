import heroActionTypes from './hero.types';

export const showHero = () => ({
  type: heroActionTypes.SHOW_HERO
});

export const hideHero = () => ({
  type: heroActionTypes.HIDE_HERO
});

/*
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

*/ 
