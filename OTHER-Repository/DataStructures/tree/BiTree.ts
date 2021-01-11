export default class BiTreeNode {
  public data: any;
  public left: BiTreeNode | null;
  public right: BiTreeNode | null;
  constructor(data: any) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
