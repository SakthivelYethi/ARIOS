import React from 'react'
import "./sidebar.css"
import Logo from "../../imgs/logo.png"

import { SidebarData } from '../../Data/Data'

import { UilSignOutAlt } from "@iconscout/react-unicons"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const [selected, setSelected] = useState(0);
    const navigate = useNavigate();

    React.useEffect(() => {
       
        const activePath = document.location.pathname;
        console.log("Path is " + activePath);
        if (activePath == '/dashboard') {
            setSelected(0);
        } else if(activePath == '/application') {
            setSelected(1);
        }else if(activePath == '/functions') {
            setSelected(2);
        }
      }, []);

  return (
    <>
        <div className="Sidebar">
            <div className="logo">
                <img src={Logo} alt="" />
                <span>A R <span>I </span>O S</span>
            </div>

            <div className="menu">
                {SidebarData.map((item, index) => {
                    return (
                        <div className={selected === index?'menuItem active':'menuItem'}
                        key={index}
                        onClick={() => {
                            setSelected(index);
                            navigate(item.url);
                        }}
                        url={item.url}
                        selectedindex={index}
                        >
                            <item.icon />
                            <span selectedindex={index} url={item.url}>{item.heading}</span>
                        </div>
                    )
                })}

                <div className="menuItem">
                    <UilSignOutAlt />
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Sidebar