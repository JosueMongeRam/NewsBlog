"use client"

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface NewsContextProps {
  news: any[];
}

interface NewsProviderProps {
  children: ReactNode;
}

// Crear el contexto
export const NewsContext = createContext<NewsContextProps>({ news: [] });

// Crear el proveedor
export const NewsProvider: React.FC<NewsProviderProps> = ({ children }) => {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get('https://newsapi.org/v2/top-headlines?country=us&apiKey=2c07802f7f7a49979bf1a9bb1c737125&pageSize=12')
      .then((response) => setNews(response.data.articles))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ news }}>
      {children}
    </NewsContext.Provider>
  );
};