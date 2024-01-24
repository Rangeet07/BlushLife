import React from 'react'
import styles from "@/app/styles/common.module.css"
import InstaCard from "@/app/components/InstaCard";

const Movie = async () => {
    
    await new Promise(resolve => setTimeout(resolve, 2000));
const url = process.env.RAPID_KEY;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '55e6e4d453msh2c3a9c82acd732cp141c8fjsn580ec8d16f01',
    'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
  }
};

const res = await fetch(url, options);
const data = await res.json()
const main_data = data.edges;
console.log(data);
  return (
    <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Portfolio</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <InstaCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>    
    </>
  )
}

export default Movie