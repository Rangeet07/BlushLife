import React from 'react'
import heroStyles from "@/app/styles/herosection.module.css"
import styles from "@/app/styles/common.module.css"
import Link from 'next/link'
import Image from 'next/image'
import { Mulish } from 'next/font/google'
 
const mulish = Mulish({
  weight: ['300','400','500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})


const Herosection = ({title, imageUrl}) => {
  return (
    <main className={heroStyles.main_section}>
                    <div className={styles.container}>
                        <div className={styles.grid_two_section}>
                            <div className={heroStyles.hero_content}>

                            <h1>{title}</h1>
                        {/* <p> From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse
                            our
                            selection of the latest and greatest movies, and find your new favorite today.
                        </p> */}
                        <p>Based predominantly in Perth but have traveled beyond the metro region for pre-weddings too. Angie is seasoned in Bridal makeup and hairdo as well as various makeovers for a variety of occasions. Among her specialty is eye enhancement and natural makeup to bring out your inner beauty.</p>
                        <Link href="/contact">
                            <button className={mulish.className} >
                                Book Now
                            </button>
                        </Link>



                            </div>


                            <div className={heroStyles.hero_image}>
                        <Image src="/brush.png" alt="watching netflix" width={500} height={500}/>
                    </div>
                        </div>
                    </div>
                    <div className={heroStyles['custom-shape-divider-bottom-1681647578']}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className={heroStyles["shape-fill"]}></path>
                </svg>
            </div>
    </main>
  )
}

export default Herosection