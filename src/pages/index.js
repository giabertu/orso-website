import Head from 'next/head'
import Image from 'next/image'
import { Inter, Pacifico, Rubik } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const pacifico = Pacifico({ subsets: ['latin'], weight: '400'})
const rubik = Rubik({subsets: ['latin'], weight: '400'})

export default function Home() {
  return (
    <>
      <Head>
        <title>Lorenzo Orsini</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={rubik.className}>
        <div style={{width: '100%', display:"flex", justifyContent: 'space-evenly', color: 'white'}} className='header-div'>
          <div style={{maxWidth: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
            <h1 className={pacifico.className} style={{fontSize: '3rem', textAlign: 'center'}}>Lorenzo Orsini</h1>
            <h2>Terapista a domicilio</h2>
            <p>Lorenzo professa come fisioterapista dal 2019</p>
          </div>
          <Image
            src="/next.svg"
            width={300}
            height={300}
            alt="logo"
          />
        </div>
        <div style={{position: 'relative', width: '100%'}}>
          <div className='image-p-container'>
          <Image
              src="/physiotherapy.svg"
              width={250}
              height={250}
              alt="logo"
              />
            <p>askjdfl;aksdjflaksdjflaksdjflaksdjfalskdjfa laksjdflakjsdflk alsjdfalkjf</p>
          </div>
          {/* <img src='/new-wave-bottom.svg' style={{}}/> */}
        </div>
        <div className='image-p-container'>
          <p>askjdfl;aksdjflaksdjflaksdjflaksdjfalskdjfa laksjdflakjsdflk alsjdfalkjf</p>
          <Image
            src="/hospital-reception.svg"
            width={250}
            height={250}
            alt="logo"
          />
        </div>
      </main>
    </>
  )
}
