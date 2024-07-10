# Example Rush Monorepo

This is a modified version of the [basic Rush example](https://github.com/microsoft/rush-example).

This version demostrates a bug with vitest browser mode. It does not seem to
work inside of a Rush repository.

To repoduce:

- clone this repository
- `cd rush-vitest-browser`
- `rush install`
- `cd libraries/my-controls`
- `rushx test`

The result is that the browser will open and will display an error like:

```
GET http://localhost:5173/__vitest_browser__/orchestrator-x0A1t8rC.js net::ERR_ABORTED 404 (Not Found)
```
