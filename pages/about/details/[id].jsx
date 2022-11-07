import React from "react"
import Head from "next/head"
import styles from "../../../styles/Home.module.css"

// menampilkan detail about => /about/details/id
export default function Details() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Halaman Detail About</title>
                <meta name="deskripsi" content="Halaman Detail About" />
            </Head>

            <h1>Halaman Detail About</h1>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        path: [
            { params: { id: "1" } }
        ],
        fallback: false
    }
}

export async function getStaticProps(ctx) {

    const { params } = await ctx;
    // menampilkan output
    console.info(params)

    return {
        props: {
            data: {
                username: "Muzik"
            }
        }
    }
}
