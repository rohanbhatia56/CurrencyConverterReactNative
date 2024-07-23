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
![Screenshot_1721193372](https://github.com/user-attachments/assets/8de46bd2-805c-44ee-9e2c-a81b7ed56fcb)
![Screenshot_1721193403](https://github.com/user-attachments/assets/e146e841-5652-47ca-bf8d-75ff02e4ed34)
![Screenshot_1721193395](https://github.com/user-attachments/assets/644d8002-f611-488c-83d4-a20c14551ebd)
![Screenshot_1721193381](https://github.com/user-attachments/assets/614e637e-cf56-4eb0-abda-750c87b82a1d)