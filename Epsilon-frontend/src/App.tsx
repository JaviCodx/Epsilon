import { Routess } from './routers/index'
import { ThemeContextProvider } from './contexts/ThemeContexts'




function App() {


  return (
    <ThemeContextProvider>
      <Routess />  
    </ThemeContextProvider>
  )
}

export default App
