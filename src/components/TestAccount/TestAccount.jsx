import React from 'react'

import styles from './TestAccount.module.scss'

const TestAccount = () => {
	return (
		<div className={styles.testAccount}>
			<h3 className={styles.title}>Test account</h3>
			<div className={styles.credentials}>
				<div className={styles.username}>
					<span>Username: </span>test
				</div>
				<div className={styles.password}>
					<span>Password: </span>12345
				</div>
			</div>
		</div>
	)
}

export default TestAccount
