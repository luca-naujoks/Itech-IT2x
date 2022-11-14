import Head from 'next/head'
import Image from 'next/image'
import styles from './styles/nooble.module.css'
import Link from 'next/link'
import Script from 'next/script'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bobby68</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Axolotl_Logo.png" />
      </Head>
      <main className={styles.main}>
    
      <div className={styles.navdiv}>
          <Link href="/" className={styles.navback}>
            <img height="30" src="../assets/Navigation/Home.png" alt="Home"/>
          </Link>
        <h1 className={styles.headline}> Nooble </h1>
        <div>
        <Link href="https://github.com/Filipza/LF3" className={styles.navback}>
            <img height="42" src="../assets/nooble/git.png" alt="git"/>
          </Link>
          <button href="/login" className={styles.nav}>
            <img height="40" src="../assets/Navigation/login.png" alt="Login" />
          </button>
        </div>
      </div>
      <br></br>
      <hr className={styles.hr}/>
      <br></br>



    <div className={styles.card}>

    
       <div className={styles.info}>
        <div className={styles.infohead}><h2>LF1</h2></div>
        <div className={styles.infotext}>

        </div>
       </div>
      

      
      
       <div className={styles.info}>
        <div className={styles.infohead}><h2>LF2 </h2></div>
        <div className={styles.infotext}>
              
        </div>
       </div>
    

    
    <Link href="/nooble/LF3">
      <div className={`${styles.info} ${styles.canclick}`} >
       <div className={styles.infohead}><h2>LF3 Networking</h2></div> 
        <div className={styles.infotext}>
              <div><span className={styles.pl_ent}>berufsschule</span>: <span className={styles.pl_s}>Itech BS 14</span></div>
              <br></br>
              <div><span className={styles.pl_ent}>date</span>: <span className={styles.pl_s}>05.10-08.10.22, 24.10-10.11.22</span></div>
              <br></br>
              <div><span className={styles.pl_ent}>fields_of_interests</span>:</div>
              <div><span className={styles.pl_s}>[</span></div>
              <div><span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>Web Development<span className={styles.pl_pds}>"</span></span><span className={styles.pl_s}>,</span></div>
              <div><span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>Networking<span className={styles.pl_pds}>"</span></span><span className={styles.pl_s}>,</span></div>
              <div><span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>Programming<span className={styles.pl_pds}>"</span></span><span className={styles.pl_s}>,</span></div>
              <div><span className={styles.pl_s}>]</span></div>
              <div><span className={styles.pl_ent}>technical_devices</span>:</div>
              <div><span className={styles.pl_s}>[</span></div>
              <div> <span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>Rraspberry pis (4)<span className={styles.pl_pds}>"</span></span></div>
              <div> <span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>managed ethernet switch<span className={styles.pl_pds}>"</span></span></div>
              <div><span className={styles.pl_s}>]</span></div>
              <div><span className={styles.pl_ent}>products</span>:</div>
              <div><span className={styles.pl_s}>[</span></div>
              <div> <span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>functional Network<span className={styles.pl_pds}>"</span></span></div>
              <div> <span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>ipv4 calculator<span className={styles.pl_pds}>"</span></span></div>
              <div> <span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>Next js website<span className={styles.pl_pds}>"</span></span></div>
              <div><span className={styles.pl_s}>]</span></div>
              <br></br>
        </div>
       </div>
      </Link>
      
    
