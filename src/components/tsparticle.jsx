import Particles from "react-tsparticles";

 function Tsparticle() {

  return (
    <Particles options={{
        fullScreen: {
          enable: false,
        },
        particles: {
            number: {
                value: 30,
            },
            links: {
              enable: true, // enabling this will make particles linked together
              distance: 100,
              opacity: 2,
            },
            move: {
              enable: true, // enabling this will make particles move in the canvas
              speed: { min: 1, max: 5 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
            },
            opacity: {
              value: { min: 0.3, max: 1 }, // using a different opacity, to have some semitransparent effects
            },
            size: {
              value: { min: 5, max: 15 }, // let's randomize the particles size a bit
            },
          },
          backgroundMask: {
            enable: true,
            cover: {
              color: {
                value: {
                  r: 22,
                  g: 22,
                  b: 22
                }
              }
            },
          },
      }} />
  );
};

export default Tsparticle;