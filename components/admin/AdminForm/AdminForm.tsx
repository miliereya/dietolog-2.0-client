import { FC, useRef } from 'react'
import s from './AdminForm.module.scss'
import { useAdminForm } from './useAdminForm'

const AdminForm: FC = () => {
	const { login } = useAdminForm()

	const loginRef = useRef<HTMLInputElement>(null)
	const passwordRef = useRef<HTMLInputElement>(null)

	const loginHandler = () => {
		if (loginRef.current && passwordRef.current) {
			login({
				login: loginRef.current.value,
				password: passwordRef.current.value,
			})
		}
	}

	return (
		<div className={s.form}>
			<input ref={loginRef} placeholder="Login" />
			<input ref={passwordRef} placeholder="Password" />
			<button onClick={loginHandler}>Sign in</button>
		</div>
	)
}

export default AdminForm
