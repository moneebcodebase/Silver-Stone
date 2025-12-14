import {apple ,bill, google} from "../assets"
import styles, {layout} from "../style"


const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
      </div>
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[2] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easly control your <br className="sm:block hidden"/> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Easily control your billing with intuitive tools that let you track expenses, 
          set limits, and stay on top of your payments. 
          Take charge of your finances without the stress—simplicity meets smart management.
        </p>
        <div className="flex flex-row flex-wrap  sm:mt-10 mt-6">
        <img src={apple} alt="applestore"
         className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer
         hover:scale-110 hover:shadow-[0_10px_20px_rgba(0,255,255,0.5)] transition-all duration-300
         rounded-lg" />
         <img src={google} alt="play store"
         className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer
         hover:scale-110 hover:shadow-[0_10px_20px_rgba(0,255,255,0.5)] transition-all duration-300
         rounded-lg" />
        </div>
      </div>
      
    </section>
  )
}

export default Billing