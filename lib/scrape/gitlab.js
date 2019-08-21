"use strict";
require("source-map-support/register");
var _gitlab = require("gitlab");
var _ramda = _interopRequireDefault(require("ramda"));
var _config = _interopRequireDefault(require("../../config.json"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // unfortunately the gitlab graphql api isn't ready yet

const api = new _gitlab.Gitlab({
  token: _config.default.gitlab.apiKey });


async function commitsForProject(project) {
  const allCommits = await api.Commits.all(project.id);
  return allCommits.map(c => ({
    url: `https://gitlab.com/${project.path_with_namespace}/commit/${c.id}`,
    message: c.message,
    project_name: project.name,
    author: `${c.author_name} <${c.author_email}>`,
    created_at: c.created_at }));

}

async function commitMessages() {
  const projects = await api.GroupProjects.all(_config.default.gitlab.groupId);
  return _ramda.default.flatten((await Promise.all(projects.map(commitsForProject))));
}

commitMessages().then(x => console.log(JSON.stringify(x, null, 2)));