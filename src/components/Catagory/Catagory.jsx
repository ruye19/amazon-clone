import CatagorySlice   from './CatagorySlice'
import CatagoryinfoList from './CatagoryinfoLIst'


const Catagory = () => {
  return (
     <div className="catagoryWrapper">
        {CatagoryinfoList.map((datas, key) => (
            <CatagorySlice key={key} data={datas} />
        ))}
     </div>
    )
}

export default Catagory
