'use client'

import React from 'react'
import styles from "@/app/styles/navb.modules.css"
import {CgCloseR, CgMenu} from "react-icons/cg";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from 'next/link'
import {useState} from "react";


const Navb = () => {
    const [openMenu, setOpenMenu] = useState(false);

  return (
    // <nav>
    //     <ul className={styles.sidebar}>
    //         <li><Link href="/" >Services</Link></li>
    //         <li><Link href="/movie" >Portfolio</Link></li>
    //         <li><Link href="/about" >About Me</Link></li>
    //         <li><Link href="/contact" >Contact</Link></li>
    //         <li><Link href="/" >FAQ</Link></li>

    //     </ul>
    //     {/* <ul>
    //         <li><Link href="">Services</Link></li>
    //         <li><Link href="">Portfolio</Link></li>
    //         <li><Link href="">About Me</Link></li>
    //         <li><Link href="">Contact</Link></li>
    //         <li><Link href="">FAQ</Link></li>

    //     </ul> */}
    //       {/* //nav icon */}
    //       {/* <div className={styles['mobile-navbar-btn']}>
    //                     <CgMenu
    //                         name="menu-outline"
    //                         className={styles['mobile-nav-icon']}
    //                         onClick={() => setOpenMenu(true)}
    //                     />
    //                     <CgCloseR
    //                         name="close-outline"
    //                         className={`${styles['mobile-nav-icon']} ${styles['close-outline']}`}
    //                         onClick={() => setOpenMenu(false)}
    //                     />
    //                 </div> */}
    // </nav>
    <>
    <nav >
				{/* <a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a> */}
                <div className={openMenu ? `${styles.active}` : "" }>   

                <ul className={styles.navbarList}>
                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href="/" onClick={() => setOpenMenu(false)}>
                        Home
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href="/about" onClick={() => setOpenMenu(false)}>
                        About
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href="/movie" onClick={() => setOpenMenu(false)}>
                        Portfolio
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href="/contact" onClick={() => setOpenMenu(false)}>
                        Contact
                    </Link>
                </li>
            </ul>
				<button
                    className={`${styles['nav-btn']} ${styles['nav-close-btn']}`}
					onClick={() => setOpenMenu(true)}>
					<FaTimes />
				</button>
            </div>
			</nav>
			<button
                className={styles['nav-btn']}
				onClick={() => setOpenMenu(true)}>
				<FaBars />
			</button>
    </>
  )
}

export default Navb