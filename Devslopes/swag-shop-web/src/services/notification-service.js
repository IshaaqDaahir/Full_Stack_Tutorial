export const NOTIF_WISHLIST_CHANGED = "notif_wishlist_changed";

var observers = {};
let instance = null;

class NotificationService {
    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    postNotification = (notifName, data) => {
        let obs = observers[notifName];
        for (let index = 0; index < obs.length; index++) {
            var obj = obs[index];
            obj.callBack(data);
        }
    }

    removeObserver = (observer, notifName) => {
        var obs = observers[notifName];

        if (obs) {
            for (let index = 0; index < obs.length; index++) {
                if (observer === obs[index].observer) {
                    obs.splice(index, 1);
                    observers[notifName] = obs;
                    break;
                }
            }
        }
    }

    addObserver = (notifName, observer, callBack) => {
        let obs = observers[notifName];

        if (!obs) {
            observers[notifName] = [];
        }

        let obj = {observer: observer, callBack: callBack};
        observers[notifName].push(obj);
    }
}

export default NotificationService;