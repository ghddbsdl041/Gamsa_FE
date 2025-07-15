import { DataGrid } from '@mui/x-data-grid'; 

export default function DataTable({data, isLoading, error}){
    //에러 처리
    if (error){
        return <div style = {{color: 'red'}}>오류 발생: {error}</div>;
    }
    //로딩 중일 때
    if (isLoading) {
        return <div>데이터를 불러오는 중입니다...</div>;
    }
    //컬럼 정의
    const columns = [
        { field: 'inspectionAgency', headerName: '감사실시기관', width: 160 },
        { field: 'dispositionRequest', headerName: '처분요구명', width: 160 },
        { field: 'relatedAgency', headerName: '관련기관', width: 180 },
        { field: 'auditResult', headerName: '감사결과', width: 100 },
        { field: 'category', headerName: '분야', width: 150 },
        { field: 'task', headerName: '업무', width: 120 },
        { field: 'summary', headerName: '요약', width: 400 },
        { 
            field: 'specialCase', 
            headerName: '특이사례', 
            width: 100,
            renderCell: (params) => (
                <span>{params.value === true ? '🟦' : ''}</span>
            )
        },
        {
            field: 'actions',
            headerName: '내용분석',
            width: 120,
            renderCell: () => (
                <button onClick={() => alert("상세보기 구현 예정")}>
                    상세보기
                </button>
            )
        }
    ];

    // 행(row) 정의: 고유 id 필드 필요
    const rows = data.map((item, index) => ({
        id: index, // 고유 ID 부여
        ...item
    }));

    return(
        <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={15}
                rowsPerPageOptions={[15]}
                pagination
                loading={isLoading}
                />

        </div>
    );
}