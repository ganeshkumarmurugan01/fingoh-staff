/**
 * client-config.js — Staff App
 * Vanilla JS — no build step needed.
 * Override window.__CLIENT_CONFIG before this script for customisation.
 */
window.CLIENT_CONFIG = window.CLIENT_CONFIG || {};
const cfg = window.CLIENT_CONFIG;

const CLIENT = {
  name:           cfg.name           || 'Fingoh',
  logoUrl:        cfg.logoUrl        || '/Fingoh_Black.png',
  logoWhite:      cfg.logoWhite      || '/Fingoh_White.png',
  brandPrimary:   cfg.brandPrimary   || '#26215C',
  supportEmail:   cfg.supportEmail   || 'hello@fingoh.ai',
  showFingohBadge:cfg.showFingohBadge !== false,
  features: {
    meetingMatch:  cfg.features?.meetingMatch  !== false,
    walkIn:        cfg.features?.walkIn        !== false,
    voiceNotes:    cfg.features?.voiceNotes    !== false,
    agentOutreach: cfg.features?.agentOutreach === true,
  }
};

// Apply branding
document.title = CLIENT.name + ' Staff';
