/* mini mini jQuery */
let q = (selector) => {

  var nodes = Array.from(document.querySelectorAll(selector));

  let nodeHelper = {
    html: function(html_code) {
      if (html_code) {
        this.innerHTML = html_code;
        return this;
      } else {
        return this.innerHTML;
      }
    }
  }

  let nodesHelper = {
    html: function(html_code) {
      this.forEach((node) => {
        node.html(html_code);
      })
      return this;
    },
    first: function() {
      return this[0];
    },
    second: function() {
      return this[1];
    },
    third: function() {
      return this[2];
    },
    last: function() {
      return this[this.length-1];
    }
  }

  if (nodes.length == 1 && selector.startsWith("#")) {
    nodes = nodes[0];
    Object.assign(nodes, nodeHelper);
  } else {
    nodes.forEach((node) => Object.assign(node, nodeHelper));
    Object.assign(nodes, nodesHelper);
  }
  nodes.find = q;

  return nodes;
}

export default q;
