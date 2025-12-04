# Scripts Guide

This project includes automated scripts to make setup and running easy.

## Available Scripts

### PowerShell Scripts

#### `start.ps1` ⭐ **Recommended**
**One command to rule them all!**

This master script handles everything automatically:
- Fixes PowerShell execution policy if needed
- Installs Node.js automatically if missing (using winget)
- Refreshes PATH to find Node.js
- Installs project dependencies
- Starts the development server

**Usage:**
```powershell
.\start.ps1
```

#### `run.ps1`
Starts the development server only. Assumes dependencies are already installed.

**Usage:**
```powershell
.\run.ps1
```

### Batch Scripts (Command Prompt)

#### `start.bat` ⭐ **Recommended for CMD**
Same as `start.ps1` but for Command Prompt users.

**Usage:**
```cmd
start.bat
```

#### `run.bat`
Starts the development server only. Assumes dependencies are already installed.

**Usage:**
```cmd
run.bat
```

#### `setup.bat`
Installs dependencies only. Use this if you want to install dependencies separately.

**Usage:**
```cmd
setup.bat
```

## Quick Start

**PowerShell:**
```powershell
.\start.ps1
```

**Command Prompt:**
```cmd
start.bat
```

That's it! The script will handle everything and start your website at http://localhost:3000

## Troubleshooting

### "Execution policy" error
The scripts automatically fix this, but if you still see errors, run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### "Node.js not found"
The `start.ps1` and `start.bat` scripts will automatically install Node.js if winget is available. Otherwise, install manually from https://nodejs.org/

### Scripts not working
All scripts have been tested and verified. If you encounter issues:
1. Make sure you're in the project directory
2. Try running with full path: `powershell -ExecutionPolicy Bypass -File .\start.ps1`
3. Check that Node.js is installed: `node --version`

## Manual Commands

If you prefer to run commands manually:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

