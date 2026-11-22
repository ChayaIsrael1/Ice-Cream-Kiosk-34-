import { useState } from 'react';
import styles from './FlavorList.module.css';
import FlavorCard from '../FlavorCard/FlavorCard.jsx';
import OrderSummary from '../OrderSummary/OrderSummary.jsx';
import NoticeArea from '../NoticeArea/NoticeArea.jsx'

function FlavorList({ flavorslist = [], scoopLimit = 5, initialShowOnlyAvailable = false }) {
    const [showOnlyAvailable, onshowChange] = useState(initialShowOnlyAvailable)

    const [flavors,setFlavors] = useState(()=>flavorslist.map(flavor => {
        const isOut = flavor.scoopsSelected >= flavor.scoop|| flavor.isSoldOut;
        return { name: flavor.name, isSoldOut: isOut, scoopsSelected: flavor.scoopsSelected }
    }))

    const [totalScoops, onScoopChange] = useState(flavors.reduce((sum, flavor) => { return sum + flavor.scoopsSelected }, 0))
    
     function onSoldOut(name, outOfStock, scoopsSelected) {
         setFlavors((prevFlavors)=>{
        return prevFlavors.map((flavor)=> {
            return flavor.name == name ? {  ...flavor, isSoldOut: outOfStock ,scoopsSelected : scoopsSelected} : flavor
        })})

    }
    const displayFlavors = showOnlyAvailable ?
    flavors.filter((flavor) => { if (!flavor.isSoldOut) { return true } }) : flavors
        
    const limitReached = displayFlavors.length == 0 ? true : false


    return (
        <article >
            <section  className={styles.FlavorList} >
            {displayFlavors.map((flavor) => { return <FlavorCard key={flavor.name} name={flavor.name} isSoldOut={flavor.isSoldOut} scoopsSelected={flavor.scoopsSelected} isGlobalLimitReached={totalScoops >= scoopLimit} onScoopChange={onScoopChange} onSoldOut ={onSoldOut}/> })}
            </section>
            <OrderSummary totalScoops={totalScoops} />
            <NoticeArea totalScoops={totalScoops} limitReached={limitReached} scoopLimit={scoopLimit} />
            <br />
            <label className={styles.switch}>
                <span >Show All</span>
                <input
                    type="checkbox"
                    checked={showOnlyAvailable}
                    onChange={() => onshowChange(prev => !prev)}
                />
                <span className={styles.slider}></span>
                <span >Show only available</span>
            </label>
        </article>
    )
}

export default FlavorList