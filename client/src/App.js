import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar'
import { observer } from 'mobx-react-lite';
import Footer from './components/footer'


const App = observer(() => {
  return (
    <BrowserRouter>
        <Navbar />
        <AppRouter />
        <Footer />
    </BrowserRouter>
  )
})

export default App;
