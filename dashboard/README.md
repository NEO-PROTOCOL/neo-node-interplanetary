# 🛰️ NΞØ BOT Dashboard

## Dashboard Web Premium - Bento Grid Style

Interface visual moderna e intuitiva para controlar todas as funcionalidades do Neobot.

### ✨ Features

- **🎨 Design Premium**: Dark theme com bento grid layout
- **⚡ Ações Rápidas**: Botões para criar lembretes e enviar mensagens
- **📅 Gerenciamento de Lembretes**: Visualize e crie lembretes facilmente
- **💬 Mensagens**: Envie mensagens para seus contatos
- **📊 Estatísticas**: Acompanhe o uso do sistema
- **💚 Health Check**: Status em tempo real do sistema
- **🔄 Auto-refresh**: Atualização automática a cada 30 segundos

### 🚀 Como Usar

1. **Instalar dependências:**
```bash
cd dashboard
npm install
```

2. **Iniciar o servidor:**
```bash
npm start
```

3. **Acessar o dashboard:**
```
http://localhost:3000
```

### 📱 Funcionalidades

#### Criar Lembrete
1. Clique em "Novo Lembrete"
2. Digite a mensagem
3. Escolha quando (15min, 30min, 1h, 2h ou personalizado)
4. Clique em "Criar Lembrete"

#### Enviar Mensagem
1. Clique em "Enviar Mensagem"
2. Escolha o destinatário
3. Digite a mensagem
4. Clique em "Enviar Agora"

### 🎨 Design System

- **Cores**: Dark theme com gradientes vibrantes
- **Tipografia**: Inter font family
- **Layout**: Responsive bento grid
- **Animações**: Smooth transitions e micro-interactions
- **Ícones**: Emojis nativos para melhor compatibilidade

### 🔌 API Endpoints

```
GET  /api/health          - Health check
GET  /api/reminders       - Lista lembretes
POST /api/reminders       - Cria lembrete
GET  /api/messages        - Lista mensagens
POST /api/messages        - Envia mensagem
GET  /api/stats           - Estatísticas
GET  /api/status          - Status do sistema
```

### 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js + Express
- **Styling**: Custom CSS with CSS Variables
- **Icons**: Native Emojis
- **Layout**: CSS Grid (Bento Grid)

### 📦 Estrutura

```
dashboard/
├── index.html      # Interface principal
├── styles.css      # Estilos premium
├── app.js          # Lógica do frontend
├── server.js       # API backend
└── package.json    # Dependências
```

### 🎯 Próximos Passos

- [ ] Adicionar autenticação
- [ ] Persistência de dados (SQLite/PostgreSQL)
- [ ] Notificações em tempo real (WebSockets)
- [ ] Histórico de mensagens
- [ ] Edição/remoção de lembretes
- [ ] Temas personalizáveis
- [ ] PWA support

---

**Desenvolvido com 💜 pelo Protocolo NΞØ**
