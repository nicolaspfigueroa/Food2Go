# Food2Go

- This mobile app was developed to allow users to sign up and order surplus food from local restaurants at a discounted price.

## Screenshots

<p align="center">
  ![](https://github.com/nicolaspfigueroa/Food2Go/blob/main/client/data/screens/login.JPG?raw=true)
</p>

## Setup

- Install all node packages using the command "npm i" in the server and client folders.
- This app utlizes PostgreSQL as the database language. Download pgAdmin4 prior to starting the server.
- Create a Stripe account and navigate to the developer tools to retrieve your public and private test keys
- Download the Expo Go app on your mobile device to view the app.
- Create a ".env" file within the server directory. Add the following variables to your file: "STRIPE_SECRET_KEY", "STRIPE_PUBLIC_KEY", "DB_PASS", "SECRET_KEY". 
- Paste your Stripe public key into the corresponding variable name in "client/Food2Go/App.js.
- Assign your respective stripe keys to each variable. "DB_PASS" should be assigned to your PostgreSQL database password. "SECRET_KEY" can be any string, it is required to encrypt passwords for user authentication.
- Enter "nodemon index.js" within the "server" folder to start the server.
- Import the "restaurants.csv" file into the Restaurants Table and the "dishes.csv" file into the Dishes Table using pgAdmin4.These files are located in "client/data/info"
- Sign up for ngrok and download the application. Follow the steps listed in the documentation to link your account.
- Expose the server by entering "ngrok http 3001" into the ngrok terminal. Copy the redirected url and paste it into the "client/Food2Go/utils/ngrok.js" file.

## Execution

- Start the client by entering "npm start" within the "client/src" folder.
- Scan the QR code displayed in the terminal on your mobile device to view the app in Expo Go.
- Example navigation video: https://www.youtube.com/watch?v=kvkvBjDbt6w

## Tech Stack

- React Native, JavaScript, PostgreSQL, Express, Stripe, Node.js

## Contributors

- Carlos Pinilla (github.com/capi1206)
- Rodrigo Reategui Gerstein (github.com/PeicoPaco)

