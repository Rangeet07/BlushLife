import styles from "@/app/styles/navbar.module.css"
import Image from "next/image"
import Link from "next/link"

import React from 'react'
import Nav from "@/app/components/Nav"

const Header = () => {
  return (
    <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
            <Link href="/">
                {/* <h1>La Blush Life</h1> */}
            {/* <Image src="/logo.png" alt="my logo image" width={150} height={40}/>  */}
            <Image src="/logo-no-background.png" alt="my logo image" width={150} height={40}/>
            </Link>
        </div>
    <Nav/>
    </header>
  )
}

export default Header