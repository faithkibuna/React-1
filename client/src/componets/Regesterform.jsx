import react from "react";
function Regesterform() {
  return (
    <div>
      <form
        action="/submit_registration"
        method="POST"
        class="bg-white w-full max-w-2xl pt-25 rounded-lg shadow"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label for="first-name" class="block font-medium mb-1">
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              name="first_name"
              required
              placeholder="June"
              class="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
          <div>
            <label for="last-name" class="block font-medium mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              name="last_name"
              required
              placeholder="Justine"
              class="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
        </div>

        <div class="mb-4">
          <label for="email" class="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="example@gmail.com"
            class="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        <div class="mb-4">
          <label for="username" class="block font-medium mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            placeholder="June"
            class="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        <div class="mb-4">
          <label for="phone" class="block font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="+254-712345678"
            class="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        <div class="mb-4">
          <label for="dob" class="block font-medium mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        <div class="mb-4">
          <label for="gender" class="block font-medium mb-1">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2"
          >
            <option value="">Select your gender</option>
            <option value="other">Other</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label for="password" class="block font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="***********"
              class="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
          <div>
            <label for="confirm-password" class="block font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm_password"
              required
              placeholder="***********"
              class="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
        </div>

        <div class="mb-4 flex items-center">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            required
            class="mr-2"
          />
          <label for="terms" class="block font-medium">
            I agree to the terms and conditions
          </label>
        </div>

        <div class="mb-4 text-center">
          <p>
            Already have an account?
            <a href="login.html" class="text-pink-600">
              Login
            </a>
          </p>
        </div>

        <div>
          <button
            type="submit"
            class="w-full bg-pink-600 text-white py-2 rounded-lg "
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Regesterform;
