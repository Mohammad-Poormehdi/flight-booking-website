import SocialMediaCard from "./SocailMediaCard";
import { BsInstagram } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
const Contact = () => {
  return (
    <section className="contact bg-gray-200 space-y-10 py-[50px] w-full">
      <h1 className="text-center font-bold text-4xl">با ما در ارتباط باشید</h1>
      <div className="flex justify-center items-center gap-10 max-md:flex-col">
        <SocialMediaCard icon={BsInstagram} link="#" />
        <SocialMediaCard icon={MdAlternateEmail} link="#" />
      </div>
    </section>
  );
};
export default Contact;
