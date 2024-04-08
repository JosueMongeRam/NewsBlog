"use client";

import React, { useContext, useEffect, useState } from "react";
import { NewsProvider, NewsContext } from "./api/NewsProvider";
import { Dashboard } from "./components/Dashboard";
import { NewItem } from "./components/NewItem";
import { SmallPicture } from "./components/SmallPicture";

const PageComponent: React.FC = () => {
  const [titles, setTitles] = useState<Array<string>>(
    Array(12).fill("Cargando noticias...")
  );
  const [msjs, setMsjs] = useState<Array<string>>(Array(12).fill(""));

  const [authors, setAuthors] = useState<Array<string>>(Array(12).fill(""));
  const [img, setImg] = useState<Array<string>>(Array(12).fill(""));
  const [name, setName] = useState<Array<string>>(Array(12).fill(""));
  const [publiDate, setPubliDate] = useState<Array<string>>(Array(12).fill(""));

  return (
    <NewsProvider>
      <Dashboard title="Publicaciones" />
      <Content setTitles={setTitles} setMsjs={setMsjs} setImg={setImg} setName={setName} setPubliDate={setPubliDate} />
      {titles.map((title, index) => (
        <div key={index}>
          <NewItem key={index} title={title} msj={msjs[index]} />
          <SmallPicture src={img[index]} name={name[index]} publiDate={publiDate[index]} />
        </div>
      ))}
    </NewsProvider>
  );
};

const Content: React.FC<{
  setTitles: (titles: Array<string>) => void;
  setMsjs: (msjs: Array<string>) => void;
  setImg: (img: Array<string>) => void;
  setName: (name: Array<string>) => void;
  setPubliDate: (prof: Array<string>) => void;
}> = ({ setTitles, setMsjs, setImg, setName, setPubliDate }) => {
  const { news } = useContext(NewsContext);

  useEffect(() => {
    if (news.length > 0) {
      setTitles(news.map((item) => item.title));
      setMsjs(news.map((item) => item.content));
      setImg(news.map((item) => item.urlToImage));
      setName(news.map((item) => item.author));
      setPubliDate(news.map((item) => item.publishedAt));
    } else {
      setTitles(Array(12).fill("No hay noticias"));
      setMsjs(Array(12).fill("No hay contenido"));
      setImg(Array(12).fill(""));
      setName(Array(12).fill(""));
      setPubliDate(Array(12).fill(""));
    }
  }, [news]);

  return null;
};

export default PageComponent;
