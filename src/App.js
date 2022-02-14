import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import qs from "qs";
import axios from "axios";

import Nav from "./components/Nav";
import DisplayUsername from "./components/DisplayUsername";
import ArticlesContainer from "./components/ArticlesContainer";
import Article from "./components/Article";

const App = () => {

  let [categories, setCategories] = useState([]);
  let [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(`http://localhost:1337/api/categories?populate`);
      const data = await response.json();
      const array = data.data;
      setCategories(array);
    }
    const fetchArticles = async () => {
      const query = qs.stringify({
        populate: ['category', 'image'], 
      }, {
        encodeValuesOnly: true,
      });
      const response = await fetch(`http://localhost:1337/api/articles?${query}`);
      const data = await response.json();
      const array = data.data;
      setArticles(array);
    }
    const fetchAuthors = async () => {
      const { data } = await axios.post('http://localhost:1337/api/auth/local', {
      identifier: 'author@strapi.io',
      password: 'strapi',
      });

      console.log(data);
    }
    fetchCategories();
    fetchArticles();
    fetchAuthors();
    
  }, []);
  
  return (
    <div className="App">
      <Nav props={categories} />
      <DisplayUsername />
        <Routes>
          <Route path="/" element={<ArticlesContainer props={articles} />}/>
          <Route path="/category/:id" element={<ArticlesContainer props={articles} />}/>
          <Route path="/article/:id" element={<Article props={articles}/>}/>
        </Routes>
    </div>
  );
}

export default App;