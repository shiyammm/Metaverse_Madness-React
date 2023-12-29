import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';


const World = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
    >
      <TypingText title="| People on the world" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="object-cover w-full h-full" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className=" absolute top-[16rem] left-[9rem] p-3 bg-[#48484871] rounded-2xl shadow-[0px_40px_80px_0px_#2b2b2b]">
          <img
            src="/card1bg.png"
            className="w-[214px] h-[164px] rounded-xl shadow-[0_0px_50px_#eb58a2] "
          ></img>
          <div className="absolute bottom-6 left-7">
            <div className="flex items-center ">
              <div className="flex flex-row items-center justify-start mb-2">
                <img
                  src="/people-4.png"
                  className="absolute z-30 w-[24px] h-[24px] rounded-full"
                  alt=""
                />
                <img
                  src="/people-05.png"
                  className="absolute z-20 w-[24px] h-[24px] ml-3 rounded-full"
                  alt=""
                />
                <img
                  src="/people-06.png"
                  className="absolute z-10 w-[24px] h-[24px] ml-6 rounded-full"
                  alt=""
                />
                <p className="ml-[3.5rem] text-white text-[12px] ">
                  + 264 has joined
                </p>
              </div>
            </div>
            <span className="  text-white text-[18px] font-semibold mx-auto">
              The Upside Down
            </span>
          </div>
        </div>
        <div className=" absolute top-0 right-[15rem] p-3 bg-[#48484871] rounded-2xl shadow-[0px_40px_80px_0px_#2b2b2b]">
          <img
            src="/card2bg.png"
            className="w-[196px] object-cover h-[150px] object-right-bottom  rounded-xl shadow-[0_-3px_20px_#5875eb] "
          ></img>
          <div className="absolute bottom-6 left-7">
            <div className="flex items-center ">
              <div className="flex flex-row items-center justify-start mb-2">
                <img
                  src="/people-4.png"
                  className="absolute z-30 w-[24px] h-[24px] rounded-full"
                  alt=""
                />
                <img
                  src="/people-05.png"
                  className="absolute z-20 w-[24px] h-[24px] ml-3 rounded-full"
                  alt=""
                />
                <img
                  src="/people-06.png"
                  className="absolute z-10 w-[24px] h-[24px] ml-6 rounded-full"
                  alt=""
                />
                <p className="ml-[3.5rem] text-white text-[12px] ">
                  + 264 has joined
                </p>
              </div>
            </div>
            <span className="  text-white text-[18px] font-semibold mx-auto">
              Hawkins Labs{' '}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
