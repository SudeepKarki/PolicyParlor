import banner from "@/public/images/banner.png";
import BannerSearch from "../BannerSearch";


function Banner() {
  return (
    <div
      style={{
        backgroundImage: `url(${banner.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="pb-96 pt-16"
    >
      <div className="flex items-center flex-col">
        <h1 className="w-1/3 text-6xl text-center leading-20 mb-2.5">
          Explore Our Solutions We Provide It All
        </h1>
        <p className="w-1/2 text-center mb-12">
          The Company was a wholly owned subsidiary of The Oriental Government
          Security Life Assurance Company The Company was a wholly owned
          subsidiary of The Oriental Government Security Life
        </p>
        <div className="w-1/2 pb-96">
          <BannerSearch />
        </div>
      </div>
    </div>
  );
}

export default Banner;
