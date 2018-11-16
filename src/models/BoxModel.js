export default class BoxModel {
  constructor(row, column) {
    this.mine = false;
    this.hidden = true;
    this.value = 0;
    this.row = row;
    this.column = column;
  }
}
