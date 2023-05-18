import { Link, useNavigate } from 'react-router-dom';
import { CardWrapper, SimpleCard } from '../../components/card';
import { Table, TableHeader, TableRow } from '../../components/table';
const CardRow = ({ id, msg }) => {
    const nevigate = useNavigate();
    const onClicked = () => {
        nevigate('/drons/' + id);
    };
    return (
        <TableRow onClick={onClicked}>
            <div>Drone {id}</div>
            <div>{msg}</div>
        </TableRow>
    );
};

export const MaintenanceCard = () => (
    <CardWrapper multiline="true">
        <SimpleCard height="20rem" title="점검필요">
            <Table>
                <TableHeader>
                    <div>Name</div>
                    <div>message</div>
                </TableHeader>
                <CardRow id="1" msg="Scheduled Maintenance" />
            </Table>
        </SimpleCard>
    </CardWrapper>
);
