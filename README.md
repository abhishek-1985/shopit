# shopit

> Web UI application built with React, Redux, Node Express.

## Things to know before you deep dive into the code 

  * All styling have been done using styled-components in a single file - style.js. 

  * Even though its a small Case Study, I did incorporate Redux to maintain application global state . 
  The interaction with API is handled by redux-saga middleware and the api response is reduced to redux state by reducers .
  It is my personal point of view, that no matter how small teh application is - usage of proper patterns of redux with react sets us for a future scalability and maintability 

  * Reducers , selectors and sagas have been unit tested through redux-testkit and redux-saga-tester . I couldn't get the saga unit test to work correctly with mock of API call and hence leaving it there as  a TODO .

  * Enzyme has been used to unit test only Quantity index.js page . In a real production application, I would prefer to include way more coverage and perhaps detailed unit test in Enzyme for every React component but for the sake of the Case Study, I have left out unit tests of every React component.

  * Cypress has been used for functional end-to-end testing to mimic a user workflow in both headless and browser options.

  * Screenshot from lighthouse audit has been included. As you can see there are some definite scope for improvement in SEO and Progressive Web App areas.

## Assumptions

  * The images inside Item-Data.json were not accessible at development time. Hence I took the liberty to get similar product images from target.com by inspecting the images and selecting the urls from network tab in inspect mode.

  * I took a stab at magifying the primary image once the user hovers over it. Instead of building the magnifier from the ground up , I used react-image-magnifier package which is used to magnify a given image to a defined scale. For actual implementation, I would love to find a way to create it from the ground up instead of using a package.

  * I have made a decision to display the entire legalcopy as part of returns . 
  In actual production implementation, I would probably make it shorter and only when the user wants to read in detail, the user can hover the mouse over the return section to show the entire return legal contract.

  * Just for the sake of the Case Study, I have used node express to serve up the Item-Data.json through an API end point which is consumed by side effects in Redux Saga to fetch the item data and store in Redux store through reducer.  
  In a real production environment , I would perfer a separate project with a java or node API that serves data to UI .
  I would have loved to have a single `yarn` script that starts the server and client but for now , the server and client applications have to be served independently.

## Development

  * Clone the git repository :-`git clone https://github.com/abhishek-1985/shopit.git`

  * cd into shopit :- `cd shopit`

  * Perform `yarn install` to install all package dependencies

  * Type `yarn start:server` which starts the node express server to serve item data at `http://locallhost:8080/item/v1`

  * In a new shell, type `yarn start:app` which starts the client application at `https://localhost:3000`

## Testing

### Unit Testing

  * Type `yarn test` to execute all unit tests for client application

### Functional Testing

  * Type `yarn cypress` to execute functional testing in cypress in headless browser mode
  
  * Type `yarn cypress:open` to execute cypress in interactive mode which opens cypress window. Click the test to execute the same.

## Production Build

  I would prefer to have series a drone pipeline steps for CI/CD as follows on merge of a PR :-
  
  * Execute ```yarn test``` to execute all unit tests in drone
  * Build step to execute ```yarn build``` to create optimized production build
  * DockerImage step to create the docker image using `plugins/docker` in drone and tag the same with DRONE_COMMIT_SHA and l  latest and push the same to artifactory
  * Kubernetes deployment step to pull down the image in kuberenets deployment.yml file and apply kubernetes ingress, services and deployment yml files in development environment (Assumption is Kuberenetes ingress, service and deployment files are either created on the fly or prior to drone steps )
  * Cypress steps to install cypress in drone workspace and execute cypress functional steps against the recently deployed application in kubernetes(Cypress configuration to be done for various environments against which the functional tests will run)
  * Send a slack message to deployment room on successful execution of all the above pipelines  
