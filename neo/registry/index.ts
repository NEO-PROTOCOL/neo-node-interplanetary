/**
 * NEO Skills Registry - IPFS-based decentralized skills repository
 * 
 * Substitui: ClawdHub (https://clawdhub.com)
 * Protocolo: IPFS (Content-Addressed Storage)
 */

import type { CID } from 'multiformats/cid'

/**
 * Schema de uma NEO Skill
 */
export interface NeoSkill {
  id: string                    // Identificador único (ex: "ipfs-status")
  name: string                  // Nome legível (ex: "IPFS Status Checker")
  version: string               // SemVer (ex: "1.0.0")
  cid: string                   // IPFS Content ID
  author: string                // mio-identity (ex: "mio-skills")
  category: string[]            // Tags (ex: ["storage", "blockchain"])
  
  metadata: {
    description: string         // Descrição da skill
    dependencies: string[]      // Dependências npm
    permissions: string[]       // Permissões necessárias
    repository?: string         // URL do repo (opcional)
    license?: string            // Licença (default: MIT)
  }
  
  files: {
    main: string                // Entry point (ex: "index.ts")
    readme: string              // SKILL.md
    config?: string             // config.ts (opcional)
  }
  
  signature: string             // Assinatura Web3 do autor
  createdAt: Date
  updatedAt: Date
}

/**
 * Index IPFS - contém lista de todas as skills
 */
export interface NeoSkillsIndex {
  version: string               // Versão do index
  skills: Record<string, {      // Map: skillId → CID
    latest: string              // CID da última versão
    versions: Record<string, string> // SemVer → CID
  }>
  updatedAt: Date
}

/**
 * NEO Skills Registry Client
 * 
 * @example
 * ```typescript
 * const registry = new NeoSkillsRegistry()
 * 
 * // Publicar skill
 * const cid = await registry.publish({
 *   id: 'ipfs-status',
 *   name: 'IPFS Status Checker',
 *   version: '1.0.0',
 *   // ...
 * })
 * 
 * // Instalar skill
 * const skill = await registry.install('ipfs-status@1.0.0')
 * 
 * // Buscar skills
 * const results = await registry.search('ipfs')
 * ```
 */
export class NeoSkillsRegistry {
  private ipfsEndpoint: string
  private indexCID: string | null = null
  
  constructor(options?: {
    ipfsEndpoint?: string
    indexCID?: string
  }) {
    this.ipfsEndpoint = options?.ipfsEndpoint || 'https://ipfs.infura.io:5001'
    this.indexCID = options?.indexCID || null
  }
  
  /**
   * Publica uma skill no IPFS
   */
  async publish(skill: Omit<NeoSkill, 'cid' | 'signature' | 'createdAt' | 'updatedAt'>): Promise<string> {
    // TODO: Implementar
    throw new Error('Not implemented yet - Coming in Phase 1.2')
  }
  
  /**
   * Instala uma skill do IPFS
   */
  async install(skillSpec: string): Promise<NeoSkill> {
    // skillSpec: "ipfs-status@1.0.0" ou "ipfs-status" (latest)
    // TODO: Implementar
    throw new Error('Not implemented yet - Coming in Phase 1.2')
  }
  
  /**
   * Busca skills no registry
   */
  async search(query: string): Promise<NeoSkill[]> {
    // TODO: Implementar
    throw new Error('Not implemented yet - Coming in Phase 1.2')
  }
  
  /**
   * Lista todas as skills
   */
  async list(): Promise<NeoSkill[]> {
    // TODO: Implementar busca no index
    throw new Error('Not implemented yet - Coming in Phase 1.2')
  }
  
  /**
   * Obtém informações de uma skill específica
   */
  async get(skillId: string, version?: string): Promise<NeoSkill | null> {
    // TODO: Implementar
    throw new Error('Not implemented yet - Coming in Phase 1.2')
  }
  
  /**
   * Verifica a assinatura de uma skill
   */
  async verify(skill: NeoSkill): Promise<boolean> {
    // TODO: Implementar verificação Web3
    throw new Error('Not implemented yet - Coming in Phase 1.3')
  }
  
  /**
   * Obtém o CID do index atual
   */
  async getIndexCID(): Promise<string> {
    if (this.indexCID) return this.indexCID
    
    // TODO: Buscar do DNS ou config
    throw new Error('Index CID not configured')
  }
  
  /**
   * Atualiza o index com uma nova skill
   */
  private async updateIndex(skillId: string, version: string, cid: string): Promise<void> {
    // TODO: Implementar atualização do index
    throw new Error('Not implemented yet - Coming in Phase 1.2')
  }
}

/**
 * Factory function
 */
export function createNeoSkillsRegistry(options?: {
  ipfsEndpoint?: string
  indexCID?: string
}): NeoSkillsRegistry {
  return new NeoSkillsRegistry(options)
}

/**
 * Exporta tipos
 */
export type { CID }
