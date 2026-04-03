const normalizedBasePath = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const routerBasename =
  normalizedBasePath === '/' ? undefined : normalizedBasePath.replace(/\/$/, '');

export function assetPath(path: string) {
  return `${normalizedBasePath}${path.replace(/^\/+/, '')}`;
}
