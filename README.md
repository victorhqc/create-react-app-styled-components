## Description
`styled-components` complains about multiple instances when using it in a dependency with a symlink during development

## Instructions
Install dependencies
```
npm i
```

Run application.
```
npm run compile && npm start
```

It'll bootstrap dependencies, make symlinks and start application.

**Expected**
No warning in devtools and styles work.

**Actual**
Styles are broken. A warning appears in devtools

Installing dependencies manually also doesn't help
```
cd packages/components
npm i
npm run compile
npm link
cd ../packages/app
npm i
npm link @test/components
npm start
```

## How to fix.
Add the following in webpack configuration in `react-scripts`.

```js
{
  alias: {
    'styled-components': path.resolve(paths.appNodeModules, 'styled-components'),
  }
}
```
