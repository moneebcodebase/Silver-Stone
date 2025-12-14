import { card  } from "../assets"
import styles,{layout} from "../style"
import Button from "./Button"

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal<br className="md:block hidden"/>
        in a few easy steps
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Compare options, uncover hidden benefits, 
          and choose the card that fits your lifestyle—quick, 
          easy, and stress-free.
        </p>
        <Button styles="mt-10"></Button>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card"  className="w-[100%] h-[100%]"/>
      </div>
      
    </section>
  )
}

export default CardDeal