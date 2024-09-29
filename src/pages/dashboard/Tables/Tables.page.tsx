import { Breadcrumb, DataTable, TableBasic } from "../../../components"

export const Tables = () => {
    return (
        <>
            <Breadcrumb pageName="Tables" />

            <div className="grid grid-cols-1 gap-4">
                <TableBasic />
                <DataTable />
            </div>
        </>
    )
}
