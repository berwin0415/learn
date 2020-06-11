function translateDataToTree(data) {
  let parents = data.filter((item) => !item.parentId);
  let children = data.filter((item) => item.parentId);
  function translate(parents, children) {
    for (let i = 0; i < parents.length; i++) {
      const item = parents[i];
      for (let j = 0; j < children.length; j++) {
        const element = children[j];
        if (item.id === element.parentId) {
          const temp = JSON.parse(JSON.stringify(children));
          temp.splice(j, 1);
          translate([element], temp);
          Array.isArray(item.children)
            ? item.children.push(element)
            : (item.children = [element]);
        }
      }
    }
  }
  translate(parents, children);
  return parents;
}
console.log(
  translateDataToTree([
    {
      id: 1,
      parentId: 0,
    },
    {
      id: 2,
      parentId: 1,
    },
    {
      id: 3,
      parentId: 0,
    },
  ])
);
