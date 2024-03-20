# keyboard-shortcut-listener-helper

A utility library for easily listening to complex keyboard shortcuts in web applications.

## Installation

Install `keyboard-shortcut-listener-helper` using npm:

```bash
npm install keyboard-shortcut-listener-helper
```

## Usage

To use this library, first import and instantiate `KeyboardShortcutListenerHelper`, then use `registerShortcut` to
listen for specific keyboard shortcuts.

```javascript
const KeyboardShortcutListenerHelper = require('keyboard-shortcut-listener-helper');
const listener = new KeyboardShortcutListenerHelper();

// Register a shortcut: Ctrl+Shift+A
listener.registerShortcut('ctrl+shift+a', () => {
  console.log('Shortcut Ctrl+Shift+A was pressed!');
});
```

## Dependencies

- lodash: A modern JavaScript utility library delivering modularity, performance & extras.
- eventemitter3: A high performance EventEmitter.
