import CatagorySlice   from './CatagorySlice'
import CatagoryinfoList from './CatagoryinfoLIst'
import classes from './Catagory.module.css'
const Catagory = () => {
  return (
     <div className={classes.catagoryWrapper}>
        
        {CatagoryinfoList.map((datas, key) => (
           
           <CatagorySlice key={key} data={datas} />
        ))}
     </div>
    )
}

export default Catagory
