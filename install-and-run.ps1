# install-and-run.ps1
# Installs Node.js LTS (via winget or Chocolatey), runs npm install, and starts `npm run dev` in a new PowerShell window.
# Run as Administrator from PowerShell:
#   cd "C:\Users\Quant\Downloads\Signal_Ridge_WebSuite_Final"
#   Set-ExecutionPolicy Bypass -Scope Process -Force
#   .\install-and-run.ps1

$projectDir = "C:\Users\Quant\Downloads\Signal_Ridge_WebSuite_Final"

function Has-Command($name) {
  return $null -ne (Get-Command $name -ErrorAction SilentlyContinue)
}

Set-Location $projectDir

if (-not (Has-Command node)) {
  Write-Host "Node.js not found. Attempting automatic install..."
  if (Has-Command winget) {
    Write-Host "Installing Node.js LTS via winget..."
    winget install --id OpenJS.NodeJS.LTS -e --accept-package-agreements --silent
  } elseif (Has-Command choco) {
    Write-Host "Installing Node.js LTS via Chocolatey..."
    choco install nodejs-lts -y
  } else {
    Write-Host "No winget or choco detected. Attempting Chocolatey bootstrap (requires admin & Internet)..."
    Set-ExecutionPolicy Bypass -Scope Process -Force
    iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
    if (Has-Command choco) {
      choco install nodejs-lts -y
    } else {
      Write-Host "Automatic installers failed. Please install Node.js from https://nodejs.org manually and re-run this script."
      exit 1
    }
  }

  # Small pause and refresh PATH
  Start-Sleep -Seconds 3
  $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
}

if (-not (Has-Command node)) {
  Write-Host "Node still not available in PATH. Please restart PowerShell (or your machine) and re-run this script."
  exit 1
}

Write-Host "Node: $(node -v)    npm: $(npm -v)"
Write-Host "Running npm install in $projectDir ..."
npm install
if ($LASTEXITCODE -ne 0) {
  Write-Host "npm install failed. Inspect output and retry."
  exit 1
}

Write-Host "Starting Vite dev server in a new PowerShell window..."
Start-Process powershell -ArgumentList "-NoExit","-Command","cd `"$projectDir`"; npm run dev"

Write-Host "If successful, open http://localhost:5173 (default) in your browser."
