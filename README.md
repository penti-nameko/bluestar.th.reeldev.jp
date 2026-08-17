# bluestar.th— GT7 Official Site

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 18 + TypeScript + Vite |
| Styling | CSS Modules |
| Container | Docker (nginx:alpine, non-root) |
| Registry | GitHub Container Registry (ghcr.io) |
| Orchestration | Kubernetes |
| Ingress | ingress-nginx |
| GitOps | ArgoCD |

## Local Dev

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Build & Push Image

```bash
# 1. ghcr.io にログイン
echo $GITHUB_TOKEN | docker login ghcr.io -u <YOUR_GITHUB_USER> --password-stdin

# 2. ビルド＆プッシュ
docker build -t ghcr.io/<YOUR_GITHUB_ORG>/bluestar-th:latest .
docker push ghcr.io/<YOUR_GITHUB_ORG>/bluestar-th:latest
```

## k8s Pull Secret の作成

```bash
kubectl create secret docker-registry ghcr-secret \
  --docker-server=ghcr.io \
  --docker-username=<YOUR_GITHUB_USER> \
  --docker-password=<YOUR_GITHUB_TOKEN> \
  --namespace=bluestar-th
```

## ArgoCD でデプロイ

```bash
# 1. application.yaml の repoURL を自分のリポジトリに変更してから適用
kubectl apply -f argocd/application.yaml

# 2. ArgoCDの管理画面、または CLI で確認
argocd app get bluestar-th
argocd app sync bluestar-th   # 手動同期したい場合
```

## TLS (cert-manager を使う場合)

```bash
# ClusterIssuer が未作成の場合
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/latest/download/cert-manager.yaml

# ingress.yaml の cert-manager アノテーションのコメントアウトを外してから apply
```

## カスタマイズ

| 変更したいもの | ファイル |
|---|---|
| チーム名・キャッチコピー | `src/components/Hero.tsx` |
| ニュース記事 | `src/data/index.ts` → `NEWS_ITEMS` |
| 戦績 | `src/data/index.ts` → `RACE_RESULTS` |
| Discord URL | `src/data/index.ts` → `DISCORD_URL` |
| リバリー情報 | `src/data/index.ts` → `LIVERY_ITEMS` |
| リバリー画像 | `src/components/LiverySection.tsx` → `liveryGradient()` を画像に差し替え |
| ドメイン | `k8s/ingress.yaml` |
| イメージ名 | `k8s/deployment.yaml` |
