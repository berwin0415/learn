import { BiTreeNode } from "./base";
export default class BiTree {
  public root: BiTreeNode;
  constructor(data?: any) {
    this.root = new BiTreeNode(data);
  }
  //   前序遍历
  preOrder(fn: (data: any) => void) {
    const order = (node: BiTreeNode | null) => {
      if (node) {
        fn(node.data);
        order(node.left);
        order(node.right);
      }
    };
    order(this.root);
  }
  //   中序遍历
  inOrder(fn: (data: any) => void) {
    const order = (node: BiTreeNode | null) => {
      if (node) {
        order(node.left);
        fn(node.data);
        order(node.right);
      }
    };
    order(this.root);
  }
  //   后序遍历
  postOrder(fn: (data: any) => void) {
    const order = (node: BiTreeNode | null) => {
      if (node) {
        order(node.left);
        order(node.right);
        fn(node.data);
      }
    };
    order(this.root);
  }
}
