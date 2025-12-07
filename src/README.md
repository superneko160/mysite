# MySite

## Setup 

```sh
docker compose up -d

docker compose exec app bash
```

```sh
npm install
```

## Run

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### E2E Test

```sh
npm run test:e2e
```

```sh
npm run test:e2e-report
```

> [!NOTE]
> レポートは http://localhost:9323 で表示されるが、docker環境からはポート接続していないので、ローカル側で行う
