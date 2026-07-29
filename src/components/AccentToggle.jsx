import React from 'react';
import {useAccentMode} from './useClubAccent';

export default function AccentToggle() {
  const {mode, setAccentMode} = useAccentMode();

  return (
    <div className="footer-accent-toggle">
      <span className="footer-accent-toggle__label">
        Accent: {mode === 'unified' ? 'Unified' : 'Per-club'}
      </span>
      <button
        type="button"
        className="footer-accent-toggle__button"
        onClick={() => setAccentMode(mode === 'unified' ? 'per-club' : 'unified')}
        aria-label={`Switch to ${mode === 'unified' ? 'per-club' : 'unified'} accent mode`}
        title={`Currently: ${mode === 'unified' ? 'Unified' : 'Per-club'} accent. Click to switch.`}
      >
        <span className={`footer-accent-toggle__track ${mode === 'unified' ? 'footer-accent-toggle__track--unified' : ''}`}>
          <span className="footer-accent-toggle__thumb" />
        </span>
      </button>
    </div>
  );
}
