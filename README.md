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

### Release

The code needs to be compiled before usage in other projects. For this run `npm run dist` or `yarn dist`.  
This will compile your components into the `/lib` folder. To create a new release from that commit and push this Folder. Don't forget to update the version inside `package.json` and to update `CHANGELOG`.  
After this is done, add a git-tag with the version number.
