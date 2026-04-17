import { contextBridge } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  // reserved for future IPC
})
