import { Container } from ".";

export default function DoMSC() {
  return (
    <>
      <Container id="department">
        <div className="flex justify-between">
          <img
            src="/banner1.jpg"
            alt="DoMSC"
            className="w-1/2 rounded-lg shadow shadow-slate-600"
          />
          <div className="w-5/12">
            <h2 className="text-xl font-semibold mb-3">
              Department of Mathematics & Scientific Computing{" "}
              <span className="">(DoMSC)</span>
            </h2>
            <div className="grid gap-y-3">
              <p>
                The department of Mathematics & Scientific Computing came into
                existence in August-2009. Previously, this department was a part
                of the formerly department of Applied Sciences & Humanities,
                which came into existence in 1986. Presently this department has
                12 regular faculty members from diverse areas of specialization
                in Mathematics, Statistics, Operational Research, Image
                Processing and Cryptography & Network Security.
              </p>
              <p>
                We have developed quality infrastructure to fulfil the needs of
                various science and engineering mainstreams. The Department has
                a vibrant research atmosphere backed up by good infrastructural
                facilities.
              </p>
              <p>
                The department offers B.Tech four-year program in Mathematics
                and Computing since 2020, M.Sc. in Mathematics & Scientific
                Computing and Ph.D. in various specializations of Mathematics,
                Statistics & Cryptography.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
