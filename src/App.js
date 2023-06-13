import logo from "./images/hedgehog.jpg";
import "./css/styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container mx-auto p-4">
      {/* <NavBar /> */}
      <Header />

      <main>
        <section className="mb-8 h-screen bg-gray-200">
          <h2 className="text-2xl font-bold mb-2">Meet the Hedgehog</h2>
          <img src={logo} alt="Hedgehog" className="max-w-full mb-4" />
          <p>
            Hedgehogs are small, spiky mammals known for their adorable
            appearance and unique behavior. They are native to Europe, Asia, and
            Africa and are increasingly becoming popular as pets around the
            world.
          </p>
        </section>

        <section className="mb-8 h-screen bg-gray-200">
          <h2 className="text-2xl font-bold mb-2">Hedgehog Care</h2>
          <p>
            Taking care of a hedgehog requires attention and dedication. They
            need a suitable enclosure, a balanced diet, and regular exercise.
            Hedgehogs are nocturnal animals, so it's important to provide a
            quiet and dark sleeping area during the day. Additionally, their
            spines are their primary defense mechanism, so handling them
            properly is crucial.
          </p>
        </section>

        <section className="mb-8 h-screen bg-gray-200">
          <h2 className="text-2xl font-bold mb-2">Hedgehog Facts</h2>
          <ul className="list-disc ml-8">
            <li>Hedgehogs have around 5,000 to 7,000 spines on their backs.</li>
            <li>They can roll into a tight ball for protection.</li>
            <li>Hedgehogs are insectivores and mainly eat insects.</li>
            <li>They have a relatively long lifespan of 4 to 7 years.</li>
            <li>Hedgehogs are excellent swimmers.</li>
          </ul>
        </section>

        <section className="mb-8 h-screen bg-gray-200">
          <h2 className="text-2xl font-bold mb-2">Adopt a Hedgehog</h2>
          <p>
            If you're considering getting a hedgehog as a pet, it's important to
            adopt one from a reputable source. Hedgehogs require specific care
            and can be sensitive to changes in their environment. Ensure you
            have the time, resources, and commitment to provide them with a
            healthy and happy life.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
