export interface IAdminTableItem {
    _id: string
    title: string
    deleteHandler: (_id: string) => void
}