
class Content {
    constructor(containerId) {
        this.frq = 60;
        this.dgrFrq = 0;
        this.R = 0;
        this.L = 0;
        this.C = 0;
        this.containerId = containerId;
        this.container = document.getElementById(this.containerId);

        this.Ex1Table;
        this.Ex2Table;
        this.Ex3Table;
        this.Ex4Table;
        this.Ex5Table;
    }

    makeNRow(table, row, col) {
        for (let i = 0; i < row; i++) {
            table.appendChild(this.makeNCol(col));
        }
    }

    makeNCol(n) {
        const tr = document.createElement("tr");
        for (let i = 0; i < n; i++) {
            const td = document.createElement("td");
            tr.appendChild(td);
        }
        return tr;
    }

    setRowNum(table) {
        const child = table.children;
        for (let i = 1; i < child.length; i++) {
            const tds = child[i].children;
            tds[0].innerHTML = i;
        }
    }

    setRowInput(table, nums) {
        const trs = table.children;

        for (let i = 1; i < trs.length; i++) {
            const tds = trs[i].children;
            for (let num of nums) {
                let input = document.createElement("input");
                input.type = "number";
                tds[num].appendChild(input);
            }
        }
    }


    appendEX1Table(tableId) {
        this.Ex1Table = document.getElementById(tableId);
        this.makeNRow(this.Ex1Table, 5, 5);
        this.setRowNum(this.Ex1Table);
        this.setRowInput(this.Ex1Table, [1, 2, 3, 4]);
    }

    appendEX2Table(tableId) {
        this.Ex2Table = document.getElementById(tableId);
        this.makeNRow(this.Ex2Table, 1, 3);
    }
    appendEX3Table(tableId) {
        this.Ex3Table = document.getElementById(tableId);
        this.makeNRow(this.Ex3Table, 3, 4);
    }

    appendEX4Table(tableId) {
        this.Ex4Table = document.getElementById(tableId);
        this.makeNRow(this.Ex4Table, 1, 4);
    }

    appendEX5Table(tableId) {
        this.Ex5Table = document.getElementById(tableId);
        this.makeNRow(this.Ex5Table, 1, 4);
    }

    getInputValue(id) {
        return Number(document.getElementById(id).value);
    }

    appendCalButton() {
        const btn = document.createElement("button");
        this.btn.innerHTML = "계산";

        const f = this.getInputValue("f");
        if (typeof f != "number")
            return;
        const w = this.getInputValue("w");
        if (typeof w != "number")
            return;
        const R = this.getInputValue("R");
        if (typeof R != "number")
            return;
        const L = this.getInputValue("L");
        if (typeof L != "number")
            return;
        const C = this.getInputValue("C");
        if (typeof C != "number")
            return;

        const arr = [];
        const child = table.children;


        this.container.append(btn);
    }
}