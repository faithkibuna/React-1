import react from "react";
function LoginForm() {
  return (
    <div>
      <main class="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div class="w-full max-w-md bg-white p-6 rounded-lg shadow">
          <h1 class="font-bold text-xl mb-4">Login To Charity Mind</h1>
          <form class="w-full">
            <div class="mb-4">
              <label for="full-name" class="block font-medium mb-1">
                Full name
              </label>
              <input
                id="full-name"
                name="full-name"
                type="text"
                placeholder="faith wambui wanjiku"
                required
                class="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <div class="mb-4">
              <label for="username" class="block font-medium mb-1">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="faith"
                required
                class="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <div class="mb-4">
              <label for="password" class="block font-medium mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="**********"
                required
                class="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <div class="mb-4 flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="mr-2"
              />
              <label for="remember-me" class="font-medium">
                Remember Me
              </label>
            </div>

            <div class="mb-4">
              <button
                type="submit"
                class="w-full bg-pink-600 text-white text-xl py-2 rounded-lg"
              >
                Login
              </button>
            </div>

            <p class="text-center mb-2">Don't have an account? Register</p>
            <div>
              <a
                href="register.html"
                class="block w-full bg-pink-600 text-white text-center py-2 rounded-lg"
              >
                Register
              </a>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default LoginForm;
