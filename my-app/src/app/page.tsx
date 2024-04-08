import Image from "next/image";
import { NewsProvider } from "./api/NewsProvider";
import { Component } from "react";

export default function Home() {
  return (
    <NewsProvider>
      <div>
        
      </div>
    </NewsProvider>
  );
}
