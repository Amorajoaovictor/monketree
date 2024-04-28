'use-client';
import Image from "next/image";
const links = [{url:"https://instagram.com",name:"@miaKhaliffa"},{url:"https://facebook.com",name:"@miaKhaliffa"},{url:"https://twitter.com",name:"@miaKhaliffa"}]
import Botao from "./components/home/button"; // Import IbtnProps from the "Botao" component
import { Button } from "@mui/material";
export default function Home() {
  return (
    <>
    <div className="relative m-auto">
      <Botao  props={{link:"https://instagram.com.br",name:"@miakhalifa"}}/>
    </div>
    </> 
  );
}

