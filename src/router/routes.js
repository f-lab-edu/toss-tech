import articlesPage from '../pages/articles.js';
import articlePage from '../pages/article.js';
import designPage from '../pages/design.js';
import notFoundPage from '../pages/not-found';

const pageRoutes = [
  { path: '/', page: articlesPage },
  { path: '/articles/:id', page: articlePage },
  { path: '/design', page: designPage },
  { path: '*', page: notFoundPage },
];

export default pageRoutes;
