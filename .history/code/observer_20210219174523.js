class Observer{
    constructor(){
        this.events = {};
    }
    subsrible(eventName,callback) {
        if (this.events[eventName]) {
            this.events[eventName].push(callback);

        } else {
            this.events[eventName]=[callback]
        }
    }

    unsubsrible(eventName,callback) {
        const allCbs = this.events[eventName];
        this.events[eventName] = allCbs.filter(item=>item!==callback)
    }

    publish(eventName,...args) {
        const allCbs = this.events[eventName];
        allCbs.foreach(item=>{ item && item(...args) })
    }
}