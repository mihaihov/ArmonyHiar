import { contactBackground } from "../assets";
import { logo } from "../assets";

const Contact = () => (
  <div className="h-screen w-screen bg-cover bg-black">
    <div
      className="bg-cover h-screen w-screen opacity-75"
      style={{ backgroundImage: `url(${contactBackground})` }}
    >
      <img
        src={logo}
        className="relative w-[300px] transform -translate-x-1/2 left-1/2 flex items-center pt-8"
      />
    </div>
  </div>
);

export default Contact;
