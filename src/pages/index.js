import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Olga Krzysztofik - Pink Jagnie</title>
        <meta name="description" content="Olga Krzysztofik - Pink Jagnie. Jestem frontend developerką z różnorodnym doświadczeniem. Opowiadam bez filtra o życiu programistki i kobiecej stronie w branży IT." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/myFavicon_48-48_square.png" />
      </Head>
      <main>
        <p>Hi</p> 
      </main>
    </>
  )
}
