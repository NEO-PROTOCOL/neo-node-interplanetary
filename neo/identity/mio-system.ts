/**
 * mio-system Identity - Web3 Identity System para NEO Protocol
 * 
 * Sistema de identidade baseado em assinaturas cryptográficas (Ethereum-style)
 * Cada identidade possui:
 * - ID único: mio-[hash]
 * - Par de chaves (pública/privada)
 * - Roles e permissões
 * - Assinatura verificável
 */

/**
 * Identidade NEO (mio-system)
 */
export interface NeoIdentity {
  id: string                    // mio-[hash] (ex: "mio-abc12345")
  publicKey: string             // Ethereum address (0x...)
  
  roles: string[]               // Roles (ex: ["system", "gateway", "developer"])
  
  permissions: {
    channels: string[]          // Canais permitidos (ex: ["whatsapp", "telegram", "*"])
    skills: string[]            // Skills permitidas (ex: ["ipfs-status", "*"])
    tools: string[]             // Tools permitidas (ex: ["read", "write", "exec"])
  }
  
  metadata: {
    name: string                // Nome legível
    avatar?: string             // Avatar IPFS CID (opcional)
    bio?: string                // Biografia (opcional)
    website?: string            // Website (opcional)
  }
  
  createdAt: Date
  signature: string             // Assinatura Web3 da identidade
}

/**
 * Gerenciador de Identidades mio-system
 * 
 * @example
 * ```typescript
 * // Criar nova identidade
 * const manager = new MioIdentityManager(privateKey)
 * const identity = await manager.createIdentity({
 *   name: 'NEO Gateway',
 *   bio: 'Gateway principal do protocolo NEO'
 * })
 * 
 * // Verificar identidade
 * const isValid = await manager.verifyIdentity(identity)
 * ```
 */
export class MioIdentityManager {
  private privateKey: string
  
  constructor(privateKey: string) {
    if (!privateKey) {
      throw new Error('Private key is required')
    }
    this.privateKey = privateKey
  }
  
  /**
   * Cria uma nova identidade mio-system
   */
  async createIdentity(metadata: {
    name: string
    avatar?: string
    bio?: string
    website?: string
  }, options?: {
    roles?: string[]
    permissions?: NeoIdentity['permissions']
  }): Promise<NeoIdentity> {
    // TODO: Implementar com ethers.js
    // 1. Gerar publicKey do privateKey
    // 2. Criar ID: mio-[hash dos primeiros 8 chars do publicKey]
    // 3. Criar objeto identity
    // 4. Assinar com privateKey
    
    throw new Error('Not implemented yet - Coming in Phase 1.3')
  }
  
  /**
   * Verifica a assinatura de uma identidade
   */
  async verifyIdentity(identity: NeoIdentity): Promise<boolean> {
    // TODO: Implementar verificação Web3
    // 1. Recuperar message original (sem signature)
    // 2. Verificar signature com ethers.verifyMessage
    // 3. Comparar com publicKey da identity
    
    throw new Error('Not implemented yet - Coming in Phase 1.3')
  }
  
  /**
   * Assina uma mensagem com a identidade
   */
  async signMessage(message: string): Promise<string> {
    // TODO: Implementar com ethers.js
    throw new Error('Not implemented yet - Coming in Phase 1.3')
  }
  
  /**
   * Exporta a identidade para JSON
   */
  toJSON(identity: NeoIdentity): string {
    return JSON.stringify(identity, null, 2)
  }
  
  /**
   * Importa identidade de JSON
   */
  fromJSON(json: string): NeoIdentity {
    return JSON.parse(json) as NeoIdentity
  }
}

/**
 * Factory function
 */
export function createMioIdentityManager(privateKey: string): MioIdentityManager {
  return new MioIdentityManager(privateKey)
}

/**
 * Valida formato de um mio-ID
 */
export function isValidMioId(id: string): boolean {
  return /^mio-[a-f0-9]{8}$/i.test(id)
}

/**
 * Gera mio-ID de um publicKey
 */
export function generateMioId(publicKey: string): string {
  // Remove "0x" prefix e pega primeiros 8 chars
  const hash = publicKey.replace(/^0x/, '').slice(0, 8).toLowerCase()
  return `mio-${hash}`
}
