# Example Component Collection

An example for how to build an collection of react components using [react-storybook](https://getstorybook.io/).  
This Projects intention is to give you a starting point creating a react component collection.

The components in this Project are examples provided by react-storybook.  

## Development

### Usage

1. Install dependencies with `npm install` or `yarn install`
2. Start development Storybook with `npm start` or `yarn start`

### Testing

Run `npm test` or `yarn test`.  
If you want the tests run automatically on codechange start tests with `npm test -- --watch` or `yarn test -- --watch`

### Linting

This project uses [prettier](https://github.com/prettier/prettier) so to check that your code is neatly formatted simply run `npm run prettify` or `yarn prettify`. Your code will be formatted if needed.

### Release

The code needs to be compiled before usage in other projects. For this run `npm run dist` or `yarn dist`.  
This will compile your components into the `/lib` folder. To create a new release from that commit and push this Folder. Don't forget to update the version inside `package.json` and to update `CHANGELOG`.  
After this is done, add a git-tag with the version number.

## Installation in another Project

This *Package* is not published on npm. If you want to try and install it inside another Project you have to install with the git/https path like `npm install git+https://git@github.com:ChDeinert/component-collection-example.git`.  
To use the components simply import the one you need like  
e.g. `import { Button } from 'component-collection-example';`.
