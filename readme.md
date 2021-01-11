# Frontend

This Recruit front-end site has been implemented using:

- create-react-app for setting up React's core files and dependencies.
- Material-UI for theming and most components in the site.
- react-router-dom for navigation and routing.
- axios for making HTTP requests.
- React Testing Library and Jest for testing.

Note: Without a running Recruit back-end, the site will load but you will be unable to register credit cards.

## Setup

Run `npm install` in the project directory to pull down dependencies. To run on your development environment without
performing a full build, run `npm start`. Changes will hot-reload.

To first perform a full build, run `npm run build` and deploy as desired.

This site can be configured to point to a different back-end URL (but will otherwise default to the default URL). To do
so, set the `REACT_APP_API_BASE_URL` to the URL of a running Recruit back-end *including the trailing slash*. If no
modifications have been made to the back-end's default configuration, this will be `https://localhost:5001/`.

## Testing

To run all tests via the command line, run `npm test`. In an interactive session, press `a` to run all tests if this
does not happen automatically.