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
        <div className="absolute md:top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] hidden md:block ">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div
          style={{
            width: 'calc(6.5rem + 6.5vw)',
            height: 'calc(4.9rem + 4.9vw)',
          }}
          className="absolute top-[50%] md:top-1/2 left-[3%] md:left-[10%] p-[11px] rounded-2xl bg-[#5d6680] shadow-[0px_40px_80px_0px_#2b2b2b]"
        >
          <img
            src="planet-02.png"
            alt="planet"
            className="object-cover rounded-xl w-full h-full shadow-[0_0px_50px_#eb58a2]"
          />
          <div className="absolute bottom-6 left-7">
            <div className="flex items-center">
              <div
                style={{
                  marginBottom: 'calc(0.2rem + 0.2vw)',
                }}
                className="flex items-center justify-start"
              >
                <img
                  style={{
                    width: 'calc(0.7rem + 0.7vw)',
                    height: 'calc(0.7rem + 0.7vw)',
                  }}
                  src="people-01.png"
                  className="absolute z-30 rounded-full"
                  alt=""
                />
                <img
                  style={{
                    width: 'calc(0.7rem + 0.7vw)',
                    height: 'calc(0.7rem + 0.7vw)',
                  }}
                  src="people-02.png"
                  className="absolute z-20 ml-3 rounded-full"
                  alt=""
                />
                <img
                  style={{
                    width: 'calc(0.7rem + 0.7vw)',
                    height: 'calc(0.7rem + 0.7vw)',
                  }}
                  src="people-03.png"
                  className="absolute z-10 ml-6 rounded-full"
                  alt=""
                />
                <p
                  style={{
                    fontSize: 'calc(0.35rem + 0.35vw)',
                    marginLeft: 'calc(1.6rem + 1.6vw)',
                  }}
                  className=" text-white text-[12px] "
                >
                  + 264 has joined
                </p>
              </div>
            </div>
            <span
              style={{
                fontSize: 'calc(0.52rem + 0.52vw)',
              }}
              className="  text-white text-[18px] font-semibold mx-auto"
            >
              The Upside Down
            </span>
          </div>
        </div>
        <div
          style={{
            width: 'calc(6.5rem + 6.5vw)',
            height: 'calc(4.9rem + 4.9vw)',
          }}
          className="absolute top-[25%] md:top-[4%] right-[3%] md:right-[12%] p-[11px] rounded-2xl bg-[#5d6680] shadow-[0px_40px_80px_0px_#2b2b2b]"
        >
          <img
            src="planet-03.png"
            alt="planet"
            className="object-cover w-full h-full rounded-xl object-right-bottom shadow-[0_-3px_20px_#5875eb]"
          />
          <div className="absolute bottom-6 left-7">
            <div className="flex items-center ">
              <div
                style={{
                  marginBottom: 'calc(0.2rem + 0.2vw)',
                }}
                className="flex items-center justify-start"
              >
                <img
                  src="/people-03.png"
                  style={{
                    width: 'calc(0.7rem + 0.7vw)',
                    height: 'calc(0.7rem + 0.7vw)',
                  }}
                  className="absolute z-30 rounded-full"
                  alt=""
                />
                <img
                  src="/people-02.png"
                  style={{
                    width: 'calc(0.7rem + 0.7vw)',
                    height: 'calc(0.7rem + 0.7vw)',
                  }}
                  className="absolute z-20 ml-3 rounded-full"
                  alt=""
                />
                <img
                  src="/people-01.png"
                  style={{
                    width: 'calc(0.7rem + 0.7vw)',
                    height: 'calc(0.7rem + 0.7vw)',
                  }}
                  className="absolute z-10 ml-6 rounded-full"
                  alt=""
                />
                <p
                  style={{
                    fontSize: 'calc(0.35rem + 0.35vw)',
                    marginLeft: 'calc(1.6rem + 1.6vw)',
                  }}
                  className="ml-[3.5rem] text-white text-[12px] "
                >
                  + 264 has joined
                </p>
              </div>
            </div>
            <span
              style={{
                fontSize: 'calc(0.52rem + 0.52vw)',
              }}
              className="  text-white text-[18px] font-semibold mx-auto"
            >
              Hawkins Labs{' '}
            </span>
          </div>{' '}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
