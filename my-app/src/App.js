import './Styles/App.css';
import Header from './Components/Header';
import SideNav from './Components/SideNav';
import Home from './Components/Home'

function App() {
  return (
    <div className="body">
      <Header />
      <div className="homePage">
        <SideNav />
        <Home />
      </div>
    </div>
  )
}

export default App;
