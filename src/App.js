import "./App.css";
import Card from "./componenents/Card";
import { ThemeProvider } from "./Context";

function App() {
  return (
    <ThemeProvider>
      <div
        class="bg-flat min-h-screen
          bg-custom-purple
        p-2 pb-20 "
      >
        <Card />
      </div>
    </ThemeProvider>
  );
}

export default App;
