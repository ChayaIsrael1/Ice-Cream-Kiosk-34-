import { useState } from 'react';
import styles from './FlavorCard.module.css' 

function FlavorCard({ name, isSoldOut, scoopsSelected = 0, scoop = 1,isGlobalLimitReached, onScoopChange, onSoldOut}) {

    const [scoops, setScoopsSelected] = useState(scoopsSelected);
    
    const outOfStock = isSoldOut || scoops >= scoop;

    const handleAdd = () => {
        if (scoop > scoops && !outOfStock && ! isGlobalLimitReached)
            {setScoopsSelected(scoops+1)
            onScoopChange((prev)=>{return prev+1})
            if (scoop == scoops+1)
                onSoldOut(name, true ,scoops+1)
        }
        } 

    const handleRemove = () => {
        if(scoops > 0)        
        {setScoopsSelected((scoops) => {return scoops-1; })
    onScoopChange((prev)=>{return prev-1})}
    }
  
    return (
        <article className={`${styles.FlavorCards} ${outOfStock ? styles["is-sold-out"] : ""}`}>
            <h2>{name}</h2>
            {outOfStock ? <h3>sold out</h3> : null}
            <h3>Amount of scoops selected: {scoops}</h3>
            <button onClick={handleAdd} disabled={outOfStock || isGlobalLimitReached}>Add +</button>
            <button onClick={handleRemove} disabled={outOfStock || scoops === 0}>Remove -</button>
        </article>
    )
}

export default FlavorCard

