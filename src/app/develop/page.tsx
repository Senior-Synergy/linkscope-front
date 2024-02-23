"use client";

import axios from "axios";
import React from "react";

function DevelopPage() {
  async function handleTestAPI() {
    const res = await axios.get(
      `http://localhost:8000/scan?url=${"example.com"}`
    );

    console.log(res.data);
  }

  return (
    <main className="flex flex-col flex-auto gap-4 p-4 md:p-8 self-center w-full max-w-6xl bg-white">
      <header>
        <h1 className="text-3xl font-bold mb-4">Develop Page</h1>
        <p className="text-gray-600">
          This page is a sanbox for testing stuff!
        </p>
      </header>

      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-2">
          This is wrapped in H1, 3xl, bold
        </h1>
        <h2 className="text-xl font-semibold mb-2">
          This is wrapped in H2, xl, semi-bold
        </h2>
        <h3 className="text-lg font-medium mb-2">
          This is wrapped in H3, lg, medium
        </h3>
        <p>This is wrapped in P, with no styling</p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">List demonstration</h2>
        <ol className="list-decimal pl-6">
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
        </ol>
      </div>

      <button onClick={handleTestAPI}>test API</button>

      <div className="flex flex-col gap-4 mt-8 w-full">
        <h2 className="text-xl font-semibold mb-2">Color demo</h2>

        <div className="grid grid-cols-3 gap-4">
          {/* Primary */}
          <div className="flex space-x-2">
            <div className="shrink-0 w-6 h-6 rounded-full bg-primary" />
            <p>Primary</p>
          </div>
          <div className="flex space-x-2">
            <div className="shrink-0 w-6 h-6 rounded-full bg-primary-light" />
            <p>Primary light</p>
          </div>
          <div className="flex space-x-2">
            <div className="shrink-0 w-6 h-6 rounded-full bg-primary-dark" />
            <p>Primary dark</p>
          </div>

          {/* Secondary */}
          <div className="flex space-x-2">
            <div className="shrink-0 w-6 h-6 rounded-full bg-accent" />
            <p>Accent</p>
          </div>
          <div className="flex space-x-2">
            <div className="shrink-0 w-6 h-6 rounded-full bg-accent-light" />
            <p>Accent light</p>
          </div>
          <div className="flex space-x-2">
            <div className="shrink-0 w-6 h-6 rounded-full bg-accent-dark" />
            <p>Accent dark</p>
          </div>
        </div>

        <div className="space-y-2 justify-between w-full">
          <div className="flex space-x-2">
            <div className="w-6 h-6 rounded-full bg-link" />
            <p>Link</p>
          </div>
          <div className="flex space-x-2">
            <div className="w-6 h-6 rounded-full bg-alert" />
            <p>Alert</p>
          </div>
          <div className="flex space-x-2">
            <div className="w-6 h-6 rounded-full bg-success" />
            <p>Success</p>
          </div>
          <div className="flex space-x-2">
            <div className="w-6 h-6 rounded-full bg-deactive" />
            <p>Deactivate</p>
          </div>
        </div>
      </div>

      <footer className="mt-8 text-gray-500 text-sm">
        <p>LinkScope | Senior Synergy</p>
      </footer>
    </main>
  );
}

export default DevelopPage;
