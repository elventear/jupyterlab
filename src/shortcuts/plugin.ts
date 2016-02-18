// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import {
  Application
} from 'phosphide/lib/core/application';


/**
 * The list of default application shortcuts.
 */
const SHORTCUTS = [
  {
    command: 'command-palette:activate',
    selector: '*',
    sequence: ['Alt Space']
  },
  {
    command: 'command-palette:deactivate',
    selector: '*',
    sequence: ['Escape']
  },
  {
    command: 'file-operations:new-text-file',
    selector: '*',
    sequence: ['Ctrl O']
  },
  {
    command: 'file-operations:new-notebook',
    selector: '*',
    sequence: ['Ctrl Shift N']
  },
  {
    command: 'file-operations:save',
    selector: '.jp-Document',
    sequence: ['Accel S']
  },
  {
    command: 'file-operations:close',
    selector: '.jp-Document',
    sequence: ['Ctrl Q']
  },
  {
    command: 'file-operations:close-all',
    selector: '.jp-Document',
    sequence: ['Ctrl Shift Q']
  },
  {
    command: 'notebook:execute-selected-cell',
    selector: '.jp-CodeCell',
    sequence: ['Shift Enter']
  },
  {
    command: 'notebook:render-selected-cell',
    selector: '.jp-MarkdownCell',
    sequence: ['Shift Enter']
  }

];


/**
 * The default shortcuts extension. 
 */
export
const shortcutsExtension = {
  id: 'jupyter.extensions.shortcuts',
  activate: (app: Application): Promise<void> => {
    app.shortcuts.add(SHORTCUTS);
    return Promise.resolve(void 0);
  }
};

