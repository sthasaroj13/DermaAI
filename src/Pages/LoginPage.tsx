import React, { useState, type FormEvent } from "react";
import InputField from "../Component/InputField";
import { Eye, EyeOff } from "lucide-react";

interface LoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [passwordView, setPasswordView] = useState<boolean>(false);
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log("Login submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          DermaAI Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <InputField
              type="text"
              name="email"
              placeholder="Email"
              className=" w-full"
            />
          </div>
          <div className=" relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <InputField
              type={passwordView ? "text" : "password"}
              name="email"
              placeholder="Email"
              className=" w-full"
            />

            <button
              type="button"
              onClick={() => setPasswordView(!passwordView)}
              className="absolute top-10 right-3 -translate-y-1/2 text-gray-500 cursor-pointer"
            >
              {passwordView ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
