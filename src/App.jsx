// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav.jsx';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import LandingPage from './pages/LandingPage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import AnimalPage from './pages/AnimalPage/AnimalPage.jsx';
import { InMemoryCache, ApolloClient, ApolloProvider, HttpLink } from '@apollo/client'

function App() {
  const client = new ApolloClient({
    link: new HttpLink({ uri: "http://localhost:4000" }),
    cache: new InMemoryCache()
  })

  return (
    <div className="App">
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ApolloProvider client={client}>
          <Nav />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products/:slug" element={<CategoryPage />} />
            <Route path="/product/:slug" element={<AnimalPage />} />
          </Routes>
        </ApolloProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
