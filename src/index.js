/**
 * @BCHStealthProtocol/sdk
 *
 * BCH Stealth Protocol SDK — privacy primitives for Bitcoin Cash.
 *
 * Modules:
 *   - stealth   : BIP352-style stealth addresses (ECDH one-time addresses)
 *   - joiner    : Silent CoinJoin (CashFusion-compatible, Nostr-coordinated)
 *   - onion     : Onion relay client (connect to the 00-Protocol relay network)
 *   - indexer   : BCHPubkeyIndexer client (privacy-preserving stealth scanning)
 *   - common    : Shared crypto primitives
 *
 * @module @BCHStealthProtocol/sdk
 */

export * from './stealth/index.js';
export * from './joiner/index.js';
export * from './onion/index.js';
export * from './indexer/index.js';
export * from './common/index.js';
