import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import qs from "qs";

import Nav from "./components/Nav";
import ArticlesContainer from "./components/ArticlesContainer";
import Articles from "./components/Articles"
import Article from "./components/Article";
import SignUp from "./components/Auth/SignUp";

const App = () => {

  let [categories, setCategories] = useState([]);
  let [articles, setArticles] = useState([]);

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

    fetchCategories();
    fetchArticles();
    
  }, []);


  
  return (
          <Routes>
            <Route path="/" element={<Nav props={categories}/>}>
              <Route path="/" element={<ArticlesContainer props={articles} />} >
                <Route path="category/:id" element={<Articles  props={articles}/>} />
              </Route>
              <Route path="article/:id" element={<Article props={articles} />}/>
              <Route path="signup" element={<SignUp />}/>
            </Route>
          </Routes>
  );
}

export default App;