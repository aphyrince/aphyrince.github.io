class DCCalTable {

    constructor(tableId, colN) {
        this.table = document.getElementById(tableId);
        this.colN = colN;
        this.btn = document.createElement("button");
        this.btn.innerHTML = "계산";
        this.setTable();
        this.table.appendChild(document.createElement("br"));
        this.table.appendChild(this.btn);
    }

    setTable() {
        this.setNRow();
        this.setRowNum();
        this.setRowInput();
        this.setBtnEvent();
    }

    makeRow() {
        const tr = document.createElement('tr');
        for (let i = 0; i < 7; i++) {
            const td = document.createElement("td");
            tr.appendChild(td);
        }

        return tr;
    }

    setNRow() {
        const N = this.colN;
        for (let i = 0; i < N; i++) {
            this.table.appendChild(this.makeRow());
        }
    }

    setRowNum() {
        const trs = this.table.children;
        for (let i = 1; i < trs.length; i++) {
            const tds = trs[i].children;
            tds[0].innerHTML = i;
        }
    }

    setRowInput() {
        const trs = this.table.children;
        for (let i = 1; i < trs.length; i++) {
            const tds = trs[i].children;
            let input = document.createElement("input");
            input.type = "number";
            tds[1].appendChild(input);
            input = document.createElement("input");
            input.type = "number";
            tds[3].appendChild(input);
            input = document.createElement("input");
            input.type = "number";
            tds[6].appendChild(input);
        }
    }

    setBtnEvent() {
        this.btn = document.createElement("button");
        this.btn.innerHTML = "계산";

        const trs = this.table.children;

        this.btn.addEventListener('click', () => {
            for (let i = 1; i < trs.length; i++) {
                const tds = trs[i].children;
                const T = Number(tds[1].firstChild.value);
                console.log(tds[1].firstChild);
                if (typeof T == "number") {
                    tds[2].innerHTML = 2 * 3.14 / T;
                }

                const V = Number(tds[3].firstChild.value);
                if (typeof V == "number") {
                    tds[4].innerHTML = V;
                    tds[5].innerHTML = V * 2 / 3.14;
                }
            }
        });
    }

    getBtn() {
        return this.btn;
    }
}