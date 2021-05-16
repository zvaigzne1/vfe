1. Instructions for compiling and running code:
- download code from github
- in terminal open downloaded folder
- run command "npm i" - for installing all dependencies
- run "npm start" for running app in the development mode.
- run 'npm build" for bundling React in production mode.

    ### `npm start`

    Runs the app in the development mode.\
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

    The page will reload if you make edits.\
    You will also see any lint errors in the console.

    ### `npm run build`

    Builds the app for production to the `build` folder.\
    It correctly bundles React in production mode and optimizes the build for the best performance.

    The build is minified and the filenames include the hashes.\
    Your app is ready to be deployed!

2. Brief overview of the architecture. 

In Components folder:
    - App (makes request to API)
    Components that gets data from Redux Store:
    - ProductImage
    Hardcoded Components:
    - Spinner

In addToBox folder:
    Components that gets data from Redux Store:
    - LeadTime
        - ToolTip (from props)
    - OptionSummary
        - OptionSummaryItem (from props)
    - ShippingPrice
    - ShippingTime
        - ToolTip (from props)
    - ShipTo

    Hardcoded Components:
    - AddToBox
    - ButtonBox
        - LoginBtn
        - ContactSupplierBtn

In infoBox folder:
    Components that updates state in Redux Store:
    - QtyRocker
    
    Components that gets data from Redux Store:
    - BadgeList
        - Badge (from props)
    - CountdownBox
    - CountdownTimer
    - OptionList
        - Option (from props)
            - QtyRocker (from props)
    - RatingsBox
    - Title

    Hardcoded Components:
    - InfoBox
    - Links
    - MarchExpo
    - Payments
    - PriceBox
    - TradeAssurance

In Redux:
  Cart actions:
  - ADD_TO_CART
  - SUBTRACT_FROM_CART
  - REMOVE_FROM_CART

  Product actions:
  - GET_PRODUCTS_REQUEST
  - GET_PRODUCTS_SUCCESS
  - GET_PRODUCTS_FAIL

3. 
a) Project is created using React framework.
In this project I have used:
- Redux library for application state management
- React-redux for enabling components to interact with the Redux store
- Axios for making api requests
- Redux-thunk for making asynchronous calls

b) I chose React together with Redux because:
- scalable
- maintainable
- widely used
- for big projects good size/complexity ratio
- single point of truth

c) If I were to do it again (at this given moment with knowledge what I have in 72h time frame) - I would do it same way as I did and I wouldn't change anything. 
I am open to continues learning so in future with new skill set I would definitely find ways how to improve this project.
