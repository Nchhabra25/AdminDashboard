import React from 'react';
import css from './Statistics.module.css';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { groupNumber  } from '../../assets/Data';
import Statisticschart from '../StatisticsChart/Statisticschart';
const Statistics = () => {
  return (
    <div className={`${css.container} theme-container`}>
        <span className={css.title}>
            Overview statistics
        </span>
        <div className={`${css.cards} grey-container`}>
                <span className={css.arrowIcon}>
                    <AiOutlineArrowUp/> 
                </span>
                <div className={css.card}>
                    <span> Top item this month</span>
                    <span> Office comps</span>
                </div>
                <div className={css.card}>
                    <span>Items</span><span>$ {groupNumber(455)}</span>
                </div>

                <div className={css.card}>
                    <span>Profit</span><span>$ {groupNumber(370000)}</span>
                </div>

                <div className={css.card}>
                    <span>Daily Average</span><span>$ {groupNumber(2000)}</span>
                </div>
            </div>
            <Statisticschart/>
        </div>
  )
}

export default Statistics
