export const pathToRegex = (path) =>
  new RegExp(`^${path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)')}$`);

export const getParams = (target) => {
  const keys = Array.from(target.route.path.matchAll(/:(\w+)/g)).map(
    (paramsInfo) => paramsInfo[1],
  );

  const values = target.matchedPathInfo.slice(1);

  return Object.fromEntries(keys.map((key, index) => [key, values[index]]));
};

export const getQueryParams = (location) => {
  const url = new URL(location);

  const urlSearchParams = new URLSearchParams(url.search);

  return Object.fromEntries(urlSearchParams.entries());
};
