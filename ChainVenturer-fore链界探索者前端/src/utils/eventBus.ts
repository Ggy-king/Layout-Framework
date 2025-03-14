// eventBus.ts
type BusEvent = {
  emit: (name: string, ...args: any[]) => void
  on: (name: string, callback: Function) => void
  off: (name: string) => void
}
 
class Bus implements BusEvent {
  private list: { [key: string]: Array<Function> } = {};
 
  emit(name: string, ...args: any[]) {
    const eventNameListeners = this.list[name]
    if (eventNameListeners) {
      eventNameListeners.forEach(fn => fn(...args))
    }
  }
 
  on(name: string, callback: Function) {
    if (!this.list[name]) {
      this.list[name] = []
    }
    this.list[name].push(callback)
  }
 
  off(name: string) {
    delete this.list[name]
  }
}
 
export const eventBus = new Bus()