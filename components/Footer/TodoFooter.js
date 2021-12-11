import React from 'react'
import Link from 'next/link'
import styles from "./Todo.module.css";

function TodoFooter({
    numberOfIncompleteTasks
}) {
    return (
        <div className={styles.todoFooter}>
            <p>{numberOfIncompleteTasks} {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left</p>
            <Link href="/follower"><a>Followers</a></Link>
        </div>
    )
}

export default TodoFooter