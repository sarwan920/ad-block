
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function AdBlock() {

    const defaultAdd={
        detect:'Detecting....',
        detecting:'Please Wait'
    }
    const [ state , setState ] = useState(defaultAdd) 
    setTimeout(()=>{
        setState({
            detect:'ADD BLOCK DETECTED!',
            detecting:'Please Refresh The page to continue!'
        })
    },5000)
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <img className={styles.img} src="/pngegg" />
                <p className={styles.detect}>{state.detect}</p>
                <p className={styles.adp}>{state.detecting}</p>
            </div>
        </div>

    )

}