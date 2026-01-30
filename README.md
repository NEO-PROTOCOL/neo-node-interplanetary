# NEØ Protocol — Beyond AI Assistants

<p align="center">
  <img src="docs/assets/neobot-logo.png" alt="NEØ Protocol" width="400">
</p>

<p align="center">
  <strong>Built on Moltbot's foundation. Breaking the boundaries.</strong>
</p>

<p align="center">
  <a href="https://github.com/neomello/neobot/actions"><img src="https://img.shields.io/github/actions/workflow/status/neomello/neobot/ci.yml?branch=main&style=for-the-badge" alt="CI status"></a>
  <a href="https://github.com/neomello/neobot/releases"><img src="https://img.shields.io/github/v/release/neomello/neobot?include_prereleases&style=for-the-badge" alt="GitHub release"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="MIT License"></a>
</p>

---

## 🌌 What is NEØ Protocol?

**NEØ Protocol** is a **decentralized AI assistant control plane** that operates
on **your infrastructure**, with **your rules**, following **Web3 principles**.

Born from [Moltbot](https://github.com/moltbot/moltbot)'s industrial-grade
foundation, NEØ Protocol introduces a **revolutionary hybrid architecture**:

- **40% Moltbot Core** → Battle-tested stability (channels, gateway, agent runtime)
- **60% NEØ Layer** → Decentralized autonomy (IPFS, Web3 identity, self-hosted)

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                    NEØ PROTOCOL STACK                      ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃  🔷 NEØ Layer          → IPFS Registry, mio-Identity      ┃
┃                         → Web3 Extensions, Self-hosted     ┃
┃  ────────────────────────────────────────────────────────  ┃
┃  ⬆️  Moltbot Core      → Gateway, Channels, Agent Runtime  ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

### Why This Matters

Traditional AI assistants lock you into **centralized platforms**.
NEØ Protocol gives you:

- ✅ **Self-Sovereignty** → You own your data, keys, and infrastructure
- ✅ **Decentralization** → IPFS skills registry, no single point of failure
- ✅ **Transparency** → Open-source, auditable, cryptographically verifiable
- ✅ **Resilience** → Multi-node architecture, redundant pinning
- ✅ **Privacy** → Local-first, end-to-end encrypted when needed

---

## 🔥 Recognition & Foundation

We deeply recognize **[Moltbot](https://github.com/moltbot/moltbot)** and its
creator **[Peter Steinberger](https://github.com/steipete)** for building the
most sophisticated AI assistant control plane in the market.

NEØ Protocol **builds upon** this foundation, extending it into uncharted
territory:

> "Moltbot gave us the engine. NEØ Protocol is breaking the speed limits."

**What we inherit from Moltbot:**

- 🏗️ Industrial-grade Gateway (WebSocket control plane)
- 📡 Multi-channel support (WhatsApp, Telegram, Slack, Discord, Signal, etc)
- 🤖 Pi agent runtime (RPC mode, tool streaming)
- 🔐 Security-first architecture (DM pairing, sandboxing)
- 📊 Health monitoring & Ledger auditing

**What NEØ Protocol adds:**

- 🌐 **IPFS Skills Registry** → Decentralized, content-addressed skills
- 🔑 **mio-system Identity** → Web3 identity with cryptographic signatures
- 🛰️ **Self-Hosted Everything** → Docs, registry, no external dependencies
- 🔗 **Web3 Extensions** → IPFS PubSub, Nostr relay, blockchain integrations
- 🎨 **NEØ Dashboard** → iOS-style management UI (already implemented)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 22
- **pnpm** (recommended) or npm/bun
- **IPFS** (optional, for NEØ features)

### Installation

```bash
# Clone the repository
git clone https://github.com/neomello/neobot.git
cd neobot

# Install dependencies
pnpm install

# Build the project
pnpm build

# Run onboarding wizard
pnpm neobot onboard --install-daemon
```

### Basic Commands

```bash
# Start the gateway
pnpm neobot gateway --port 18789

# Check system health
pnpm neobot health

# List skills
pnpm neobot skills list

# NEØ Protocol info
pnpm neobot neo:info
```

---

## 🎯 Core Features

### 🔷 NEØ Layer (Decentralized)

#### IPFS Skills Registry

**Problem:** Traditional skills registries (ClawdHub, etc) are centralized.

**Solution:** Content-addressed IPFS storage with cryptographic signatures.

```bash
# Publish skill to IPFS
pnpm neobot neo:skill:publish ./skills/my-skill/

# Install from IPFS (by CID)
pnpm neobot neo:skill:install ipfs-status@1.0.0

# Search skills
pnpm neobot neo:skill:search "blockchain"
```

**Benefits:**
- ✅ Immutable (CID-based addressing)
- ✅ Verifiable (cryptographic signatures)
- ✅ Resilient (multi-node pinning)
- ✅ Censorship-resistant

#### mio-system Identity

**Problem:** Traditional auth systems depend on external providers.

**Solution:** Self-sovereign Web3 identities (Ethereum-style signatures).

**9 Core Identities:**
- `mio-core` → System Core
- `mio-gateway` → Gateway Manager
- `mio-skills` → Skills Registry
- `mio-factory` → Smart Contracts (Flow Blockchain)
- `mio-flowpay` → Payment System
- `mio-asi1` → Local LLM (llama.cpp)
- `mio-telegram` → Telegram Bot
- `mio-whatsapp` → WhatsApp Gateway
- `mio-ipfs` → IPFS Node

```bash
# Create identity
pnpm neobot neo:identity:create --name "My Bot" --role developer

# List identities
pnpm neobot neo:identity:list

# Verify signature
pnpm neobot neo:identity:verify mio-abc12345
```

#### Gateway Extensions (Web3-Native)

**New decentralized channels:**
- 🌐 **IPFS PubSub** → P2P messaging (no servers)
- ⚡ **Nostr Relay** → Censorship-resistant communication
- ✍️ **Web3 Signer** → Cryptographically sign all messages

### ⬆️ Moltbot Core (Stable)

All battle-tested features from upstream:

- 📡 **Multi-Channel Gateway** → WhatsApp, Telegram, Slack, Discord, Signal, iMessage, etc
- 🤖 **Agent Runtime** → Pi RPC with tool streaming
- 🔐 **Security** → DM pairing, sandboxing, permissions
- 📊 **Observability** → Health checks, Ledger auditing
- 🎨 **Companion Apps** → macOS menu bar, iOS/Android nodes

[See full Moltbot features →](https://docs.molt.bot)

---

## 🌟 What Makes NEØ Different?

### Traditional AI Assistants vs NEØ Protocol

| Feature | Traditional | NEØ Protocol |
|---------|------------|--------------|
| **Hosting** | Cloud (vendor lock-in) | Your infrastructure |
| **Skills Registry** | Centralized | IPFS (decentralized) |
| **Identity** | OAuth/API Keys | Web3 signatures |
| **Data Ownership** | Vendor owns | You own |
| **Censorship** | Vulnerable | Resistant |
| **Single Point of Failure** | Yes | No (multi-node) |
| **Transparency** | Closed-source | Open-source |
| **Privacy** | Telemetry sent | Local-first |

### The Vision (Teaser)

NEØ Protocol is **phase 1** of something bigger.

We're building towards:
- 🌍 **Decentralized AI Mesh Network** (nodes communicate P2P)
- 🧠 **Federated Learning** (train models across nodes, preserve privacy)
- 🔗 **Blockchain Integration** (Flow, Ethereum, Bitcoin)
- 💎 **NFT-Based Skills** (tokenized, tradeable skills)
- 🏛️ **DAO Governance** (community-controlled protocol evolution)

**Stay tuned.** Things are about to get interesting.

---

## 📚 Documentation

### Essential Reading

- 🏗️ [NEØ Protocol Architecture](ARCHITECTURE_NEO_PROTOCOL.md) → Full design
- 🎯 [Roadmap (V2)](NEXT_STEPS_V2.md) → 8-week implementation plan
- 🚀 [Quick Start Guide](NEO_PROTOCOL_KICKOFF.md) → Get started now
- 📖 [Markdown Standards](/.cursor/standards/markdown-neo.md) → Contributing guide

### Upstream Documentation

- [Moltbot Docs](https://docs.molt.bot) → Full upstream reference
- [Getting Started](https://docs.molt.bot/start/getting-started)
- [Configuration](https://docs.molt.bot/gateway/configuration)
- [Security](https://docs.molt.bot/gateway/security)

---

## 🛠️ Development

### Project Structure

```
neobot/
├── src/                    # Moltbot Core (synced with upstream)
│   ├── gateway/           # WebSocket control plane
│   ├── channels/          # WhatsApp, Telegram, etc
│   ├── agents/            # Agent runtime (Pi RPC)
│   └── ...
│
├── neo/                   # NEØ Protocol Layer (independent)
│   ├── registry/          # IPFS Skills Registry
│   ├── identity/          # mio-system Identity
│   ├── gateway/           # Web3 Extensions
│   ├── cli/               # NEØ CLI commands
│   └── sdk/               # Public SDK
│
├── skills/                # 18+ Skills (NEØ-native)
│   ├── ipfs/             # IPFS operations
│   ├── asi1/             # Local LLM (llama.cpp)
│   ├── smart-factory/    # Flow blockchain
│   ├── flowpay/          # Payment system
│   └── ...
│
├── dashboard/             # iOS-style management UI
└── docs-neo/              # Self-hosted docs (coming soon)
```

### Contributing

We welcome contributions! But first:

1. **Read the standards:** [markdown-neo.md](/.cursor/standards/markdown-neo.md)
2. **Understand the architecture:** [ARCHITECTURE_NEO_PROTOCOL.md](ARCHITECTURE_NEO_PROTOCOL.md)
3. **Check the roadmap:** [NEXT_STEPS_V2.md](NEXT_STEPS_V2.md)

**Contribution guidelines:**

```bash
# NEØ Layer features
git checkout -b neo/feature-xyz
git commit -m "feat(neo): add xyz"

# Moltbot Core (only bugfixes/sync)
git checkout -b upstream-sync
git commit -m "chore(upstream): merge moltbot updates"
```

**Important:**
- Changes to `src/` (Moltbot Core) require discussion
- Changes to `neo/`, `skills/`, `dashboard/` are welcome
- Follow [Conventional Commits](https://www.conventionalcommits.org/)

---

## 🔒 Security & Privacy

NEØ Protocol takes security seriously.

### Key Principles

1. **Self-Sovereign Keys** → You control your mio-system private keys
2. **Local-First** → Data stays on your infrastructure by default
3. **Cryptographic Verification** → All skills/messages are signed
4. **Sandboxing** → Untrusted code runs in isolated environments
5. **Auditable** → Full Ledger of all operations

### Security Audit

Phase 4 of our roadmap includes a **comprehensive security audit**:
- mio-system key management
- IPFS registry signature verification
- Gateway extensions sandboxing
- Penetration testing

**Report coming:** March 2026

### Responsible Disclosure

Found a security issue? Email: **security@neoprotocol.space**

---

## 🗓️ Roadmap

### 🎯 Curto Prazo (1-2 semanas)

- [ ] **Screenshots do Dashboard NEØ**
- [ ] **Demo video** (2-3 min)
- [ ] **Logo oficial NEØ Protocol**
- [ ] **Setup Twitter + Telegram**

### 🚀 Médio Prazo (1 mês)

- [ ] **Website:** neoprotocol.space
- [ ] **Primeira skill no IPFS** (proof of concept)
- [ ] **Anúncio público**

### 📋 Roadmap Completo

**Phase 1: Foundation** — IN PROGRESS
- ✅ NEØ directory structure
- 🔄 IPFS Skills Registry implementation
- 🔄 mio-system Identity activation
- 🔄 NEØ CLI commands

**Phase 2: Extensions**
- IPFS PubSub Channel Adapter
- Web3 Signature System
- Dashboard NEØ Integration

**Phase 3: Documentation**
- Self-hosted docs (IPFS)
- DNS: neo-docs.mello.eth

**Phase 4: Release**
- Security audit
- **Public Release: NEØ Protocol v1.0.0**

[Roadmap Detalhado →](NEXT_STEPS_V2.md)

---

## 🌍 Community

### Stay Connected

- 🐦 **Twitter/X:** [@neoprotocol](https://x.com/neoprotocol) *(coming soon)*
- 💬 **Telegram:** [@neoprotocol](https://t.me/neoprotocol) *(coming soon)*
- 📧 **Email:** neo@neoprotocol.space
- 🌐 **Website:** neoprotocol.space *(coming soon)*

### Philosophy

NEØ Protocol is built on **Web3 principles**:

1. **Decentralization** → No single point of failure
2. **Self-Sovereignty** → You control your data and keys
3. **Transparency** → Open-source, auditable code
4. **Resilience** → Multi-node architecture
5. **Privacy** → Local-first, encrypted when needed

> "Code is law. Expand until chaos becomes protocol."
>
> — NEØ MELLØ, Core Architect

---

## 📊 Stats & Recognition

### Current Status (Jan 2026)

- **Phase 0.1:** ✅ COMPLETE (18 skills, 9 identities, WhatsApp+Telegram)
- **Phase 1.0:** 🔄 IN PROGRESS (NEØ Protocol Stack)
- **Contributors:** 200+ (Moltbot community + NEØ)
- **Lines of Code:** ~100k+ (TypeScript, Swift, Kotlin)
- **Skills:** 18 implemented, 50+ planned
- **Channels:** 14+ supported (WhatsApp, Telegram, Slack, Discord, etc)

### Recognition

Built upon the shoulders of giants:

- 🙏 **[Moltbot](https://github.com/moltbot/moltbot)** by Peter Steinberger
- 🙏 **[Pi Agent](https://github.com/badlogic/pi-mono)** by Mario Zechner
- 🙏 **Open-source community** (200+ contributors)

---

## 🏆 Why NEØ Protocol?

### For Developers

- 🔓 **Open-source** → No vendor lock-in
- 🔧 **Extensible** → Skills, channels, tools
- 🧪 **Testable** → Full test coverage
- 📚 **Documented** → Comprehensive docs
- 🤝 **Community** → Active development

### For Organizations

- 🏢 **Enterprise-ready** → SRE-first design
- 🔐 **Security-first** → Auditable, sandboxed
- 📊 **Observability** → Health checks, Ledger
- 🌍 **Multi-channel** → WhatsApp, Telegram, Slack, etc
- 💰 **Cost-effective** → Self-hosted, no subscriptions

### For Web3 Enthusiasts

- 🌐 **Decentralized** → IPFS, no central servers
- 🔑 **Web3-native** → Ethereum-style identities
- 🔗 **Blockchain-ready** → Flow, Ethereum integrations
- 💎 **NFT-compatible** → Tokenized skills (future)
- 🏛️ **DAO-governed** → Community-controlled (future)

---

## 📄 License

NEØ Protocol is dual-licensed:

- **Moltbot Core (`src/`):** MIT License (upstream)
- **NEØ Layer (`neo/`, `skills/`, `dashboard/`):** MIT License

See [LICENSE](LICENSE) for full details.

---

## 🚨 Disclaimer

**NEØ Protocol is in active development.**

- Phase 1.0 is **IN PROGRESS** (expected completion: Feb 2026)
- Some features are **experimental** (IPFS, Web3 extensions)
- Production use is **at your own risk** until v1.0.0 release

**Recommended:** Join our community to stay updated on stable releases.

---

## 🎯 Call to Action

### Ready to break free from centralized AI?

1. **Star this repo** ⭐ → Follow development
2. **Clone & experiment** → `git clone https://github.com/neomello/neobot.git`
3. **Join the movement** → Watch for community announcements
4. **Contribute** → We welcome PRs and issues

### Questions?

- 📖 Read the [Architecture](ARCHITECTURE_NEO_PROTOCOL.md)
- 🗺️ Check the [Roadmap](NEXT_STEPS_V2.md)
- 📧 Email: neo@neoprotocol.space

---

<p align="center">
  <strong>NEØ Protocol</strong><br>
  Beyond AI Assistants. Into the Decentralized Future.<br>
  <br>
  Built with 🔷 by <a href="https://github.com/neomello">NEØ MELLØ</a><br>
  Based on <a href="https://github.com/moltbot/moltbot">Moltbot</a> by <a href="https://github.com/steipete">Peter Steinberger</a>
</p>

<p align="center">
  <sub>"Security by design. Exploits find no refuge here."</sub>
</p>
