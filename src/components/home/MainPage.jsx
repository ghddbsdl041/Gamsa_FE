import { Category } from '@mui/icons-material';
import {useState} from 'react';
import Filtering from './Filtering';
import DataTable from '../dataTable/DataTable';

export default function MainPage(){
    //상태 정의
    const [filters, setFilters] = useState({
        agency: '',
        type: '',
        startDate: '',
        endDate: '',
        category: '',
        task: '',
        specialCase: '',
        keyword: '',
    });
    //데이터 상태
    const [data, setData] = useState([]);
    //로딩(서버 요청 중) / 에러(서버 요청 중 에러 메세지 발생) 상태
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    //로직: 조회 버튼 클릭 > 필터 조건을 서버에 요청 > 데이터 받기 > DataTable에 전달
    const handleSearch = async () => {
        try{
            setIsLoading(true);
            setError(null);

            const queryString = Object.entries(filters) //객체를 배열로 바꾸는 함수
                .filter(([_, val]) => val != "")    //filters 객체의 모든 항목 중, value가 빈 문자열이 아닌 것만 통과시킴. 선택 안 된 항목은 ""이므로, 제거
                .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
                .join("&");

            const res = await fetch(`/api/audits${queryString ? "?" + queryString : ""}`);  //서버 요청. queryString이 비어있으면(필터 안 했을 때) 기본 전체 요청(/api/audits)이 되고, 값이 있으면 뒤에 붙음

            if (!res.ok) throw new Error("서버 응답 실패"); //응답코드가 200(성공)이 아니라면 에러 발생시킴. catch 블록으로 자동 이동

            const result = await res.json();
            setData(result);    //성공한 데이터 저장. JSON 형태로 응답 받으면 data에 저장. DataTable에 props로 전달
        } catch (err){  //서버 요청 실패 시 이쪽으로
            setError(err.message || "알 수 없는 오류 발생");    //에러 메시지 저장
            setData([]);    //이전 데이터 초기화
        } finally {
            setIsLoading(false);    //어떤 결과든 무조건 마지막에 로딩 상태 종료 시킴
        }
    };

    return(
        <div>
            <h2>자체감사 현황</h2>
            {/* 자식 컴포넌트 자리 */}
        </div>
    )
}
