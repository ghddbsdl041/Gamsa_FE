import {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid'; 

export default function DataTable(){
    // ✅ 현재 페이지(paginationModel)의 상태: 페이지 번호(page), 한 페이지에 보여줄 행 수(pageSize)
    const [paginationModel, setPaginationModel] = useState({page: 0, pageSize: 5});

    // ✅ DataGrid에 표시할 컬럼 정의 (각 컬럼은 field명과 headerName으로 구성)
    const columns = [
        { field: "inspectionAgency", headerName: "검사실시기관", width: 130 },
        { field: "dispositionRequest", headerName: "처분요구명", width: 130 },
        { field: "relatedAgency", headerName: "관련기관", width: 130 },
        { field: "auditResult", headerName: "감사결과", width: 130 },
        { field: "category", headerName: "분야", sortable: false, width: 130 },
        { field: "task", headerName: "업무", sortable: false, width: 130 },
        { field: "summary", headerName: "요약", width: 130 },
        { field: "specialCase", headerName: "특이사례", sortable: false, width: 130 },
        { field: "contentAnalysis", headerName: "내용분석", width: 130 },
    ];

    // ✅ rows: 테이블에 렌더링할 실제 데이터 (각 행은 고유 id를 포함해야 함)
    const rows = [
        { id: 1, inspectionAgency: "기관A", dispositionRequest: "처분1", relatedAgency: "관련A", auditResult: "결과1", category: "행정", task: "업무1", summary: "요약1", specialCase: "사례1", contentAnalysis: "분석1" },
        { id: 2, inspectionAgency: "기관B", dispositionRequest: "처분2", relatedAgency: "관련B", auditResult: "결과2", category: "건설", task: "업무2", summary: "요약2", specialCase: "사례2", contentAnalysis: "분석2" },
        { id: 3, inspectionAgency: "기관C", dispositionRequest: "처분3", relatedAgency: "관련C", auditResult: "결과3", category: "복지", task: "업무3", summary: "요약3", specialCase: "사례3", contentAnalysis: "분석3" },
        { id: 4, inspectionAgency: "기관D", dispositionRequest: "처분4", relatedAgency: "관련D", auditResult: "결과4", category: "재정", task: "업무4", summary: "요약4", specialCase: "사례4", contentAnalysis: "분석4" },
        { id: 5, inspectionAgency: "기관E", dispositionRequest: "처분5", relatedAgency: "관련E", auditResult: "결과5", category: "환경", task: "업무5", summary: "요약5", specialCase: "사례5", contentAnalysis: "분석5" },
        { id: 6, inspectionAgency: "기관F", dispositionRequest: "처분6", relatedAgency: "관련F", auditResult: "결과6", category: "교통", task: "업무6", summary: "요약6", specialCase: "사례6", contentAnalysis: "분석6" },
        { id: 7, inspectionAgency: "기관G", dispositionRequest: "처분7", relatedAgency: "관련G", auditResult: "결과7", category: "문화", task: "업무7", summary: "요약7", specialCase: "사례7", contentAnalysis: "분석7" },
        { id: 8, inspectionAgency: "기관H", dispositionRequest: "처분8", relatedAgency: "관련H", auditResult: "결과8", category: "교육", task: "업무8", summary: "요약8", specialCase: "사례8", contentAnalysis: "분석8" },
        { id: 9, inspectionAgency: "기관I", dispositionRequest: "처분9", relatedAgency: "관련I", auditResult: "결과9", category: "보건", task: "업무9", summary: "요약9", specialCase: "사례9", contentAnalysis: "분석9" },
        { id: 10, inspectionAgency: "기관J", dispositionRequest: "처분10", relatedAgency: "관련J", auditResult: "결과10", category: "국방", task: "업무10", summary: "요약10", specialCase: "사례10", contentAnalysis: "분석10" },
        { id: 11, inspectionAgency: "기관K", dispositionRequest: "처분11", relatedAgency: "관련K", auditResult: "결과11", category: "안전", task: "업무11", summary: "요약11", specialCase: "사례11", contentAnalysis: "분석11" },
        { id: 12, inspectionAgency: "기관L", dispositionRequest: "처분12", relatedAgency: "관련L", auditResult: "결과12", category: "행정", task: "업무12", summary: "요약12", specialCase: "사례12", contentAnalysis: "분석12" },
        { id: 13, inspectionAgency: "기관M", dispositionRequest: "처분13", relatedAgency: "관련M", auditResult: "결과13", category: "건설", task: "업무13", summary: "요약13", specialCase: "사례13", contentAnalysis: "분석13" },
        { id: 14, inspectionAgency: "기관N", dispositionRequest: "처분14", relatedAgency: "관련N", auditResult: "결과14", category: "복지", task: "업무14", summary: "요약14", specialCase: "사례14", contentAnalysis: "분석14" },
        { id: 15, inspectionAgency: "기관O", dispositionRequest: "처분15", relatedAgency: "관련O", auditResult: "결과15", category: "재정", task: "업무15", summary: "요약15", specialCase: "사례15", contentAnalysis: "분석15" },
        { id: 16, inspectionAgency: "기관P", dispositionRequest: "처분16", relatedAgency: "관련P", auditResult: "결과16", category: "환경", task: "업무16", summary: "요약16", specialCase: "사례16", contentAnalysis: "분석16" },
        { id: 17, inspectionAgency: "기관Q", dispositionRequest: "처분17", relatedAgency: "관련Q", auditResult: "결과17", category: "교통", task: "업무17", summary: "요약17", specialCase: "사례17", contentAnalysis: "분석17" },
        { id: 18, inspectionAgency: "기관R", dispositionRequest: "처분18", relatedAgency: "관련R", auditResult: "결과18", category: "문화", task: "업무18", summary: "요약18", specialCase: "사례18", contentAnalysis: "분석18" },
        { id: 19, inspectionAgency: "기관S", dispositionRequest: "처분19", relatedAgency: "관련S", auditResult: "결과19", category: "교육", task: "업무19", summary: "요약19", specialCase: "사례19", contentAnalysis: "분석19" },
        { id: 20, inspectionAgency: "기관T", dispositionRequest: "처분20", relatedAgency: "관련T", auditResult: "결과20", category: "보건", task: "업무20", summary: "요약20", specialCase: "사례20", contentAnalysis: "분석20" }
    ];
    
    return(
        <div style = {{height: 400, width: "100%"}}>
            <DataGrid
                rows={rows} // ✅ 테이블에 출력할 데이터
                columns={columns} // ✅ 컬럼 정의
                paginationModel={paginationModel} // ✅ 페이지 모델 상태 전달 (현재 페이지 번호, 페이지당 행 수)
                onPaginationModelChange={setPaginationModel} // ✅ 사용자가 페이지 변경 또는 행 개수 변경 시 실행되는 콜백. 내부적으로 setPaginationModel을 호출해 paginationModel을 업데이트
                //rowsPerPageOptions={[5, 10, 20, 100]} // ✅ 드롭다운으로 보여줄 페이지당 행 수 옵션
                pagination // ✅ 드롭다운으로 보여줄 페이지당 행 수 옵션 (필수)
            />
        </div>
    );
}

/*
rows - 테이블에 표시할 데이터 배열 (id 필수)
columns - 각 컬럼의 구성 정보 (field, headerName, width , sortable 등)
pagination - 페이지네이션 UI 활성화
paginationModel - 현재 페이지 정보 (객체로 {page, pageSize})
paginationModelChange - 페이지 변경 시 호출되는 콜백
rowsPerPageOptions - 페이지당 행 수 옵션 목록 (드롭다운)
*/