import { tContentObject, tImage } from "../types";
import { walkDOMChildren } from "./dom";

// Posts and Pages have content.rendered as strings of the HTML
// return this string as HTML
const stringToHTML = (str: string) : HTMLElement => {
	var parser = new DOMParser();
  var doc = parser.parseFromString(str, 'text/html');
	return doc.body;
};

// turns WP content.rendered into Node representation then
// into an Object
export const initContentObject = (contentRendered: string) => {
  const content: tContentObject = {
    text: [],
    img: []
  }

  const handleContentNode = (node: Node) => {
    if (node.nodeName.toLocaleLowerCase() === "p") {
      content.text.push(node.textContent!)
    } else if (node.nodeName.toLocaleLowerCase() === "img") {
      const imageNode: HTMLImageElement = node as HTMLImageElement;
      const {src, alt} = imageNode
      const imageContent:tImage = {src, alt}
      content.img.push(imageContent)
    }
  }

  const contentDOM = stringToHTML(contentRendered)
  walkDOMChildren(contentDOM, handleContentNode)
  return content
}

