export const data = {
  node_info: [
    {
      node: "dummy_head",
      type: 0,
      parent: [],
      children: ["Bschema__account", "Bschema__stream2", "Bschema__stream3"],
      "refr-to": [],
      "refr-by": [],
      refr: [],
      fltr: [],
      joins: [],
      cepq: [],
      gpby: [],
      enty: [],
    },
    {
      node: "Bschema__account",
      type: 1,
      parent: ["dummy_head"],
      children: ["Bschema__stream1"],
      "refr-to": ["Bschema__account"],
      "refr-by": ["Bschema__account"],
      refr: [],
      fltr: [],
      joins: [],
      cepq: ["Bschema__stream1"],
      gpby: [],
      enty: [],
    },
    {
      node: "Bschema__stream2",
      type: 1,
      parent: ["dummy_head"],
      children: ["Bschema__stream4", "Bschema__streamjoin"],
      "refr-to": ["Bschema__stream3"],
      "refr-by": ["Bschema__stream3"],
      refr: [],
      fltr: [],
      joins: ["Bschema__streamjoin"],
      cepq: ["Bschema__stream4"],
      gpby: [],
      enty: ["Bschema__streamjoin"],
    },
    {
      node: "Bschema__stream3",
      type: 1,
      parent: ["dummy_head"],
      children: ["Bschema__stream4", "Bschema__streamjoin"],
      "refr-to": ["Bschema__stream2"],
      "refr-by": ["Bschema__stream2"],
      refr: [],
      fltr: [],
      joins: ["Bschema__streamjoin"],
      cepq: ["Bschema__stream4"],
      gpby: [],
      enty: ["Bschema__streamjoin"],
    },
    {
      node: "Bschema__stream4",
      type: 3,
      parent: ["Bschema__stream2", "Bschema__stream3"],
      children: [],
      "refr-to": [],
      "refr-by": [],
      refr: [],
      fltr: [],
      joins: [],
      cepq: [],
      gpby: [],
      enty: [],
    },
    {
      node: "Bschema__streamjoin",
      type: 3,
      parent: ["Bschema__stream2"],
      children: [],
      "refr-to": [],
      "refr-by": [],
      refr: [],
      fltr: [],
      joins: [],
      cepq: [],
      gpby: [],
      enty: [],
    },
    {
      node: "Bschema__stream1",
      type: 3,
      parent: ["Bschema__account"],
      children: [],
      "refr-to": [],
      "refr-by": [],
      refr: [],
      fltr: [],
      joins: [],
      cepq: [],
      gpby: [],
      enty: [],
    },
  ],
  schema: "Bschema",
  schemaid: 2527766166573800000,
};

const nodeData = data.node_info;

const nodes = [];
const links = [];

nodeData.forEach((nd) => {
  const node = { ...nd, id: nd.node };
  if (nd.type === 0) {
    node.color = "blue";
    node.fontSize = 15;
    node.size = 800;
  }
  nodes.push(node);

  const children = nd.children;
  children.forEach((ch) => {
    links.push({
      source: nd.node,
      target: ch,
    });
  });
});

export const graphData = {
  nodes,
  links,
};
