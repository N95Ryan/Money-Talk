import React from "react";
import Panel from "./components/panel";

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center p-24 bg-emerald-600">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-6xl font-bold">Money Talk 💸</p>
        <p className="text-2xl font-light">
        {"L'argent parle, nous le traduisons."}
        </p>
        <Panel />
      </div>

    </div>
  );
}
