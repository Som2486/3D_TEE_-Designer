import { motions, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';

const Homepage = () => {
    const snap= useSnapshot(state);
  return (
    <AnimatePresence>
    {snap.intro && (
        <motion.section className="Home"  { ...slideAnimation('left')}>
        <motion.header>
            <img src='./threejs.png'
            alt='logo'
            className="w-8,h-8,object-contain"
            />
        </motion.header>
        <motion.div className="home-content" {
          ...headContainerAnimation}>
          <motion.div {...headTextAnimation}>
            <h1
              className="head-Text">
              LET'S <br className='x1:block hidden' /> Do IT
            </h1>
          </motion.div>
         </motion.div>
</motion.section>
    )}

    </AnimatePresence>
    
  )
}

export default Homepage
