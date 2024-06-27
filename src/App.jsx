import {
  Contact,
  Container,
  Corousel,
  DoMSC,
  Footer,
  ICNAAO,
  Navbar,
  Register,
} from "./components";

function App() {
  return (
    <div className="text-base">
      <Navbar />
      <div className="h-screen">
        <Corousel />
        <div className="inline-flex justify-around">
          <Container>
            <h2 className="text-lg font-semibold">Why ICNNAO-2024?</h2>
            <p>
              Attending this mathematics conference offers substantial benefits
              through its comprehensive topics. You&apos;ll gain insights into
              advanced optimization techniques, crucial for solving complex
              problems in various fields. Topics such as multi-objective
              optimization and optimization for machine learning will enhance
              your ability to create robust solutions. Theoretical areas like
              fixed point theory, nonlinear analysis, and dynamical systems will
              deepen your understanding. Exploring soft computing and
              decision-making methodologies will broaden your analytical skills.
              This conference is an invaluable opportunity to stay updated,
              network with experts, and foster professional growth in
              mathematics.
            </p>
          </Container>
          <button>Register</button>
        </div>
      </div>
      <main className="w-2/3 min-h-screen">
        <ICNAAO />
        <DoMSC />
      </main>
      <Register />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
