---
![image](https://github.com/user-attachments/assets/813b2956-b289-420f-89c9-99206aaf99c5)

# NFT Liquidation Platform

A Next.js-based platform that allows users to liquidate their NFTs in exchange for SPL tokens. The platform integrates Tensor for NFT transactions and Jupiter for handling SPL token swaps, and it supports multiple wallet connections.

## Features

- **Liquidate NFTs**: Easily convert your NFTs into SPL tokens.
- **Multi-Wallet Support**: Connect and switch between different wallets seamlessly.
- **Tensor Integration**: Handle NFT transactions and liquidation with Tensor.
- **Jupiter Integration**: Use Jupiter to swap NFTs for any SPL token.
- **Real-time Price Tracking**: Track the liquidation value of NFTs based on current market data.
- **Secure and Fast Transactions**: Use blockchain technology to guarantee secure and quick transfers.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with the project, follow the steps below.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [Solana CLI](https://docs.solana.com/cli/install-solana-cli-tools) for local development

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/saksham-tomer/sol-mint.git
   cd nft-liquidation-platform
   ```

2. Install dependencies:

   ```bash
   yarn install
   # or npm install
   ```

### Environment Variables

Create a `.env.local` file in the root of your project and add the following environment variables:

```env
NEXT_PUBLIC_TENSOR_API_KEY=your_tensor_api_key
NEXT_PUBLIC_JUPITER_API_KEY=your_jupiter_api_key
NEXT_PUBLIC_SOLANA_NETWORK=devnet
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.devnet.solana.com
```

Make sure to replace the values with your actual API keys and the Solana network you're targeting (e.g., `devnet` or `mainnet-beta`).

### Usage

Run the development server:

```bash
yarn dev
# or npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

## Technologies

This platform is built using:

- **[Next.js](https://nextjs.org/)** - React framework for server-side rendering and static site generation.
- **[Tensor](https://tensor.trade/)** - For handling NFT transactions and liquidation.
- **[Jupiter](https://jup.ag/)** - For swapping NFTs into SPL tokens.
- **[Solana Wallet Adapter](https://github.com/solana-labs/wallet-adapter)** - Wallet integration and support.
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for styling.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/saksham-tomer/sol-mint/issues).

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
