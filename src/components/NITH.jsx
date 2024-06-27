import Container from "./assets/Container";

export default function NITH() {
  return (
    <Container>
      <div className="flex flex-wrap-reverse md:flex-nowrap justify-between">
        <div className="w-5/12">
          <h2 className="text-xl font-semibold mb-3">NIT Hamipur</h2>
          <div className="grid gap-y-3">
            <p>
              The National Institute of Technology Hamirpur is one of the
              thirty-one NITs of the country, which came into existence in 1986
              as Regional Engineering College, and later upgraded to National
              Institute of Technology. The Institute offers Bachelor, Master,
              and Doctoral programs in Engineering, Sciences, Architecture,
              Management, and Humanities. Abundant green grasslands and wide
              valleys set against imposing snow-clad mountains; crystal clear
              lakes, flowing rivers and spurting streams; fruit laden groves and
              soft terraces of corn and tea are characteristics of Himachal
              Pradesh.
            </p>
            <p>
              Hamirpur area is situated at a relatively lower elevation with an
              altitude of 900 meters, is comparatively warmer and has a
              picturesque surrounding, facing snow clad Dhauladhar mountain
              ranges covered with lush green Pine forests. The place has healthy
              climate with moderate temperature ranging from 1 degree Celsius to
              38 degree Celsius.
            </p>
            <p>
              The campus is located in the picturesque surrounding and facing
              snow clad Dhauladhar Mountain ranges. It is surrounded by lush
              green pine trees. The campus is well laid with roads, electricity
              installations, water supply, underground drainage, etc.
            </p>
          </div>
        </div>
        <img
          src="/banner-2.jpg"
          alt="NITH"
          className="w-1/2 rounded-lg shadow shadow-slate-600"
        />
      </div>
    </Container>
  );
}
