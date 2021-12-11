import Link from 'next/link'
import styles from "./Follower.module.css";
export default function Followers({item})
{
    // console.log( props.results)
    return (
        <div className={styles.followerslistContainer}>
                  <div className={styles.followerItem} >
                        <img src={item.picture.large}/>
                        <div className={styles.followersDetails}>
                            <div className={styles.followerItemName}>
                                <h4>{item.name.first}</h4> <h4>{item.name.last}</h4>
                            </div>
                            <p>{item.login.username}</p>
                        </div>
                    </div>
          
           <div className={styles.todoFooter}>
                <Link href="/" >Go Back</Link>
            </div>
        </div>
    )
}
