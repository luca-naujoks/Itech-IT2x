import Head from "next/head"
import Image from "next/image"
import styles from "../styles/about_me.module.css"
import Link from "next/link"


export default function about_me() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Bobby68</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/Axolotl_Logo.png" />
            </Head>

      <main className={styles.main}>
      <div className={styles.navdiv}>
          <Link href="/">
            <img height="30" width={30} src="../assets/Navigation/Home.png" alt="Home" className={styles.test}/>
          </Link>
        
        <a href="/login">
          <img height="30" width={30} src="../assets/Navigation/login.png" alt="Login"/>
        </a>
      </div>

      <span className={styles.head}>
            <Image src="/assets/about_me/header_image.png" alt="Bobby68" width={1000} height={150} />
          </span>
      
          <div className={styles.social}>
              <h1>💬 &nbsp;My Socialmedia&nbsp; 💬</h1>
        <hr className={styles.hr}/>
            <a href="https://discord.com/users/528982743623925781" className={styles.socialmedia} target="_blank">
              <Image height="100" width={100} src="/assets/about_me/Discord_Logo.svg"/>
            </a>
            <a href="https://github.com/luca-naujoks" className={styles.socialmedia} target="_blank">
              <Image height="100" width={100} src="/assets/about_me/GitHub-Mark-Light-120px-plus.png"/>
            </a>
            <a href="https://stackoverflow.com/users/20371424/bobby68" className={styles.socialmedia} target="_blank">
              <Image height="100" width={100} src="/assets/about_me/Stack_Overflows.svg"/>
            </a>
        </div>

        <p className={styles.gif}>
            <Image src="/assets/about_me/sinon.gif" alt="Sinon" width={500} height={280}/>
          </p>
        
        <hr className={styles.hr}/>

        
        <h2 > 👨🏻‍💻 &nbsp;A Little Bit About Me And My Interests</h2>
 
            <div className={styles.info}>
                <p></p>
                <div className={styles.infotext}>
                    <p></p>
                        <br></br>
                        <div><span className={styles.pl_ent}>name</span>: <span className={styles.pl_s}>Luca Naujoks</span></div>
                        <div><span className={styles.pl_ent}>current_job</span>: <span className={styles.pl_s}>Specialist for system integration</span></div>
                        <p></p>
                        <span className={styles.pl_ent}>company</span>: <span className={styles.pl_s}>Thinformatics</span>
                        <p></p>
                        <div><span className={styles.pl_ent}>fields_of_interests</span>:</div>
                        <div><span className={styles.pl_s}>[</span></div>
                        <div><span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>Web Development<span className={styles.pl_pds}>"</span></span><span className={styles.pl_s}>,</span></div>
                        <div><span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>Data Science<span className={styles.pl_pds}>"</span></span><span className={styles.pl_s}>,</span></div>
                        <div><span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>Machine Learning<span className={styles.pl_pds}>"</span></span><span className={styles.pl_s}>,</span></div>
                        <div><span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>Game Development<span className={styles.pl_pds}>"</span></span><span className={styles.pl_s}>,</span></div>
                        <div><span className={styles.pl_s}>]</span></div>
                        <div><span className={styles.pl_ent}>technical_background</span>:</div>
                        <div><span className={styles.pl_s}>[</span></div>
                        <div> <span className={styles.pl_s}><span className={styles.pl_pds1}>"</span>IT system electronics technician<span className={styles.pl_pds}>"</span></span></div>
                        <div><span className={styles.pl_s}>]</span></div>
                        <div></div>
                        <div><span className={styles.pl_ent}>currently_learning</span>: <span className={styles.pl_s}>["Docker, Angular"]</span></div>
                        <div><span className={styles.pl_ent}>2022 Goals</span>: <span className={styles.pl_s}>["Learn Angular and progress in Docker"]</span></div>
                        <div><span className={styles.pl_ent}>hobbies</span>: <span className={styles.pl_s}>["Gaming", "Programming", "Firefighter", "Diving", "play with hardware"]</span></div>
                        <br></br>
                </div>
            </div>

            <hr className={styles.hr}/>

            <h2> 🚀 &nbsp;Some Tools / Languages I Use&nbsp; 🚀</h2>
              <p align="left">
                <Image src="/assets/about_me/vscode.svg" alt="vscode" width="45" height="45"/>
                <Image src="/assets/about_me/PyCharm.svg"
                alt="PyCharm" width="45" height="45"/>
                <Image src="/assets/about_me/IntelliJ.svg"
                alt="IntelliJ" width="45" height="45"/>
              </p>
              
              <p align="left">
                <Image src="/assets/about_me/docker.svg" alt="docker" width="45" height="45"/>
                <Image src="/assets/about_me/linux.svg" alt="linux" width="45" height="45"/>
                <Image src="/assets/about_me/Windows.png" alt="Windows" width="45" height="45"/>
                <Image src="/assets/about_me/Mac.png"
                alt="Mac OS/IOS" width="45"height="45"/>
              </p>
              
              <p align="left">
                <Image src="/assets/about_me/java.png" alt="java" width="45" height="45" />
                <Image src="/assets/about_me/python.svg" alt="python" width="45" height="45" />
                <Image src="/assets/about_me/javascript.svg" alt="javascript" width="45" height="45" />
                <Image src="/assets/about_me/html5.svg" alt="html" width="45" height="45"/>
                <Image src="/assets/about_me/css3.svg" alt="css3" width="45" height="45" />
              </p>
              
              <p align="left">
                <Image src="/assets/about_me/git.svg" alt="git" width="45" height="45"/>
                <Image src="/assets/about_me/mysql.svg" alt="mysql" width="45" height="45" />
              </p>
            <hr></hr>
              <h2>&lt;../&gt; Discord / Bots / Programming &lt;\..&gt;</h2>
 
            <div className={styles.info}>
                <p></p>
                <div className={styles.infotext}>
                    <p></p>
                        <br></br>
                        <div><span className={styles.pl_ent}>name</span>: <span className={styles.pl_s}>Bobby Bot / Bobby69</span></div>
                        <div><span className={styles.pl_ent}>current_job</span>: <span className={styles.pl_s}>Music Player, Croupier, Messaging Bot</span></div>
                        <p></p>
                        <span className={styles.pl_ent}>company</span>: <span className={styles.pl_s}>Bobby<sup>tm</sup></span>
                        <p></p>
                        <div><span className={styles.pl_ent}>fields_of_interests</span>:</div>
                        <div><span className={styles.pl_s}>[</span></div>
                        <div><span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>Music<span className={styles.pl_pds}>"</span></span><span className={styles.pl_s}>,</span></div>
                        <div><span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>Data Science<span className={styles.pl_pds}>"</span></span><span className={styles.pl_s}>,</span></div>
                        <div><span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>Pictures<span className={styles.pl_pds}>"</span></span><span className={styles.pl_s}>,</span></div>
                        <div><span className={styles.pl_s}><span className={styles.pl_pds1}> "</span>Anime<span className={styles.pl_pds}>"</span></span><span className={styles.pl_s}>,</span></div>
                        <div><span className={styles.pl_s}>]</span></div>
                        <div><span className={styles.pl_ent}>software</span>:</div>
                        <div><span className={styles.pl_s}>[</span></div>
                        <div> <span className={styles.pl_s}><span className={styles.pl_pds1}>"</span>Python<span className={styles.pl_pds}>"</span></span></div>
                        <div><span className={styles.pl_s}>]</span></div>
                        <div></div>
                        <div><span className={styles.pl_ent}>currently_learning</span>: <span className={styles.pl_s}>["Text with Humans"]</span></div>
                        <div><span className={styles.pl_ent}>hobbies</span>: <span className={styles.pl_s}>["Watching Obi-Wan on Disney+", "Play Music"]</span></div>
                        <div><span className={styles.pl_ent}>Link</span>: <span className={styles.pl_s}>You can Get my Bot</span><a href="https://discord.com/oauth2/authorize?client_id=864513968935927809&permissions=8&scope=bot" target="blank" className={styles.pl_s}> here</a></div>
                        <br></br>
                </div>
            </div>
        </main>
        </div>
    )
    
}