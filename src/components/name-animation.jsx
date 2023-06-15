import { TypeAnimation } from 'react-type-animation';
 
function NameAnimation() {
  return (
    <TypeAnimation
      sequence={[
        'Hello! My name is Tantra',
        1500, // Waits 1s
        "I'm a Software Engineer",
        1500,
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      speed={1}
      deletionSpeed={40}
      style={{ fontSize: '4em', 
      display: 'inline-block',
      color:"white", 
      fontWeight:600, 
      fontFamily:"Inconsolata"}}
    />
  );
};

export default NameAnimation;