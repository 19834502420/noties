let _app = null;
let _routes = null;

export function initEntryConfig({ app, routes }) {
  _app = app;
  _routes = routes;
}

export function getEntryConfig() {
  return {
    app: _app,
    routes: _routes
  };
}
