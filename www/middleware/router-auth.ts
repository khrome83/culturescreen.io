export default ({ store, redirect, route }) => {
  if (store.getters['user/isAuthenticated'] && route.name === 'login') {
    return redirect('/app')
  }

  if (!store.getters['user/isAuthenticated'] && isAppRoute(route)) {
    return redirect('/login');
  }
}

const isAppRoute = (route) => {
  if (route.matched.some(record => record.path === '/app')) {
    return true;
  }
}
