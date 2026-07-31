import { Palette, Sun, Moon, Monitor } from "lucide-react";
import { setTheme } from "../utils/theme";
import AccountSettings from "../components/Settings/AccountSettings";

function Settings() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-black text-slate-900 dark:text-white p-10">

      <div className="max-w-4xl mx-auto">

        {/* Header */}

        <div className="mb-10">

          <h1 className="text-4xl font-black">
            Settings
          </h1>

          <p className="text-gray-500 mt-2">
            Customize your CertifyPro experience.
          </p>

        </div>

        {/* Appearance */}

        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">

          <div className="flex items-center gap-3 mb-8">

            <Palette className="text-blue-600" />

            <h2 className="text-2xl font-bold">
              Appearance
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-5">

            <button
             onClick={() => setTheme("light")}
              className="border rounded-2xl p-6 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-800 transition"
            >
              <Sun
                size={35}
                className="mx-auto mb-3 text-yellow-500"
              />

              <p className="font-semibold">
                Light
              </p>

            </button>

            <button
            onClick={() => setTheme("dark")}
              className="border rounded-2xl p-6 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-800 transition"
            >
              <Moon
                size={35}
                className="mx-auto mb-3 text-indigo-500"
              />

              <p className="font-semibold">
                Dark
              </p>

            </button>

            <button
            onClick={() => setTheme("system")}
              className="border rounded-2xl p-6 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-800 transition"
            >
              <Monitor
                size={35}
                className="mx-auto mb-3 text-gray-500"
              />

              <p className="font-semibold">
                System
              </p>

            </button>

          </div>

        </div>
        
{/* Account Information */}

<div className="mt-8">
  <AccountSettings />
</div>

      </div>

    </div>
  );
}

export default Settings;