</div>


    <div className={styles.card}>
    
      <div className={styles.info}>
       <div className={styles.infohead}><h2>LF4 </h2></div> 
        <div className={styles.infotext}>

        </div>
       </div>
      

      
      <Link href="/nooble/LF5">
      <div className={`${styles.info} ${styles.canclick}`} >
        <div className={styles.infohead}><h2>LF5 Database</h2></div>
        <div className={styles.infotext}>
              <div><span className={styles.pl_ent}>berufsschule</span>: <span className={styles.pl_s}>Itech BS 14</span></div>
              <br></br>
              <div><span className={styles.pl_ent}>zeitraum</span>: <span className={styles.pl_s}>15.06-06.07.22</span></div>
              <br></br>
              <div><span className={styles.pl_ent}>themen aus dem lernfeld</span>:</div>
              <div><span className={styles.pl_s}>[</span></div>
              <div><span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>programm development<span className={styles.pl_pds}>"</span></span><span className={styles.pl_s}>,</span></div>
              <div><span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>SQL datenbanken kontrollieren<span className={styles.pl_pds}>"</span></span><span className={styles.pl_s}>,</span></div>
              <div><span className={styles.pl_s}>]</span></div>
              <div><span className={styles.pl_ent}>techische geräte</span>:</div>
              <div><span className={styles.pl_s}>[</span></div>
              <div> <span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>Rraspberry pis (3)<span className={styles.pl_pds}>"</span></span></div>
              <div><span className={styles.pl_s}>]</span></div>
              <br></br>
              <div><span className={styles.pl_ent}>resultate</span>:</div>
              <div><span className={styles.pl_s}>[</span></div>
              <div> <span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>funktionsfähige datenbank<span className={styles.pl_pds}>"</span></span></div>
              <div> <span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>programm zur kontrolle der datenbank<span className={styles.pl_pds}>"</span></span></div>
              <div> <span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>python<span className={styles.pl_pds}>"</span></span></div>
              <div><span className={styles.pl_s}>]</span></div>
              <br></br>
        </div>
       </div>
    </Link>

    
       <div className={styles.info}>
        <div className={styles.infohead}><h2>LF6 Database</h2></div>
        <div className={styles.infotext}>

        </div>
       </div>
      
    </div>



    <div className={styles.card}>
    <Link href="/nooble/LF7">
    <div className={`${styles.info} ${styles.canclick}`} >
        <div className={styles.infohead}><h2>LF7 Cyberphysische Systeme</h2></div>
        <div className={styles.infotext}>
              <div><span className={styles.pl_ent}>berufsschule</span>: <span className={styles.pl_s}>Itech BS 14</span></div>
              <br></br>
              <span className={styles.pl_ent}>date</span>: <span className={styles.pl_s}>---</span>
              <br></br>
              <div><span className={styles.pl_ent}>fields_of_interests</span>:</div>
              <div><span className={styles.pl_s}>[</span></div>
              <div><span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>Programm Development<span className={styles.pl_pds}>"</span></span><span className={styles.pl_s}>,</span></div>
              <div><span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>Hardware<span className={styles.pl_pds}>"</span></span><span className={styles.pl_s}>,</span></div>
              <div><span className={styles.pl_s}>]</span></div>
              <div><span className={styles.pl_ent}>technical_devices</span>:</div>
              <div><span className={styles.pl_s}>[</span></div>
              <div> <span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>---<span className={styles.pl_pds}>"</span></span></div>
              <div><span className={styles.pl_s}>]</span></div>
              <br></br>
              <div><span className={styles.pl_ent}>products</span>:</div>
              <div><span className={styles.pl_s}>[</span></div>
              <div> <span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>---<span className={styles.pl_pds}>"</span></span></div>
              <div> <span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>---<span className={styles.pl_pds}>"</span></span></div>
              <div> <span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>---<span className={styles.pl_pds}>"</span></span></div>
              <div><span className={styles.pl_s}>]</span></div>
              <br></br>
        </div>
       </div>
      </Link>

      
      
       <div className={styles.info}>
        <div className={styles.infohead}><h2>LF8 Database</h2></div>
        <div className={styles.infotext}>

        </div>
       </div>
    

      
       <div className={styles.info}>
        <div className={styles.infohead}><h2>LF9 Database</h2></div>
        <div className={styles.infotext}>

        </div>
       </div>
      
    </div>
    
    <h2 className={styles.special}>Ausbildungs Spezifisch</h2>
    <hr className={styles.hr}/>

    <div className={styles.card}>
    
      <div className={styles.info}>
       <div className={styles.infohead}><h2>LF10 Networking</h2></div> 
        <div className={styles.infotext}>

        </div>
       </div>
 

      
 
       <div className={styles.info}>
        <div className={styles.infohead}><h2>LF11 Database</h2></div>
        <div className={styles.infotext}>

        </div>
       </div>

      
       <div className={styles.info}>
        <div className={styles.infohead}><h2>LF12 Database</h2></div>
        <div className={styles.infotext}>

        </div>
       </div>
      
    </div>
      </main>
    </div>
  )

}