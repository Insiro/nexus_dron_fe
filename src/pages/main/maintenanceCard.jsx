import { CardWrapper, SimpleCard } from '../../components/card';
import { Table, TableHeader, TableRow } from '../../components/table';
export const MaintenanceCard = () => (
    <CardWrapper multiline="true">
        <SimpleCard height="20rem" title="점검필요">
            <Table>
                <TableHeader>
                    <div>Name</div>
                    <div>message</div>
                </TableHeader>
                <TableRow>
                    <div>Drone 1</div>
                    <div>Scheduled Maintenance</div>
                </TableRow>
            </Table>
        </SimpleCard>
    </CardWrapper>
);
