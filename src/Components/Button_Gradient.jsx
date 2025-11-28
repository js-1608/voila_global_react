import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export default function Button_Gradient({ text, link }) {
    return (
        <Link to={link} className="bg-gradient-to-r from-[#F4CF25] to-[#F46925] text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-all duration-300 transform hover:scale-105">

            {text} <ArrowRight className="w-4 h-4" />
        </Link>
    );
}