import { walkDOMChildren } from "./dom";

// use .env to generate WordPress API base url
export const WORDPRESS_PUBLIC_API_BASE_URL = `https://public-api.wordpress.com/wp/v2/sites/${process.env.REACT_APP_WORDPRESS_URL}/sites/`


// Posts and Pages have content.rendered as strings of the HTML
// return this string as HTML
const stringToHTML = (str: string) : HTMLElement => {
	var parser = new DOMParser();
  var doc = parser.parseFromString(str, 'text/html');
	return doc.body;
};


type tImage = {
  src: string;
  alt: string;
}
type tContentObject = {
  text: string[];
  img: tImage[];
}

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