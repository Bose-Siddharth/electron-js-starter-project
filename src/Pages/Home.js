import React from "react";

function Home() {
  return (
    <div className="px-4 md:px-16">
      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <div className="rounded bg-white h-auto min-height-40 shadow bg-blue-300 py-3 text-white">
          <h2 className="text-2xl text-center">Registration</h2>
          <h2 className="text-6xl text-center py-2">3000</h2>
        </div>
        <div className="rounded bg-white h-auto min-height-40 shadow bg-blue-300 text-white py-3">
          <h2 className="text-2xl text-center">Time</h2>
          <h2 className="text-6xl text-center py-2">3 Weeks</h2>
        </div>
        <div className="rounded bg-white h-40 min-height-40 shadow bg-blue-300 text-white py-3">
          <h2 className="text-2xl text-center">New Registration</h2>
          <h2 className="text-6xl text-center py-2">48</h2>
        </div>
      </div>
      <div className="grid col-1 bg-slate-100 border rounded border-black h-96">
        <h2 className="text-4xl px-5 pt-10 text-center">Automation</h2>
        <p className="text-xl px-5 text-center">
          Welcome to the NHS from automation software dashboard. This tool is
          <br /> designed to simplify the process of filling out and submitting
          NHS Form.
        </p>
        <div class="flex justify-center gap-10 h-10">
          <button type="submit" className="py-2 px-10 bg-cyan-300">
            Automate
          </button>
          <button type="submit" className="py-2 px-10 bg-cyan-300">
            Update Database
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
