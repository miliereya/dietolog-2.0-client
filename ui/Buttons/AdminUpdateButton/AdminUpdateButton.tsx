import { FC } from "react"
import AdminButton from "../AdminButton/AdminButton"

const AdminUpdateButton: FC = () => {
    return (
		<AdminButton
			style={{
				marginTop: '50px',
				fontSize: '20px'
			}}
			text="Обновить"
		/>
	)
}

export default AdminUpdateButton