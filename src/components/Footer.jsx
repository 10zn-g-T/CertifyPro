import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3">

              <ShieldCheck
                size={34}
                className="text-blue-400"
              />

              <h2 className="text-3xl font-black">

                CertifyPro

              </h2>

            </div>

            <p className="text-gray-400 leading-8 mt-6">

              Secure Digital Certificate Issuing &
              Verification Platform built with
              React, Node.js, Express and MongoDB.

            </p>

          </div>

          {/* Links */}

          <div>

            <h3 className="font-bold text-xl">

              Platform

            </h3>

            <ul className="space-y-4 mt-6 text-gray-400">

              <li>Issue Certificate</li>

              <li>Verify Certificate</li>

              <li>Dashboard</li>

              <li>Analytics</li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="font-bold text-xl">

              Resources

            </h3>

            <ul className="space-y-4 mt-6 text-gray-400">

              <li>Documentation</li>

              <li>API</li>

              <li>Privacy Policy</li>

              <li>Support</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-bold text-xl">

              Contact

            </h3>

            <div className="space-y-5 mt-6">

              <div className="flex gap-3">

                <Mail className="text-blue-400" />

                <span className="text-gray-400">

                  support@certifypro.com

                </span>

              </div>

              <div className="flex gap-3">

                <Phone className="text-blue-400" />

                <span className="text-gray-400">

                  +91 98765 43210

                </span>

              </div>

              <div className="flex gap-3">

                <MapPin className="text-blue-400" />

                <span className="text-gray-400">

                  Guwahati, Assam

                </span>

              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between">

          <p className="text-gray-500">

            © 2026 CertifyPro. All Rights Reserved.

          </p>

          <p className="text-gray-500 mt-4 md:mt-0">

            Built with ❤️ using MERN Stack

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;