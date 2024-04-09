// traverse DOM and perform the passed function
// * lifted from https://stackoverflow.com/questions/6969604/recursion-down-dom-tree
export const walkDOMChildren = (node: Node, func: (n: Node)=>void) => {
   const {childNodes: children } = node;
  for (let i = 0; i < children.length; i++)
      // Children are siblings to each other
       walkDOMChildren(children[i], func);
   func(node);
}