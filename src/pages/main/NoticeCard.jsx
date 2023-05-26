import { Link, useNavigate } from 'react-router-dom';
import { CardWrapper, SimpleCard } from '../../components/card';
import { Table, TableHeader, TableRow } from '../../components/table';
import React, { useState, useEffect } from 'react';
import axios from "axios";

const CardTitle = () => {
    const nevigate = useNavigate();
    const onClicked = () => {
        nevigate('/notice');
    };
    return (
        <TableHeader onClick={onClicked}>
            <div>Title</div>
        </TableHeader>
    );
}

const CardRow = ({ uid, msg }) => {
    const nevigate = useNavigate();

    const onClicked = () => {
        nevigate('/notice/' + uid);//여기 경로 수정해주기
    };
    return (
        <TableRow onClick={onClicked}>
            <div>{msg}</div>
        </TableRow>
    );
};

export const NoticeCard = () => {
    const baseUrl = "http://localhost:18030";
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        // 서버에서 공지 데이터 가져오는 API 호출
        getNotices();
    }, []);

    async function getNotices() {
        try {
            const response = await axios.get(baseUrl + '/api/notice');
            console.log(response);
            setNotices(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <CardWrapper multiline="true">
            <SimpleCard height="20rem" title="Notice Card">
                <Table>
                    <CardTitle>
                    </CardTitle>
                    {notices.map((notice) => (
                        <CardRow uid={notice.uid} msg={notice.title} />
                    ))}
                </Table>
            </SimpleCard>
        </CardWrapper>
    );
};