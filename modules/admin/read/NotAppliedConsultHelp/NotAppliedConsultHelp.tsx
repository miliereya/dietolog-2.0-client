import AdminConsultHelpItem from '@/components/admin/AdminConsultItem/AdminConsultHelpItem'
import AdminNavbar from '@/components/admin/AdminNavbar/AdminNavbar'
import AdminHeading from '@/ui/Headings/AdminHeading/AdminHeading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { useNotAppliedConsultHelp } from './useNotAppliedConsultHelp'

const NotAppliedConsultHelp: FC = () => {
	const { isLoading, ConsultHelps, toggleConsultHelp, deleteConsultHelp } =
		useNotAppliedConsultHelp()

	return isLoading ? null : (
		<Meta title="Not applied ConsultHelps">
			<AdminNavbar />
			<AdminHeading text="Не подтвержденные помощь-консультации" />
			{ConsultHelps.map((c) => (
				<AdminConsultHelpItem
					deleteConsultHelp={deleteConsultHelp}
					consultHelp={c}
					key={c._id}
					apply={toggleConsultHelp}
				/>
			))}
		</Meta>
	)
}

export default NotAppliedConsultHelp
