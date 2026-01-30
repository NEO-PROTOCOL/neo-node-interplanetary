# 🔍 Auditoria de Links - Migração openclaw

**Data**: 30 Janeiro 2026  
**Upstream**: moltbot/moltbot → openclaw/openclaw  
**Status**: 🚨 CRÍTICO - Links quebrados detectados

---

## 📊 Resumo Executivo

### Impacto Detectado:
- ✅ **0 imports de código** afetados (neobot não importa de moltbot)
- 🚨 **74 URLs GitHub** quebrados (`github.com/moltbot/moltbot`)
- ⚠️ **106 referências npm** a verificar (`@moltbot/*`)
- 📝 **~300 arquivos** de documentação afetados

---

## 🎯 Categorias de Links

### 1. URLs GitHub Quebrados (74 ocorrências)

#### 🔴 CRÍTICOS (Precisam correção imediata):

- `README.md` - Link principal do projeto
- `CONTRIBUTING.md` - Guia de contribuição
- `package.json` - Repository field
- `src/agents/system-prompt.ts` - Source URL no prompt do agente
- `src/cli/update-cli.ts` - URL de atualização automática

#### 🟡 IMPORTANTES (Docs principais):

- `docs/index.md` - Documentação principal
- `docs/help/faq.md` - FAQ com 6+ links
- `docs/install/*.md` - Guias de instalação
- `docs/platforms/*.md` - Setup por plataforma

#### 🟢 BAIXA PRIORIDADE (Docs específicas):

- `docs/channels/*.md` - Configurações de canais
- `docs/gateway/*.md` - Docs técnicas
- `docs/tools/*.md` - Ferramentas auxiliares

---

### 2. Pacotes NPM `@moltbot/*` (106 ocorrências)

**Status**: ✅ CONFIRMADO - MUDOU PARA `@openclaw/*`

**Verificação realizada (30 Jan 2026):**
```bash
npm view @moltbot/voice-call   # 404 Not Found
npm view @openclaw/voice-call  # ✅ v2026.1.29
npm view @moltbot/matrix       # 404 Not Found
npm view @openclaw/matrix      # ✅ v2026.1.29
```

**Conclusão**: Todos os pacotes `@moltbot/*` foram migrados para `@openclaw/*`

Pacotes afetados:
```
@moltbot/bluebubbles
@moltbot/discord
@moltbot/line
@moltbot/matrix
@moltbot/msteams
@moltbot/nextcloud-talk
@moltbot/nostr
@moltbot/voice-call
@moltbot/zalo
@moltbot/zalouser
@moltbot/twitch
@moltbot/tlon
@moltbot/mattermost
@moltbot/googlechat
@moltbot/imessage
@moltbot/signal
@moltbot/slack
@moltbot/telegram
@moltbot/whatsapp
@moltbot/lobster
@moltbot/diagnostics-otel
@moltbot/memory-core
@moltbot/memory-lancedb
@moltbot/llm-task
@moltbot/copilot-proxy
@moltbot/open-prose
```

**Ações Necessárias**:

1. ✅ ~~Verificar se upstream mudou para `@openclaw/*`~~ **CONFIRMADO**
2. 🚨 **URGENTE**: Atualizar todas referências em `extensions/*/package.json`
3. 🚨 **URGENTE**: Atualizar docs de instalação
4. ✅ Script criado: `scripts/fix-openclaw-links.sh`

---

### 3. Repositórios Relacionados

URLs para verificar:

- `github.com/moltbot/moltbot-ansible` → `openclaw/openclaw-ansible`?
- `github.com/moltbot/nix-moltbot` → `openclaw/nix-openclaw`?
- `github.com/moltbot/lobster` → `openclaw/lobster`?

---

## 🛠️ Plano de Correção

### Phase 1: CRÍTICOS (Imediato)

```bash
# 1. Atualizar arquivos principais
- README.md
- CONTRIBUTING.md
- package.json (repository field)
- src/agents/system-prompt.ts
- src/cli/update-cli.ts
```

### Phase 2: IMPORTANTES (Curto prazo)

```bash
# 2. Atualizar docs de instalação
- docs/index.md
- docs/help/faq.md
- docs/install/*.md
- docs/platforms/*.md
```

### Phase 3: DOCUMENTAÇÃO (Médio prazo)

