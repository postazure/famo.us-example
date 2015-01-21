function waterline() {

  var Engine = famous.core.Engine;
  var Surface = famous.core.Surface;
  var Transform = famous.core.Transform;
  var StateModifier = famous.modifiers.StateModifier;
  var Transitionable = famous.transitions.Transitionable;
  var SpringTransition = famous.transitions.SpringTransition;

  var mainContext = Engine.createContext();

  var ocean = new Surface({
    size: [undefined, undefined],
    properties: {
      backgroundColor: 'blue',
      opacity: 30
    }
  });
  var waterLine = new Surface({
    size: [undefined, 3],
    properties: {
      backgroundColor: '#0066FF'
    }
  });


  var originModifier = new StateModifier({
    origin: [0.5, 0],
    align: [0.5, 0],
    transform: Transform.translate(0, 400, 0),
    opacity: 0.25
  });

  var node = mainContext.add(originModifier);
  node.add(ocean);
  node.add(waterLine);
}
