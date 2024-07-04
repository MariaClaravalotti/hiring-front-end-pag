import styles from "@/styles/Home.module.css";
import {useState} from "react" 
 
    
    const ItemList = () =>{
        const [items,setItems]= useState([
            {id:1 , name:"item 1", img:"gm.png"},
            { id:2 , name:"item 1", img:"bmw2.jpg"},
            { id:3 , name:"item 1", img:"hb2.jpg"}
        ]);
        const removeItem = (id)=>{
            setItems(items.filter(item=>item.id !== id));
        }
    

    return(
        <main >
        <ul className={styles.itemList}>
            {items.map(item=>(
                <li className={styles.item} key={item.id}>
                    <img src={item.img} alt={item.name}/>
                    {item.img}<button onClick={()=> removeItem(item.id)}>Remover</button>
                </li>
            ))}
        </ul>
        </main>
    )
}

 export default ItemList

