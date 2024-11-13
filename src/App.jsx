import MyProvider from "./context/MyProvider";
import Router from "./shared/Router";

const App = () => {
  return (
    <MyProvider>
      <Router />
    </MyProvider>
  );
};

export default App;
