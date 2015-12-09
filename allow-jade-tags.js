import riot from 'riot';
import fs from 'fs';

const compile = path => riot.compile(fs.readFileSync(path, 'utf8'), { template: 'jade', type:'babel',  presets: ["es2015"]});
const loadTag = (path, options) => (
  module._compile(`var riot = require(process.env.RIOT || "riot/riot.js");module.exports = ${compile(path)}`, path)
);
export {compile};
export default (path) => loadTag(path);