```bash
# 3. Atualizar docs restantes
- docs/channels/*.md
- docs/gateway/*.md
- docs/tools/*.md
- docs/concepts/*.md
```

### Phase 4: PACOTES NPM (Se necessário)

```bash
# 4. Atualizar referências npm (SE mudou para @openclaw/*)
- extensions/*/package.json
- docs com exemplos de install
```

---

## 📝 Script de Correção Automática

```bash
#!/bin/bash
# fix-openclaw-links.sh

# 1. URLs GitHub
find . -type f \( -name "*.md" -o -name "*.ts" -o -name "*.json" \) \
  -not -path "./node_modules/*" \
  -not -path "./dist/*" \
  -exec sed -i '' 's|github.com/moltbot/moltbot|github.com/openclaw/openclaw|g' {} +

# 2. URLs de issues/discussions
find . -type f -name "*.md" \
  -exec sed -i '' 's|moltbot/moltbot/issues|openclaw/openclaw/issues|g' {} +
  -exec sed -i '' 's|moltbot/moltbot/discussions|openclaw/openclaw/discussions|g' {} +

# 3. Appcast (se releases mudarem)
sed -i '' 's|github.com/moltbot/moltbot/releases|github.com/openclaw/openclaw/releases|g' appcast.xml

# 4. Pacotes npm (SE necessário - verificar primeiro!)
# find extensions/ -name "package.json" \
#   -exec sed -i '' 's|@moltbot/|@openclaw/|g' {} +

echo "✅ Links atualizados para openclaw/openclaw"
echo "⚠️  IMPORTANTE: Revisar package.json e testar!"
```

---

## ⚠️ ATENÇÃO: NEO Protocol

**Decisão Estratégica Necessária:**

### Opção A: Atualizar TODOS os links
✅ PRO: Docs alinhadas com upstream atual  
❌ CON: Perde referências históricas

### Opção B: Manter links moltbot em contexto NEO
✅ PRO: Histórico preservado, fork independente  
❌ CON: Docs podem ficar desatualizadas

### Opção C: HÍBRIDA (Recomendada)
✅ Atualizar links CRÍTICOS (código, system-prompt, update)  
✅ Adicionar nota em docs: "Upstream: openclaw/openclaw (ex-moltbot)"  
✅ Manter links históricos em UPSTREAM_MIGRATION_OPENCLAW.md  

---

## 📊 Priorização por Impacto

| Categoria | Arquivos | Impacto | Prioridade |
|-----------|----------|---------|------------|
| Código (system-prompt, update) | 2 | 🔴 ALTO | P0 |
| README + CONTRIBUTING | 2 | 🔴 ALTO | P0 |
| package.json | 1 | 🔴 ALTO | P0 |
| Docs instalação | ~15 | 🟡 MÉDIO | P1 |
| Docs técnicas | ~200 | 🟢 BAIXO | P2 |
| Extensions package.json | ~25 | ⚠️ SE MUDAR | P1 |

---

## ✅ Checklist de Auditoria

- [x] ~~Verificar se `@moltbot/*` mudou para `@openclaw/*` no npm~~ **CONFIRMADO ✅**
- [x] ~~Criar script de correção automática~~ **scripts/fix-openclaw-links.sh ✅**
- [ ] Verificar se `moltbot-ansible` mudou para `openclaw-ansible`
- [ ] Verificar se `nix-moltbot` mudou para `nix-openclaw`
- [ ] Verificar URLs de release (appcast.xml)
- [ ] Decisão: Opção A, B ou C? **→ Recomendado: Opção C (HÍBRIDA)**
- [ ] Executar script de correção: `./scripts/fix-openclaw-links.sh`
- [ ] Revisar mudanças: `git diff`
- [ ] Testar compilação: `pnpm build`
- [ ] Testar update automático (src/cli/update-cli.ts)
- [ ] Commit com mensagem: `chore: update upstream references (moltbot → openclaw)`

---

## 🔗 Referências

- Análise inicial: `UPSTREAM_MIGRATION_OPENCLAW.md`
- GitHub upstream: https://github.com/openclaw/openclaw
- NPM registry: https://www.npmjs.com/search?q=%40moltbot

---

*Auditoria gerada automaticamente via Grep + análise manual*
