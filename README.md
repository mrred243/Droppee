# Droppe

This project follows instructions from a challenge from Droppe.

## Instruction


### `yarn`

Install needed dependencies

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## External Dependencies

This project uses SCSS preprocessor for styling and React Router for directing to pages.

## Solution

The user flow is after signing in with his/her account, the page automatically loads the list of children's wish lists at the main page. There is a explanation about the discount rule in the top of the page. Next is the wish lists. The wish lists have an area for comments so that the user can note what can effect his/her decision (like the behaviors or interests of the child or budgets and so on). They freely interact with the wish lists to discard or approve them. Then he/she moves to next Checkout page where identical gifts are combined together and their price/ discount shows. If he/she clicks confirm button, then data will be send the server and the page redirects to Conformation Page, the server return a confirmation with the approved as well as discarded wish lists one last time.




