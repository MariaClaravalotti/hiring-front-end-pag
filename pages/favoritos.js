import styles from "@/styles/Home.module.css";
 import {useState} from "react" 

export default function Favoritos (){
    return(
        <section className="favs">
        <div>
        <img id="car"src="hb2.jpg"/>
        <button>REMOVER</button>
        </div>
        <div>
        <img id="car" src="bmw2.jpg"/>
        <button>REMOVER</button>
        </div>

        </section>
    )
}


