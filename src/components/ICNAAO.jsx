import { Container } from ".";

export default function ICNAAO() {
  return (
    <Container id="about">
      <div className="flex justify-between">
        <div className="w-3/4">
          <h2 className="text-lg font-semibold">ICNAAO 2024</h2>
          <p>
            The ICNAAO is in its 4th edition this year. The objective of the
            conference is to motivate and equip the participants with the recent
            state-of-art nonlinear analysis, fixed point theory, dynamical
            systems, optimization, fractals, applications to
            differential/integral equations and signal & image processing, soft
            computing as well as to expose the young talents with the newer
            dimensions in these areas with their practical approaches to tackle
            the real life problems in engineering, medical and social sciences &
            the Ramanujan&apos;s Conjectures so that the participants can take
            up various challenges in future.
          </p>
        </div>
        <img
          src="/logo1.png"
          alt="logo"
          className="w-1/5 rounded-lg shadow shadow-slate-600"
        />
      </div>
    </Container>
  );
}
