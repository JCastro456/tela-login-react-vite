import GlobalStyle from "./styles/global.jsx";
import RoutesApp from "./routes/index.jsx";
import { AuthProvider } from "./contexts/auth";

function App() {
  
  return (
    <>
      <AuthProvider> 
         <RoutesApp />
         <GlobalStyle />
      </AuthProvider>         
    </>
  )
}

export default App
