import { Link, useNavigate } from 'react-router-dom';
import { CardWrapper, SimpleCard } from '../../components/card';
import { Table, TableHeader, TableRow } from '../../components/table';

const CardRow = ({ id, msg }) => {
    const nevigate = useNavigate();
    const onClicked = () => {
        nevigate('/notice');//여기 경로 수정해주기
    };
    return (
        <TableRow onClick={onClicked}>
            <div>Drone {id}</div>
            <div>{msg}</div>
        </TableRow>
    );
};

export const NoticeCard = () => (
    <CardWrapper multiline="true">
        <SimpleCard height="20rem" title="Notice Card">
            <Table>
                <TableHeader>
                    <div>Title</div>
                    <div>contents</div>
                </TableHeader>
                <CardRow id="1" msg="Scheduled Maintenance" />
            </Table>
        </SimpleCard>
    </CardWrapper>
);
