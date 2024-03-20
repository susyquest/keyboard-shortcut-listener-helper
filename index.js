const _ = require('lodash');
const EventEmitter = require('eventemitter3');

class KeyboardShortcutListenerHelper extends EventEmitter {
  constructor() {
    super();
    this.shortcuts = new Map();
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  registerShortcut(shortcut, callback) {
    // Normalize and register a shortcut
    const normalizedShortcut = this.normalizeShortcut(shortcut);
    this.shortcuts.set(normalizedShortcut, callback);
  }

  normalizeShortcut(shortcut) {
    // Normalize the shortcut key combination
    return shortcut.toLowerCase().split('+').sort().join('+');
  }

  handleKeyDown(event) {
    const pressedKeys = [
      event.ctrlKey ? 'ctrl' : '',
      event.shiftKey ? 'shift' : '',
      event.altKey ? 'alt' : '',
      event.key.toLowerCase(),
    ].filter(Boolean).sort().join('+');

    const callback = this.shortcuts.get(pressedKeys);
    if (callback) {
      callback();
      event.preventDefault();
    }
  }
}

module.exports = KeyboardShortcutListenerHelper;
