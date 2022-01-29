# UltraTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2. And created like
test task for Ultra.io

## Implemented features

- Code style linting using husky precommit hook
- Installed Bootstrap 5
- Pagination
- Integrated Giphy API
- Lazy loaded modules
- State management using NGXS (this is overhead for current project and used only for demo purpose)
- Drawing GIFs using masonry style
- Handling query parameters in route and update view depend the route
- Routes preload strategy
- Added markdown module for load README.md like second lazy loaded module just for demo purpose

## What can be improved

- Internationalization
- Move Giphy API key to env variables (current implementation just for demo purpose)
- Add caching of GIFs
- And much more ...

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a
package that implements end-to-end testing capabilities.

## Running *.{js,ts} file linting using eslint"

Run `npm run lint` to lint the js and ts files Run `npm run lint:fix` to execute task that will try to fix style
mistakes in js and ts files automatically

## Running *.scss file linting using stylelint"

Run `npm run stylelint` to lint the *.scss files

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
