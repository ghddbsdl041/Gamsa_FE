import agencies from '../../data/agencies.json';

export default function Filtering(filters, setFilters, onSearch, onReset, onStateChange, selectedStateId, stateList, agencyOptions){
    // 1. 필터 항목 공통 핸들러
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFilters(prev => ({   //중괄호 쓰면 리턴 사용해야 하니까 괄호로 묶음? 아님 객체라서 중괄호를 괄호로 감싼 거임?
            ...prev,
            [name]: value
        }));
    };

    return(
        <div>
            <h3>필터 조건</h3>
            {/* 광역자치단체(도시) 선택 */}
            <label>광역자치단체</label>
            <select value = {selectedStateId} onChange = {onStateChange}>
                <option value="">전체</option>
                {stateList.map((state) => (
                    <option key = {state.stateId} value = {state.stateId}>{state.stateName}</option>
                ))}
            </select>

             {/* 검사실시기관 선택 */}
            <label>감사실시기관</label>
            <select name="agency" value={filters.agency} onChange={handleChange}>
                <option value="">전체</option>
                {agencyOptions.map((agency) => (
                    <option key={agency.agencyId} value={agency.agencyName}>{agency.agencyName}</option>
                ))}
            </select>

            {/* 기타 필터: type, category 등 */}
            <label>감사 유형</label>
            <input name="type" value={filters.type} onChange={handleChange}/>

            <label>카테고리</label>
            <input name="category" value={filters.category} onChange={handleChange}/>

            <label>업무</label>
            <input name="task" value={filters.task} onChange={handleChange}/>

            <label>특수 사례</label>
            <input name="specialCase" value={filters.specialCase} onChange={handleChange}/>

            <label>키워드</label>
            <input name="keyword" value={filters.keyword} onChange={handleChange}/>

            {/* 날짜는 필요 시 date picker 라이브러리 연동 가능 */}
            <label>시작일</label>
            <input type="date" name="startDate" value={filters.startDate} onChange={handleChange}/>

            <label>종료일</label>
            <input type="date" name="endDate" value={filters.endDate} onChange={handleChange}/>

            {/* 버튼 */}
            <div>
                <button onClick={onSearch}>조회</button>
                <button onClick={onReset}>초기화</button>
            </div>
        </div>
    );
}