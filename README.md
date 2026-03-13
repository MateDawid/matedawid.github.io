# matedawid.github.io

## Deploying new version

1. Pre build checks:

```bash
yarn tsc
yarn prettier:check
```

2. Build new version with command

```bash
yarn build
```

3. Commit and push changes
4. Wait for Action to build new page version from docs
