## ✨ Example Usage

```yml
- name: ci status
  uses: foxundermoon/wechat-work-action@v1
  with:
    url: ${{ secrets.FEISHU_WEBHOOK_URL }}
    type: markdown
    content: |
      ## action test
      > from github action test
      - repository: ${{ github.repository }}
      - committer: ${{ github.actor }}
      - compare: [view](${{ github.event.compare }})
      - job status: ${{ job.status }}
```

🔐 Set your secrets here: `https://github.com/USERNAME/REPO/settings/secrets`.

Contexts and expression syntax for GitHub Actions, here: https://help.github.com/en/articles/contexts-and-expression-syntax-for-github-actions#github-context

**Result**

## Options

| option  | type   | required | default | description                                                                               |
| ------- | ------ | -------- | ------- | ----------------------------------------------------------------------------------------- |
| url     | string | Yes      | none    | The full address of webhook: https://open.feishu.cn/open-apis/bot/hook/xxxxxxxxxxxxxxxxxx |
| content | string | Yes      | none    | Message content, text or markdown or json string                                          |
 