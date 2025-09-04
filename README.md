# 🎯 LUKSO Token Claim dApp

A modern and responsive dApp for claiming LSP7 and LSP8 tokens on the LUKSO blockchain, built as a mini-app for the Universal Everything ecosystem.

## 🌟 Project Purpose

This application allows users to:

- **View** LSP7 and LSP8 tokens available for claiming
- **Claim** individual assets or all assets simultaneously
- **Interface** seamlessly with the LUKSO Universal Everything portal
- **Manage** authentication via Universal Profile (UP) provider

## 🚀 Platform and Technologies

### Blockchain

- **LUKSO Network**: Layer 1 blockchain specialized in digital identities and creative assets
- **LSP7**: Standard for fungible tokens (similar to ERC-20)
- **LSP8**: Standard for non-fungible tokens (similar to ERC-721)
- **Universal Profile**: LUKSO's decentralized digital identity system

### Technology Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Blockchain Integration**: @lukso/up-provider
- **Development**: ESLint + Hot Module Replacement

### Runtime Environment

- **Mini-App**: Integrated within LUKSO's Universal Everything portal
- **Browser**: Compatible with all modern browsers
- **Mobile**: Responsive design for mobile devices

## 📋 Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 8.0.0
- **Access** to LUKSO Universal Everything portal

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd token-claim
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🎮 How to Use

### Automatic Connection

1. The dApp automatically detects connection through Universal Everything
2. No manual login button is required
3. Authentication happens through the LUKSO portal

### Asset Visualization

- LSP7/LSP8 assets are displayed in a responsive grid
- Each card shows: icon, name, symbol, balance, and type
- LSP8 tokens have a distinctive badge

### Claim Operations

- **Single claim**: Click "Claim" on each specific token
- **Multiple claim**: Use the "Claim all" button to claim all assets

## 🏗️ Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/             # shadcn/ui components (Button, Card, etc.)
│   └── TokenCard.tsx   # Card for displaying individual tokens
├── context/            # React Context for global state
│   └── LuksoAuthContext.tsx  # LUKSO authentication management
├── hook/               # Custom hooks
│   └── useLuksoAssets.ts     # Hook for managing assets
├── lib/                # Utilities and helpers
│   └── utils.ts        # Utility functions (cn, etc.)
└── App.tsx            # Main component
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Check linting errors

## 🎨 Design System

### UI Components

- **shadcn/ui**: Modern and accessible component library
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive design**: Mobile-first approach

### Color Palette

- **Primary**: Dark gray for main buttons
- **Secondary**: Light gray for backgrounds and borders
- **Background**: Very light gray for main layout

## 🔗 LUKSO Integration

### Universal Profile Provider

```typescript
// Automatic connection
const provider = createClientUPProvider();

// Account detection
provider.on("accountsChanged", handleAccountsChanged);
provider.on("contextAccountsChanged", handleContextAccountsChanged);
```

### Asset Management

- Automatically detects LSP7 and LSP8 tokens from connected account
- Supports fallback for token images
- Handles loading and error states

## 🚦 Application States

1. **Disconnected**: No assets visible
2. **Connected**: Shows available assets for claiming
3. **Loading**: Shows spinner during loading
4. **Empty**: Message when no assets are available to claim

## 🔒 Security

- **No private keys**: Uses Universal Profile provider
- **Secure transactions**: Handled through LUKSO wallet
- **TypeScript validation**: Type safety guaranteed

## 📱 Responsiveness

- **Mobile**: Single column layout
- **Tablet/Desktop**: Two-column grid
- **Adaptive components**: Automatically resize

## 🤝 Contributing

To contribute to the project:

1. Fork the repository
2. Create a branch for your feature
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is under MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Useful Links

- [LUKSO Documentation](https://docs.lukso.tech/)
- [Universal Everything](https://universaleverything.me/)
- [LSP Standards](https://github.com/lukso-network/LIPs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
