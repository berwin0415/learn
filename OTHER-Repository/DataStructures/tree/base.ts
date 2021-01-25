export class BiTreeNode {
  public data: any;
  public left: BiTreeNode | null;
  public right: BiTreeNode | null;
  constructor(data: any, left?: BiTreeNode | null, right?: BiTreeNode | null) {
    this.data = data;
    this.left = left || null;
    this.right = right || null;
  }
}

export class TreeNode {
  public data: any;
  public children: TreeNode[];
  constructor(data: any) {
    this.data = data;
    this.children = [];
  }
}
