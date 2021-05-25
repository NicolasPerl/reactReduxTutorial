import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions'

export const initialState = {
  comments: COMMENTS,
  leaders: LEADERS,
  promotions: PROMOTIONS,
  dishes: DISHES
}

export const Reducer = (state = initialState, action) => {
  return state
}