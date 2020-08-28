import React,{useRef,useLayoutEffect} from 'react';
import './App.css';



function App() {
  const aliceSprite = useRef(null);
  const foreground = useRef(null);
  const background = useRef(null);
  
  useLayoutEffect(()=>{
    var spriteFrames = [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-102%)' },  
      // { transform: 'translateX(-100%)' }   
    ];

    var alice = aliceSprite.current.animate(
      spriteFrames, {
        easing: 'steps(7, end)',
        direction: "reverse",
        duration: 500,
        playbackRate: 1,
        iterations: Infinity
      });

    setInterval( function() {
      if (alice.playbackRate > .4) {
        alice.playbackRate -= .1;
        // adjustSceneryPlayback();
      } 
    }, 3000);


  })

  return (
    <div className='container'>
      <div className='sky'></div>

      <div className='earth'>
        <div className='alice'>
          <img className='alicesprite' ref={aliceSprite}
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" alt=" " />
        </div>
      </div>
      <img id="treefore" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" alt=" "/>

    </div>
  );
}

export default App;
