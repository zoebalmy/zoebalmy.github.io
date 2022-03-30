let initState;

switch (window.location.pathname) {
  case '/accounts':
    initState = 'Accounts';
    break;
  case '/contacts':
    initState = 'Contacts';
    break;
  case '/opportunities':
    initState = 'Opportunities';
    break;
  default:
    initState = 'Dashboard';
}

const Navigation = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_PAGE_TITLE':
      return action.text;
    default:
      return state;
  }
};

export default Navigation;
