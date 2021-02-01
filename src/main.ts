import * as core from '@actions/core'
import got from 'got'

async function postMessage(): Promise<string> {
  const content: string = core.getInput('content')
  const url: string = core.getInput('url')
  const rsp = await got.post(url, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      msg_type: 'text',
      content: {
        text: content
      }
    })
  })

  core.startGroup('Feishu response')
  core.debug(rsp.body)
  core.endGroup()
  return rsp.body
}

async function run(): Promise<void> {
  try {
    await postMessage()
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
