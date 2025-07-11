# 감사원 웹사이트 제작 프로젝트
* 한림대학교 박성미 교수님 연구실 (학부생)
* 개발 기간: 2025.07 ~ 2025.08
* 멤버: 홍윤이 (프론트엔드), 최다온, 양윤모 (백엔드)

## 프로젝트 정보
+ 감사원에서 요청 받은 자체 감사의 수치를 볼 수 있는 웹사이트를 개발합니다.
+ 주 기능은 데이터와 분석자료를 보는 것입니다.

## Skills
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)

## Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

## Library
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

## 프로젝트 기능
컴포넌트|	역할 및 기능	|사용 라이브러리
:---|:---:|---:
App.jsx|전체 라우팅 제어 (react-router-dom)|react-router-dom
Home.jsx|진입 선택 화면 (Main or Map으로 이동 버튼)|없음 (기본 JSX)
MainPage.jsx|Filtering + DataTable 묶음|없음 (자식 포함)
Filtering.jsx|연도, 카테고리 등 정렬 및 필터 조건 UI|없음 또는 MUI Select
DataTable.jsx|MUI DataGrid로 데이터 표시 + 엑셀 다운로드 버튼|MUI DataGrid, FileSaver.js 등
DataTableDetails.jsx|상세보기 페이지 (새 창 또는 모달), 하위에 SourceText & DetailsAnalysis 포함|없음
SourceText.jsx|JSON 원문 데이터 시각화|없음
DetailsAnalysis.jsx|JSON 분석 결과를 시각화|없음
View.jsx|지도와 분석 결과 좌우 배치 구성|없음
Map.jsx|지도 시각화|react-simple-maps, topojson-client
CitySelect.jsx|도시 선택 UI|없음
RegionSelect.jsx|구/군 선택 UI|없음
ViewAnalysis.jsx|차트 + 리스트 우측 패널	|없음
TopList.jsx|상위 10개 감사 항목 리스트|없음
ChartBar.jsx, etc|차트 종류별 시각화	|ApexCharts (react-apexcharts)
DownloadButton.jsx|	HWP, PDF, Excel 다운로드 기능|file-saver, jsPDF (PDF용)

## components 구조 요약
- App.jsx
  - Route "/"
    - Home.jsx (진입 선택 화면: Main / Map)
      - MainPage.jsx (데이터 분석 메인 페이지)
        - Filtering.jsx (연도/카테고리 필터)
        - DataTable.jsx (MUI DataGrid 테이블)
          - DataTableDetails.jsx (상세보기)
            - SourceText.jsx (원문 JSON 출력)
            - DetailsAnalysis.jsx (분석 JSON 출력)
      - View.jsx (지도 기반 시각화)
        - MapPanel
          - Map.jsx (지도 컴포넌트)
          - CitySelect.jsx (도시 선택)
          - RegionSelect.jsx (지역 선택)
        - AnalysisPanel
          - ViewAnalysis.jsx (분석 우측 패널)
          - TopList.jsx (감사 Top 10 리스트)
          - Charts
            - ChartBar.jsx
            - ChartLine.jsx
            - ChartDonut.jsx
            - ChartBar.jsx
            - ChartLine.jsx
            - ChartDonut.jsx

