import React,{useState} from 'react'
import css from './Dashboard.module.css'
import {cardsData,groupNumber} from '../../assets/Data'
import Statistics from '../../components/statistics/Statistics'
import Orders from '../../components/orders/Orders'
import Datachart from '../../components/Datachart'
const Dashboard = () => {
  const [selectedDuration, setSelectedDuration] = useState('1 week');
  const handleSelectChange = (event) => {
    setSelectedDuration(event.target.value);
  };
  const selectedData = cardsData[selectedDuration];
  console.log(selectedDuration)
  return (
    <div className={css.container}>
      <div className={css.dashboard}>
      <div className={`${css.dashboardHead} theme-container`}>
        <div className={css.head}>
          <span>dashboard</span>
          <div className={css.durationButton}>
            <select value={selectedDuration} onChange={handleSelectChange}>
              <option value="1 week">1 week</option>
              <option value="1 month">1 month</option>
              <option value="1 year">1 year</option>
            </select>
          </div>
        </div>
        <div className={css.data}>
        <div className={css.cards}>
            {
              selectedData && selectedData.map((card,index)=>{
                return(
                <div className={css.card}>
                  <div className={css.cardHead}>
                    <span>
                      {card.title}
                    </span>
                    <span>
                      +{card.change}
                    </span>
                  </div>
                  <div className={css.cardAmount}>
                    <span>$</span>
                    <span>{groupNumber(card.amount)}</span>
                  </div>
                </div>)
              })
            }
          </div>
          <div className={css.chart}>
          <Datachart/>
          </div>
        </div>
        </div>
        <Statistics/>
      </div>
        <Orders/>
    </div>
  )
}

export default Dashboard
