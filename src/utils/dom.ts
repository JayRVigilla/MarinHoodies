// @ts-nocheck
// traverse DOM and perform the passed function
// * lifted from https://stackoverflow.com/questions/6969604/recursion-down-dom-tree

// !! Expected a `for-of` loop instead of a `for` loop with this simple iteration  @typescript-eslint/prefer-for-of

// @ts-ignore @typescript-eslint/prefer-for-of
export const walkDOMChildren = (node: Node, func: (n: Node) => void) => {
  const { childNodes: children } = node;
  // for (let i = 0; i < children.length; i++)
  children.forEach((child) => walkDOMChildren(child, func));
  // Children are siblings to each other
  //    walkDOMChildren(children[i], func);
  func(node);
};
