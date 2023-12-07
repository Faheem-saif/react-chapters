import styles from "./fooditems.module.css"
import "bootstrap/dist/css/bootstrap.min.css"



export default function Fooditems() {
    const fooditem=["Apple","cucumber","Chico","Mango","Peanuts","Orange"]
  return (
    <div className={styles.fooditem}>

        {fooditem.map((item) => {return (
        <ul className="list-group">
        <li className="list-group-item">{item}</li>
        </ul> )

        })}

{/* 
        <ul className="list-group">
  <li className="list-group-item">An item</li>
  <li className="list-group-item">A second item</li>
  <li className="list-group-item">A third item</li>
  <li className="list-group-item">A fourth item</li>
  <li className="list-group-item">And a fifth one</li>
</ul> */}
      
    </div>
  )
}
