import { ChatProvider } from "./context/ChatContext";
import Home from "./pages/Home";

const App = () => {
  return (
    <ChatProvider>
      <Home />
    </ChatProvider>
  );
};

export default App;
