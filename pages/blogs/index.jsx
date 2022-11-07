import React from 'react'
import styles from "../../styles/Home.module.css"
import Head from 'next/head'

export default function Blogs() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Halaman Blogs</title>
                <meta name='deskripsi' content='ini adalah halaman blogs' />
            </Head>

            <h1>Halaman Blogs</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas sit inventore magni amet sapiente minus harum ex ea provident itaque dolores obcaecati quibusdam vel, nobis atque magnam praesentium explicabo. Molestiae.</p>
        </div>
    )
}
