import React from 'react'
import styles from "../../styles/Home.module.css"
import Head from 'next/head'

// 
export default function About({ blogData }, props) {

    // menampilkan output
    // console.info(props)

    return (
        <div className={styles.container}>
            <Head>
                <title>Halaman About</title>
                <meta name='deskripsi' content='Ini adalah halaman about' />
            </Head>

            <h1>Halaman About</h1>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, quas? Debitis atque reprehenderit doloribus cumque quia voluptatum? Eligendi omnis fuga corrupti non quis inventore ut! Omnis ipsum incidunt dolore dolorum.</p> */}

            {/* menampilkan data di browser*/}
            <table className='w-full mt-6'>
                <thead className='h-12 bg-slate-100 font-medium text-center px-2 border-spacing-2'>
                    <tr>
                        <th>No</th>
                        <th>Judul</th>
                        <th>Dekripsi</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogData.map((e, i) => (
                        <tr key={e.id}>
                            <td>{i + 1}</td>
                            <td>{e.title}</td>
                            <td>{e.body}</td>
                            <td>
                                <div>
                                    <button>Detail</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

// untuk function asyncronous api data fetching
export async function getStaticProps(context) {

    // menampilkan output yang biasanya digunakan untuk menangkap params, query
    // console.info(context)

    // memanggil api data fetching
    const result = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    // mengubah ke dalam json
    const data = await result.json()

    // mengembalikan tipe data object dengan properti props
    return {
        props: {
            blogData: data,
            // context: context
        }
    }
}
