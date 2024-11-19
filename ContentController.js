class ContentController {
    constructor() {
        this.nav = document.getElementById("nav");
        this.content = document.getElementById("content");

        for (let i = 0; i < this.nav.children.length; i++) {
            this.nav.children[i].addEventListener('click', () => {
                // 모든 페이지를 'hide' 클래스를 추가하여 숨김
                for (let page of this.content.children) {
                    page.classList.add('hide');
                }

                // 클릭된 메뉴에 해당하는 페이지를 보이도록 설정
                const pageIndex = i;
                const activePage = this.content.children[pageIndex];
                activePage.classList.remove('hide');
            });
        }
    }
}
