// unfortunately the gitlab graphql api isn't ready yet
import 'source-map-support/register'
import { Gitlab } from 'gitlab'
import R from 'ramda'
import config from '../../config.json'

const api = new Gitlab({
  token: config.gitlab.apiKey
})

async function commitsForProject (project) {
  const allCommits = await api.Commits.all(project.id)
  return allCommits.map(c => ({
    url: `https://gitlab.com/${project.path_with_namespace}/commit/${c.id}`,
    message: c.message,
    project_name: project.name,
    author: `${c.author_name} <${c.author_email}>`,
    created_at: c.created_at
  }))
}

async function commitMessages () {
  const projects = await api.GroupProjects.all(config.gitlab.groupId)
  return R.flatten(await Promise.all(projects.map(commitsForProject)))
}

commitMessages().then(x => console.log(JSON.stringify(x, null, 2)))
