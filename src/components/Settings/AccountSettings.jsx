import { useEffect, useState } from "react";
import API from "../../api/certificateApi";
import toast from "react-hot-toast";

function AccountSettings() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    setForm({
      name: localStorage.getItem("name") || "",
      email: localStorage.getItem("email") || "",
    });
  }, []);

  const handleSave = async () => {
    try {
      const res = await API.put("/users/profile", form);

      localStorage.setItem("name", res.data.user.name);
      localStorage.setItem("email", res.data.user.email);

      toast.success("Profile Updated");
    } catch (err) {
      toast.error("Failed to update profile");
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-8">
        Account Information
      </h2>

      <div className="space-y-6">

        <div>
          <label className="font-semibold">
            Name
          </label>

          <input
            value={form.name}
            onChange={(e)=>
              setForm({
                ...form,
                name:e.target.value
              })
            }
            className="w-full mt-2 border rounded-xl p-3"
          />
        </div>

        <div>
          <label className="font-semibold">
            Email
          </label>

          <input
            value={form.email}
            onChange={(e)=>
              setForm({
                ...form,
                email:e.target.value
              })
            }
            className="w-full mt-2 border rounded-xl p-3"
          />
        </div>

        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
        >
          Save Changes
        </button>

      </div>

    </div>
  );
}

export default AccountSettings;