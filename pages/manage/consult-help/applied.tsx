import { useAdminCheck } from '@/hooks/useAdminCheck'
import AppliedConsultHelp from '@/modules/admin/read/AppliedConsultHelp/AppliedConsultHelp'
import { NextPage } from 'next'

const NotAppliedConsultHelpPage: NextPage = () => {
	const { isLoading } = useAdminCheck()

	return isLoading ? null : (
		<div className="admin-container">
			<AppliedConsultHelp />
		</div>
	)
}

export default NotAppliedConsultHelpPage
