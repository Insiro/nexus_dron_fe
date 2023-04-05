import { CardWrapper, SimpleCard } from '../../components/card';
import { Table, TableHeader, TableRow } from '../../components/table';
export const ActivityCard = () => (
    <CardWrapper multiline="true">
        <SimpleCard height="20rem" title="Activity Card">
            <Table>
                <TableHeader>
                    <div>Category</div>
                    <div>Count</div>
                </TableHeader>
                <TableRow>
                    <div>Charging</div>
                    <div>1</div>
                </TableRow>
            </Table>
        </SimpleCard>
    </CardWrapper>
);
