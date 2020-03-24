import React from 'react'
import cl from'./Header.module.css'


export const Header = () => {

    return (
        <div className={cl.header}>
            <div className={cl.logo}>
                <img src="https://cdn3.sportngin.com/attachments/photo/7734/8653/Spartans_2100_1300_large.png" />
            </div>
        </div>
    )

}