import AdminConsultHelpItem from '@/components/admin/AdminConsultItem/AdminConsultHelpItem'
import AdminNavbar from '@/components/admin/AdminNavbar/AdminNavbar'
import AdminHeading from '@/ui/Headings/AdminHeading/AdminHeading'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { useAppliedConsultHelp } from './useAppliedConsultHelp'

const AppliedConsultHelp: FC = () => {
	const { isLoading, consultHelps, toggleConsultHelp, deleteConsultHelp } =
		useAppliedConsultHelp()

	return isLoading ? null : (
		<Meta title="applied consultHelp">
			<AdminNavbar />
			<AdminHeading text="Подтвержденные помощь-консультации" />
			{consultHelps.map((c) => (
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

export default AppliedConsultHelp
