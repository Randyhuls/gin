export var EventType;
(function (EventType) {
    EventType["COLLISION"] = "COLLISION";
    EventType["UPDATE"] = "UPDATE";
})(EventType || (EventType = {}));
export const onUpdateEvent = (delta, fps) => new CustomEvent(EventType.UPDATE, { detail: { delta, fps } });
export const onCollisionEvent = (sourceId, targets) => new CustomEvent(EventType.COLLISION, { detail: { sourceId, targets } });
//# sourceMappingURL=events.js.map