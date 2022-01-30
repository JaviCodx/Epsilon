//theme
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './styled/global.style';
function App() {


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        Epsilon App 🖥 🔥
      </div>
      
    </ThemeProvider>
  )
}

export default App
