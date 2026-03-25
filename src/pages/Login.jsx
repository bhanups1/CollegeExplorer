import React from 'react';

const Login = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-emerald-50 via-white to-sky-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-xl shadow-emerald-100/40">
        <div className="hidden w-1/2 bg-gradient-to-br from-emerald-600 via-green-500 to-sky-500 p-10 text-white lg:block">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-100">
            CollegeExplorer
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight">
            Welcome back to your college discovery hub
          </h1>
          <p className="max-w-md text-base text-emerald-50/90">
            Sign in to save colleges, compare options, and continue exploring the programs that fit your goals.
          </p>
        </div>

        <div className="w-full p-8 sm:p-10 lg:w-1/2">
          <div className="mx-auto max-w-md">
            <h2 className="text-3xl font-bold text-slate-900">Sign In</h2>
            <p className="mt-2 text-sm text-slate-600">
              Use your email and password to continue.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                  Email address
                </label>
                <input
                  id="email"
                  type="bhanupartap@example.com"
                  placeholder="bhanupartap@example.com"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>
                <input
                  id="password"
                  type="Shubh$#11"
                  placeholder="Shubh$#11"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 px-4 py-3 font-semibold text-white shadow-lg shadow-emerald-100 transition hover:from-emerald-600 hover:to-sky-600"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
