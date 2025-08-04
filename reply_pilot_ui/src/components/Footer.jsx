import { Github, Linkedin, Mail, Zap } from "lucide-react";

const Footer = () => {

    const socialLinks = [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/reonfernandes/",
            icon: <Linkedin className="w-5 h-5" />
        },
        {
            name: "GitHub",
            href: "https://github.com/FernandesReon",
            icon: <Github className="w-5 h-5" />
        }
    ]

    return (
        <footer className="bg-white border-t border-gray-200 mt-16 rounded-xl">
            <div className="max-w-6xl mx-auto px-6 py-6">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 mb-8">
                    {/* Brand Section */}
                    <div className="md:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                                <Zap className="w-5 h-5 text-white"/>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">Reply Pilot</h3>
                        </div>
                        <p className="text-gray-600 mb-4 max-w-lg">
                            AI-powered message generator that helps you craft perfect replies for any situation. Save time and
                            communicate more effectively with intelligent assistance.
                        </p>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Mail className="w-4 h4"/>
                            <span>reonjervasiofernandes@gmail.com</span>
                        </div>
                    </div>
                </div>

                {/* Social Links & Copyright */}
                <div className="border-t border-gray-200 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Social Media Links */}
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-600 mr-2">Follow us:</span>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        {/* Copyright */}
                        <div className="text-sm text-gray-500 text-center md:text-right">
                            <p>© {new Date().getFullYear()} Reply Pilot. All rights reserved.</p>
                            <p className="mt-1">Made with ❤️ for better communication</p>
                        </div>
                    </div>
                </div>

                {/* Mobile-specific additional info */}
                <div className="md:hidden mt-6 pt-6 border-t border-gray-200 text-center">
                    <p className="text-xs text-gray-500">Available on all devices • Secure & Private • No signup required</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;