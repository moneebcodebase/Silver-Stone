import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain rounded-lg p-1.5
          transition-transform duration-300 hover:scale-110
           hover:shadow-[0_0_20px_rgba(0,246,255,0.7)]" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
