import pageRoutes from './routes';
import { pathToRegex, getParams, getQueryParams } from './utils';

const nav = document.querySelector('.nav');

const findRoute = (routes, pathname) => {
  const allRoutes = routes.map((route) => ({
    route,
    matchedPathInfo:
      route.path === '*' ? [pathname] : pathname.match(pathToRegex(route.path)),
  }));

  return allRoutes.find((route) => route.matchedPathInfo !== null);
};

const renderRoute = () => {
  const targetRoute = findRoute(pageRoutes, location.pathname);

  if (!targetRoute) return;

  const params = getParams(targetRoute);
  const queryParams = getQueryParams(location);

  document.querySelector('#app').innerHTML = targetRoute.route.page({
    params,
    queryParams,
  });
};

const changeRoute = (url) => {
  history.pushState(null, null, url);
  renderRoute();
};

document.addEventListener('DOMContentLoaded', () => {
  nav.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      changeRoute(e.target.href);
    }
  });
  renderRoute();
});

window.addEventListener('popstate', renderRoute);

export { changeRoute, findRoute, renderRoute };
