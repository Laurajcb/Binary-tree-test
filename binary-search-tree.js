// Create class Node 
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
};

function isBinarySearch(root) {
  function helperBS(node, minValue, maxValue) {
    if (!node) {
      return true;
    }

    if (node.value <= minValue || node.value >= maxValue) {
      return false;
    }

    const left_check = helperBS(node.left, minValue, node.value); // All the left sub-tree should be < node.value
    const right_check = helperBS(node.right, node.value, maxValue); // All the right sub-tree should be > node.value

    return (left_check && right_check);
  }

  return helperBS(root, -Infinity, Infinity)
};


// Test Cases
const root1 = new Node(4);
root1.left = new Node(2);
root1.right = new Node(5);
root1.left.left = new Node(1);
root1.left.right = new Node(3);

const root2 = new Node(4);
root2.left = new Node(2);
root2.right = new Node(5);
root2.left.left = new Node(1);
root2.left.right = new Node(6);

console.log(isBinarySearch(root1))
console.log(isBinarySearch(root2))
