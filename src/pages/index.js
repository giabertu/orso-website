import Head from 'next/head'
import Image from 'next/image'
import { Inter, Pacifico, Rubik } from 'next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
const pacifico = Pacifico({ subsets: ['latin'], weight: '400'})
const rubik = Rubik({subsets: ['latin'], weight: '400'})

export default function Home() {

  const [count, setCount] = useState(0)

  const rotatePars = [
    <div key={count} className='fade-in-up' style={{display: 'flex', gap: '0.5rem'}}>
      {/* <img src='/physical-therapy.svg' style={{width: '1.5rem'}}/> */}
      <h2>Terapista a domicilio</h2>
    </div>,
    <div key={count} className='fade-in-up' style={{display: 'flex', gap: '0.5rem'}}>
      <img src='/location-sign.svg' style={{width: '1.5rem'}}/><h2>Bologna e provincia</h2>
    </div>
  ]

  useEffect(()=> {
    const intervalId = setInterval(() => {
      console.log('updating count!')
      setCount(prev => prev+1)
    }, 3000)

    return () => {
      clearInterval(intervalId);
    };
  }, [])

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
            {/* <h2>Terapista a domicilio</h2> */}
            {/* <p>Lorenzo e scarso a cod dalla nascita</p> */}
                {rotatePars[count % 2]}
          </div>

          <div className='headshot-div fade-in hover-scale' style={{width: '300px', height: '300px',  borderRadius: '50%'}}>
            <Image
              src="/main-headshot-2.png"
              width={300}
              height={300}
              alt="logo"
              />
          </div>
        </div>

        <img src='/shape-dividers/side-triangle-bottom.svg' style={{transform: 'translateY(0.5rem)'}} />

        <div style={{width: '100%', backgroundColor: 'white', padding: '0rem'}}>
          <div className='image-p-container'>
          <Image
              src="/physiotherapy.svg"
              width={250}
              height={250}
              alt="logo"
              />
              {/* <img  src='/back-shot.png' style={{width: '20rem'}}/> */}
            <p style={{color: 'black'}}>askjdfl;aksdjflaksdjflaksdjflaksdjfalskdjfa laksjdflakjsdflk alsjdfalkjf</p>
          </div>
        </div>

        <img src='/shape-dividers/side-triangle-top.svg' />

        <div style={{width: '100%', padding: '1rem'}}>
          <div className='image-p-container'>
            <p>askjdfl;aksdjflaksdjflaksdjflaksdjfalskdjfa laksjdflakjsdflk alsjdfalkjf</p>
            <Image
              src="/hospital-reception.svg"
              width={350}
              height={350}
              alt="logo"
              />
          </div>
        </div>

        <img src='/shape-dividers/paint-brush-bottom.svg' style={{transform: 'translateY(0.5rem)'}} />

        <div style={{width: '100%', padding: '1rem', backgroundColor: 'white', color: 'black'}}>

          <h2 style={{textAlign: 'center', padding: '1rem'}}>Cosa dicono i clienti</h2>
          <div className='image-p-container stretch'>
            <div className='review-card'>
                <h3>Giovanna C.</h3>
                <img src="/star-rating.svg" className='stars'/>
                <p>Fisioterapista molto giovane ma con professionalità pari ad esperti del settore da diversi anni. Mi hanno colpito fin da subito la sua gentilezza ed il modo di operare mirato alla risoluzione del problema</p>
            </div>

            <div className='review-card'>
                <h3>Victor Manuel M.</h3>
                <img src="/star-rating.svg" className='stars'/>
                <p>Lorenzo è un professionista puntuale, attento ed educato. Si è anche interessato all'evoluzione del mio mal di schiena dopo la sessione, il quale è molto migliorato seguendo le sue indicazioni.</p>
            </div>

            <div className='review-card'>
                <h3>Luca A.</h3>
                <img src="/star-rating.svg" className='stars'/>
                <p> [...] Professionale e attento alle esigenze del paziente. Grazie al suo approccio mirato, sono tornato a svolgere le mie attività quotidiane con tranquillità e senza dolori. Un'esperienza positiva!</p>
            </div>

          </div>
        </div>
        <img src='/shape-dividers/paint-brush-top.svg' style={{transform: 'translateY(-0.5rem)'}} />
        <div style={{width: '100%', padding: '1rem'}}>
          <div className='image-p-container'>
            
            <div className='headshot-div fade-in hover-scale' id='backshot' style={{width: 250, height: 255, borderRadius: '50%'}}>
                <img src='/back-shot-cropped.png' style={{width: 250, margin: 0, padding: 0}}/>
            </div>
              <p>Contattatemi bastardi!</p>
          </div>
        </div>
      </main>
    </>
  )
}
