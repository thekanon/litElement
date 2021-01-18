function Menu() {
    // 여러 메서드를 정의할 수 있음
    this.menuJSON = [
        { title: 'foo', path: './components/HelloWorld.js', description:'머티리얼 디자인의 UI 샘플페이지' },
        { title: 'bar', path: './components/Vote/VoteList.js', description:'Vue 컴포넌트 재활용 샘플 페이지' },
        { title: 'test', path: './components/ErpPage/menu.js', description:'기능샘플리스트' },
        { title: 'test1', path: './components/ErpPage/gridSelect.html', description:'naw 샘플 페이지 클론' },
        { title: 'test2', path: './components/ErpPage/gridSearch.html', description:'Vue 거래 연동(조회, 공통코드), 그리드 이벤트 구현' },
        { title: 'test3', path: './components/ErpPage/litPage.js', description:'vue + lit element를 이용한 그리드+바인딩' },
        { title: 'test4', path: './components/ErpPage/ramGridTest.js', description:'4.1 기준 그리드 메서드 구현' },
        { title: 'test5', path: './components/ErpPage/searchTable.js', description:'searchTable(작성중)' },
    ]        
}
const menu = new Menu();
console.log(menu.menuJSON)
export {Menu}; // 변수를 내보냄

