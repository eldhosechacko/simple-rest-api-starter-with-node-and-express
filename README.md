# Simple REST API with Node & Express

A minimal, modular REST API built with Node.js and Express, with OpenAPI/Swagger documentation.

## Features
- Modular structure: `src/app.js`, `src/routes`, `src/controllers`
- Two endpoints:
  - `GET /` — returns a JSON welcome message
  - `GET /hello/:name` — returns a personalized greeting
- OpenAPI 3.0 specification with interactive Swagger UI at `/api-docs`

## Quick Start

### Local Development

Install dependencies:
```bash
npm install
```

Run:
```bash
npm start
# or for development with auto-reload:
npm run dev
```

Access the API:
- Base route: http://localhost:3000/
- Hello endpoint: http://localhost:3000/hello/YourName
- API documentation: http://localhost:3000/api-docs

## Deployment to Azure

### Prerequisites
- Azure account with an active subscription
- Azure CLI installed ([Download](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli))
- Git installed

### Steps to Deploy

1. **Create an Azure App Service**
   ```bash
   az group create --name myResourceGroup --location southindia
   az appservice plan create --name myAppServicePlan --resource-group myResourceGroup --sku F1 --is-linux
   az webapp create --resource-group myResourceGroup --plan myAppServicePlan --name myExpressAPI --runtime "node|18"
   ```

2. **Configure deployment**
   ```bash
   az webapp deployment source config-zip --resource-group myResourceGroup --name myExpressAPI --src ./deploy.zip
   ```

3. **Or use GitHub integration**
   - Go to Azure Portal → Your App Service → Deployment Center
   - Select GitHub as source
   - Authorize and select this repository
   - Choose branch to deploy (e.g., `master`)
   - Azure will auto-deploy on every push

4. **Deploy via Git (Local)**
   ```bash
   az webapp up --name myExpressAPI --resource-group myResourceGroup
   ```

5. **Access your deployed API**
   - Replace `myExpressAPI` with your actual app name:
   - API: `https://myExpressAPI.azurewebsites.net/`
   - Swagger Docs: `https://myExpressAPI.azurewebsites.net/api-docs`
   - Hello: `https://myExpressAPI.azurewebsites.net/hello/YourName`

### Configuration
- The `web.config` file is configured for Azure App Service IIS integration
- The `.deployment` file triggers `npm install` during deployment
- Node version is specified in `package.json` or Azure Portal settings

### Troubleshooting

**Check logs:**
```bash
az webapp log tail --resource-group myResourceGroup --name myExpressAPI
```

**View deployment status:**
```bash
az webapp deployment list --resource-group myResourceGroup --name myExpressAPI
```

## API Endpoints

### GET /
Returns a welcome message.

**Response:**
```json
{
  "message": "Welcome to the Simple REST API built with Node and Express!(Udated)"
}
```

### GET /hello/:name
Returns a personalized greeting.

**Parameters:**
- `name` (path, required): The name to greet

**Response:**
```json
{
  "message": "Hello John, welcome to API"
}
```

## Documentation

OpenAPI/Swagger UI is available at `/api-docs` (local or deployed).

## License
MIT
