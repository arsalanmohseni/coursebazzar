import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const sections = [
    {
        title: "Solutions",
        items: ["Marketing", "Analytics", "Commerce", "Data", "Cloud"],
    },
    {
        title: "Support",
        items: ["Pricing", "Documentation", "Guides", "API Status"],
    },
    {
        title: "Company",
        items: ["About", "Blog", "Jobs", "Press", "Partners"],
    },
    {
        title: "Legal",
        items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
    },
];

const items = [
    { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
    { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
    { name: "Github", icon: FaGithub, link: "https://github.com/" },
];

const Footer = () => {
    return (
        <div className="py-y b-0 mb-0 mt-96 w-full bg-slate-900 px-2 text-gray-300">
            <div className="mx-auto grid max-w-[1240px] grid-cols-2 border-b-2 border-gray-600 py-8 md:grid-cols-6">
                {sections.map((section, index) => (
                    <div key={index}>
                        <h6 className="pt-2 font-bold uppercase">{section.title}</h6>
                        <ul>
                            {section.items.map((item, i) => (
                                <li key={i} className="py-1 text-gray-500 hover:text-white">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className="col-span-2 pt-8 md:pt-2">
                    <p className="font-bold uppercase">Subscribe to our newsletter</p>
                    <p className="py-4">The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <form className="flex flex-col sm:flex-row">
                        <input
                            className="mb-4 mr-4 w-full rounded-full p-2 ring-offset-4 transition-all ease-in-out hover:scale-105 focus:ring-4 focus:ring-blue-600"
                            type="email"
                            placeholder="Enter email.."
                        />
                        <a href="/#" className="decoration-none text-white">
                            <button className="mb-4 scale-100 rounded-full bg-blue-600 p-2 text-white ring-offset-4 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl focus:ring-4 focus:ring-blue-600">
                                Subscribe
                            </button>
                        </a>
                    </form>
                </div>
            </div>

            <div className="mx-auto flex max-w-[1240px] flex-col justify-between px-2 py-4 text-center text-gray-500 sm:flex-row">
                <p className="py-4">2022 Workflow, LLC. All rights reserved</p>
                <div className="flex justify-between pt-4 text-2xl sm:w-[300px]">
                    {items.map((x, index) => {
                        return <x.icon key={index} className="hover:text-white" />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Footer;
