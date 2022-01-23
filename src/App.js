import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import ArtistPage from './pages/ArtistPage/ArtistPage';
import AlbumPage from './pages/AlbumPage/AlbumPage';
import SearchPage from './pages/SearchPage/SearchPage';
import FavoritePage from './pages/FavoritePage/FavoritePage';

function App() {
  return (
    <Router>
      <header class="navbar navbar-light bg-light" >
        <Link  to="/">
          <a class="nav-link">
              Home
          </a>
        </Link>
        <Link to="/favorite">
          <a class="nav-link">
              Favorites
          </a>
        </Link>
        <Link to="/search" >
          <a class="nav-link">
              Search
          </a>
        </Link>
      </header>
      <Switch>
        <Route path="/album/:id">
          <AlbumPage/>  
        </Route>
        <Route path="/favorite">
          <FavoritePage/>
        </Route>
        <Route path="/search">
          <SearchPage/>
        </Route>
        <Route path="/">
          <ArtistPage/>
        </Route>
      </Switch>
      <footer class="navbar navbar-light bg-light">
            <h4>LC037 - Kezia Gloria Lie</h4>
      </footer>
    </Router>
  ) 
}

export default App;
