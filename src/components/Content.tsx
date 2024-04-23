import { Link } from "react-router-dom";
import {
  FaPhoneSquareAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import CVFile from "../assets/CV_Szakacsi_Ferenc-Adam.pdf";

export default function Content() {
  const email = "szakfer97@gmail.com";
  const phoneNumber = "0771405782";
  const address = "Satu Mare, Romania";
  const gitHub = "szakfer97";
  const linkedIn = "Szakacsi Ferenc-Adam";
  const linkedInUrl = "https://www.linkedin.com/in/szakacsi-ferenc-adam/";
  const githubUrl = "https://github.com/szakfer97";
  return (
    <div className="items-start flex flex-col gap-2">
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <FaGithub className="inline h-6 w-6 mr-2 mt-1 animate-pulse" />
        {gitHub}
      </a>
      <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="inline h-6 w-6 mr-2 mt-1 animate-pulse" />
        {linkedIn}
      </a>
      <div className="flex items-center">
        <FaPhoneSquareAlt className="inline h-6 w-6 mr-2 mt-1 animate-pulse" />
        <button
          onClick={(e) => {
            e.preventDefault();
            navigator.clipboard.writeText(phoneNumber);
          }}
        >
          {phoneNumber}
        </button>
      </div>
      <div className="flex items-center">
        <FaMapMarkerAlt className="inline h-6 w-6 mr-2 mt-1 animate-pulse" />
        <button
          onClick={(e) => {
            e.preventDefault();
            navigator.clipboard.writeText(address);
          }}
        >
          {address}
        </button>
      </div>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=szakfer97@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineMail className="inline h-6 w-6 mr-2 mt-1 animate-pulse" />
        {email}
      </a>
      <Link to={CVFile} download target="_blank" rel="noreferrer">
        <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold px-4 py-2 flex items-center gap-2 justify-center">
          <span className="block">Download my CV</span>
        </button>
      </Link>
    </div>
  );
}
