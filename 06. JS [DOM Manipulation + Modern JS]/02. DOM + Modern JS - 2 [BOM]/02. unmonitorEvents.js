// ------------------------------
// unmonitorEvents() in DevTools
// ------------------------------

// unmonitorEvents(object [, events])
// -> A Chrome DevTools utility (not standard JS).
// -> It stops logging events that were being monitored with monitorEvents().

// Example 1: Stop monitoring all events on document
unmonitorEvents(document);

// Example 2: Stop monitoring only specific events
unmonitorEvents(document, 'click');
unmonitorEvents(document, ['click','keydown']);
