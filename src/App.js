import "./styles.css";
import Header from "./components/Header";
import StepProgress from "./components/StepProgress";
import Mail from "./components/Step1_Mail";
import Shipping from "./components/Step2_Shipping";
import Payment from "./components/Step3_Payment";
import ProgressControl from "./components/ProgressControl";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container">
      <Header />
      <section className="my-5 d-flex row align-items-end justify-content-between">
        <section className="col-lg-6">
          <StepProgress />
          <form>
            <Mail />
            <Shipping />
            <Payment />
          </form>
          <ProgressControl />
        </section>
        <section className="col-lg-5" >
          <Cart />
        </section>
      </section>
      <Footer />
    </div>
  );
}
