import React from "react";
import css from './Layout.module.css';
import moment from "moment";
import {BiSearch} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
import Sidebar from "../sidebar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
const Layout = () => {
  const { pathname } = useLocation()
  return (
    <div className={css.container}>
        <div className="sidebar"><Sidebar/> </div>
        {pathname === "/" && <Navigate to="/dashboard" />}
        <div className={css.dashboard}>
            <div className={css.topBaseGradients}>
                <div className="gradient-red"></div>
                <div className="gradient-orange second"></div>
                <div className="gradient-blue third"></div>
            </div>
            <div className={css.header}>
              <span>{moment().format("dddd,Do MMM YYYY")}</span>
              <div className={css.searchBar}>
                <BiSearch size={30} className={css.icon}/>
                <input type="text" placeholder="Search" className={css.search}/>
              </div>
              <div className={css.profile}>
              <CgProfile size={30}/>
              <div className={css.details}>
              <span>Demo Person</span>
              <span>demoperson@mail.com</span>
              </div>
              </div>
            </div>
            <div className={css.content}>
          <Outlet />
        </div>
        </div>
    </div>
        
  )
}

export default Layout
