var $injector = angular.injector(["ng", "eventService", "occurrenceService"]);
var Events = $injector.get("Events");
var Occurrences = $injector.get("Occurrences");

var eventAttributes = ["onclick", "ondblclick", "onkeypress", "onload", "onchange", "oninput", "onselect", "onsubmit"];

function formatEventName(name) {
  return name.trim();
}

// Name priority: name, id, innerHTML
function getEventName(element) {
  var name;

  if (element.hasAttribute("name")) {
    name = element.getAttribute("name");
  }
  else if (element.hasAttribute("id")) {
    name = element.getAttribute("id");
  }
  else {
    name = element.innerHTML;
  }

  return name;
}

$(document).ready(function() {
  // TODO clean up variables after script ends
  var element, eventAttribute;
  var elements = document.getElementsByTagName("*");
  var elementsLength = elements.length;
  var eventAttributesLength = eventAttributes.length;

  for (var i = 0; i < elementsLength; i++) {
    for (var j = 0; j < eventAttributesLength; j++) {
      element = elements[i];
      eventAttribute = eventAttributes[j];
      if (element.hasAttribute(eventAttribute)) {
        var event = JSON.parse('{"name" : "' + formatEventName(getEventName(element)) + '", "type" : "' + eventAttribute + '", "element" : "' + element.nodeName + '", "target" : "'+ element.getAttribute(eventAttribute) + '" }')
        console.log(event);
        var newEvent = Events.create(event);
        console.log(newEvent.id);

        // TODO bind function on event to log action in DB
        // remove "on" from eventAttribute to get event to bind
        var eventToBindOn = eventAttribute.substring(2)
        console.log(eventToBindOn);
        $(element).on(eventToBindOn, function(event) {
          //var occurrence = JSON.parse('{"event_id" : "' + event_id + '"}');
          alert(event.type + " " + event.target.nodeName);
        });
      }
    }
  }
});
