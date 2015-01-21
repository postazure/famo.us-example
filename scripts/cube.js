function cubeify() {
  var Engine = famous.core.Engine;
  var Surface = famous.core.Surface;
  var Transform = famous.core.Transform;
  var StateModifier = famous.modifiers.StateModifier;
  var Transitionable = famous.transitions.Transitionable;
  var SpringTransition = famous.transitions.SpringTransition;

  Transitionable.registerMethod('spring', SpringTransition);

  var mainContext = Engine.createContext();

  var surface = new Surface({
    size: [200, 200],
    properties: {
      color: 'white',
      textAlign: 'center',
      backgroundColor: '#FA5C4F',
      background: "url('/crate.png')",
      backgroundSize: "contain"
    }
  });

  var stateModifier = new StateModifier({
    origin: [0.5, 0],
    align: [0.5, 0],
    transform: Transform.rotateZ(Math.PI/4)
  });

  mainContext.add(stateModifier).add(surface);

  var spring = {
    method: 'spring',
    period: 3000,
    dampingRatio: 0.2
  };

  surface.on('click', function() {
    stateModifier.setTransform(Transform.translate(0, 300, 0), spring);
  });
}
