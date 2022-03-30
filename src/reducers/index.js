import Navigation from './navigation';
import TimelineReducer from './timeline';
import { combineReducers } from 'redux';
import ContactReducer from './contacts';
import OpportunitiesReducer from './opportunities';
import accountReducer from './accounts';
import DetailsInformationReducer from './detailsInformationReducer';

// Common reducer to get into one store
const rootReducer = combineReducers({
  Navigation,
  TimelineReducer,
  ContactReducer,
  DetailsInformationReducer,
  accountReducer,
  OpportunitiesReducer,
});

export default rootReducer;
