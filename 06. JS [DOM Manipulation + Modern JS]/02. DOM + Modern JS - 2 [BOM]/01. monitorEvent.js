// ------------------------------
// monitorEvents() in DevTools
// ------------------------------

// monitorEvents(object [, events])
// -> A Chrome DevTools utility (not part of standard JS).
// -> It logs events fired on the given object (like document, element, window).

// Example 1: Monitor all events on document
monitorEvents(document);

// Example 2: Monitor only specific events
monitorEvents(document, 'click');         // only click events
monitorEvents(document, ['click','keydown']); // multiple events

