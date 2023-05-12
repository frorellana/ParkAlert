# ParkAlert


ParkAlert is a mobile app that helps NYC residents find their parked car and avoid parking tickets. With ParkAlert, you can save your parked car location and get reminders when you need to move your car due to alternative parking regulations.

## Getting Started
ParkAlert is a work in progress and is not yet available for download. However, you can follow the instructions below to set up the development environment and contribute to the project.

## Prerequisites
To work on ParkAlert, you'll need to have the following software installed on your computer:

- Node.js
- Yarn or npm
- Firebase CLI

## Installing
To install ParkAlert, you can clone the project repository from GitHub:
```
git clone https://github.com/your-username/parkalert.git
```
## Next, you'll need to install the dependencies by running:
```
yarn install
```
or

```
npm install
```

## Firebase Setup

ParkAlert uses Firebase for authentication. To set up Firebase with ParkAlert, you'll need to create a Firebase project and set up the Firebase Authentication service.

Here's how to get started:

1. Sign in to the Firebase console with your Google account.
2. Click the "Add project" button and follow the prompts to create a new Firebase project.
3. In the Firebase console, click on the "Authentication" tab and enable the "Email/Password" sign-in method.

Once you have set up Firebase, you can configure ParkAlert to use your Firebase project by updating the Firebase configuration in the src/firebase.js file. Instead of hardcoding your API keys in this file, we recommend using environment variables to keep your keys secure. You can create an .env file in the root of the project and store your Firebase configuration there, like this:
```
REACT_APP_FIREBASE_API_KEY=<your-api-key>
REACT_APP_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
REACT_APP_FIREBASE_PROJECT_ID=<your-project-id>
REACT_APP_FIREBASE_STORAGE_BUCKET=<your-storage-bucket>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your-messaging-sender-id>
REACT_APP_FIREBASE_APP_ID=<your-app-id>
REACT_APP_FIREBASE_MEASUREMENT_ID=<your-measurement-id>
```

## Contributing
We welcome contributions to ParkAlert! If you'd like to contribute, please fork the repository and submit a pull request.


