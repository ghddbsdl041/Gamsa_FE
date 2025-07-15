import agencies from '../../data/samplefilter.json';

export default function Filtering({
  filters,
  setFilters,
  onSearch,
  onReset,
  onStateChange,
  selectedStateId,
  agencyOptions
}) {
    // 1. 필터 항목 공통 핸들러
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFilters(prev => ({   // 화살표 함수의 리턴 값을 객체로 지정할 때 괄호로 감싸는 문법. 객체를 명시적으로 반환하기 위해 괄호로 감싼 것.
            ...prev,
            [name]: value
        }));
    };

    /* 
    중복 제거된 지역 목록
    const uniqueStates = [...new Set(agencies.map(item => item.stateName))];

    선택된 지역(stateName)에 따라 해당 지역의 기관 목록 필터링
    const filteredAgencies = agencies
        .filter(item => item.stateName === selectedState)
        .map(item => item.agencyName);
    */

    // stateId 기준으로 고유한 state 목록 생성
    const stateList = agencies.reduce((acc, cur) => {
        const exists = acc.find(item => item.stateId === cur.stateId);
        if (!exists) acc.push({ stateId: cur.stateId, stateName: cur.stateName });
        return acc;
    }, []);
    

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
                    <option key={agency.agencyId} value={agency.agencyId}>{agency.agencyName}</option>
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