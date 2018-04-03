# react-native-lifecycle-methods

### Following are the Lifecycle Methods in React Native

**componentWillMount** is executed before rendering, on both the server and the client side.

**componentDidMount** is executed after the first render only on the client side. This is where AJAX requests and DOM or state updates should occur. This method is also used for integration with other JavaScript frameworks and any functions with delayed execution such as setTimeout or setInterval.

**componentWillReceiveProps** is invoked as soon as the props are updated before another render is called.

**shouldComponentUpdate** should return true or false value. This will determine if the component will be updated or not.

**componentWillUpdate** is called just before rendering.

**componentDidUpdate** is called just after rendering.

**componentWillUnmount** is called after the component is unmounted from the DOM.

In this example application, I will set the initial state in the constructor function. The `incrementNumber` is used to update the state of the number, increasing it. `toggleCounter` mounts and unmounts the component.

## Running the app in your system
1. Install [**React Native**](https://facebook.github.io/react-native/docs/getting-started.html) into your  system

2. Download and Install `Expo XDE` from [**Here**](https://docs.expo.io/versions/latest/introduction/installation.html) *(Also install iOS Simulator or a Mobile Client for your respective device)*

3. Clone the repository onto your local environment:
```bash
git clone https://github.com/yashovardhanagrawal/react-native-lifecycle-methods.git
```

4. Install the dependencies using:
```
npm install
```
or
```
yarn install
```

5. Open `Expo XDE` and click on `Open Existing Project`, then navigate to your cloned repository.

6. Click on `Device` and run on iOS Simulator *(or Android)* or `Share` and scan the QR Code on your device with the **Expo Client**.
