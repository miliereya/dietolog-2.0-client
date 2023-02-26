import { useAdminCheck } from '@/hooks/useAdminCheck'
import NotAppliedConsultHelp from '@/modules/admin/read/NotAppliedConsultHelp/NotAppliedConsultHelp'
import { NextPage } from 'next'

const NotAppliedConsultHelpPage: NextPage = () => {
	const { isLoading } = useAdminCheck()

	return isLoading ? null : (
		<div className="admin-container">
			<NotAppliedConsultHelp />
		</div>
	)
}

export default NotAppliedConsultHelpPage
