"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onCollisionEvent = exports.onUpdateEvent = exports.EventType = void 0;
var EventType;
(function (EventType) {
    EventType["COLLISION"] = "COLLISION";
    EventType["UPDATE"] = "UPDATE";
})(EventType || (exports.EventType = EventType = {}));
const onUpdateEvent = (delta, fps) => new CustomEvent(EventType.UPDATE, { detail: { delta, fps } });
exports.onUpdateEvent = onUpdateEvent;
const onCollisionEvent = (sourceId, targets) => new CustomEvent(EventType.COLLISION, { detail: { sourceId, targets } });
exports.onCollisionEvent = onCollisionEvent;
//# sourceMappingURL=events.js.map