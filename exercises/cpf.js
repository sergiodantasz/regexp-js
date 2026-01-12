const cpfs = `
The CPFs are:
  254.224.877-45 545.223.587-24 459.295.592-01


  886.459.003-54
`;

const cpfRegExp = /(\d{3}\.){2}\d{3}-\d{2}/g;
console.log(cpfs.match(cpfRegExp));
