This is a new [**React Native**](https://reactnative.dev) project. A mobile app for currency conversion. 
The App allows user to convert the currencies based on the exchanges rates predefined in the application also implemented CRUD operation in the application.
 
## Start the Metro Server
 
First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.
 
To start Metro, run the following command from the _root_ of your React Native project:
 
```bash
# using npm
npm start
 
# OR using Yarn
yarn start
```
 
## Start your Application
 
Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:
 
### For Android
 
```bash
# using npm
npm run android
 
# OR using Yarn
yarn android
```
 
### For iOS
 
```bash
# using npm
npm run ios
 
# OR using Yarn
yarn ios
```
 
If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.
 
### For Test case run
 
```bash
# using npm
npm run test
```
## Description
  This App supports the following currency:
  INR, GBP, AUD, CAD, Euro & USD
 
  This has following features:
  1. Converts the currencies based on the exchanges rates predefined in the application.
  2. Allows user to select a default currency from the pool of above mentioned currencies. 
  2. Saves history of the past conversion. 
  3. This works in offline mode.
 
## Test Cases Covered
 CurrencyHelper(5 test cases)
    √ populateCurrencyConversion - should return correct conversions for India 
    √ populateCurrencyConversion - should return correct conversions for USA
    √ populateCurrencyConversion - should return correct conversions for CA
    √ populateCurrencyConversion - should return empty array for unknown country 
    √ getConversionRate - should return correct conversion rates
 
## Screenshots
![Screenshot 2024-07-23 174132](https://github.com/rohanbhatia56/CurrencyConverterReactNative/blob/main/Screenshot%202024-07-23%20174132.png)
![Screenshot 2024-07-23 175009](https://github.com/rohanbhatia56/CurrencyConverterReactNative/blob/main/Screenshot%202024-07-23%20175009.png)
![Screenshot 2024-07-23 175055](https://github.com/rohanbhatia56/CurrencyConverterReactNative/blob/main/Screenshot%202024-07-23%20175055.png)
![Screenshot 2024-07-23 175131](https://github.com/rohanbhatia56/CurrencyConverterReactNative/blob/main/Screenshot%202024-07-23%20175131.png)


Screenshot 2024-07-23 175009.png
screen shots added
3 minutes ago
Screenshot 2024-07-23 175055.png
screen shots added
3 minutes ago
Screenshot 2024-07-23 175131.png