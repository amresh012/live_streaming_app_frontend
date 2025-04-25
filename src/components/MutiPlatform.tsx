import React, { useState } from "react";
import clsx from "clsx";
import Button from "./Button";

const defaultPlatforms = [
  { name: "YouTube", key: "youtube" },
  { name: "Facebook", key: "facebook" },
  { name: "Twitch", key: "twitch" },
];

const MultiplatformManager = () => {
  const [availablePlatforms, setAvailablePlatforms] = useState(defaultPlatforms);
  const [selected, setSelected] = useState<string[]>([]);
  const [streamKeys, setStreamKeys] = useState<Record<string, string>>({});
  const [connectionStatus, setConnectionStatus] = useState<Record<string, boolean>>({});
  const [newPlatform, setNewPlatform] = useState({ name: "", key: "" });

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = Array.from(e.target.selectedOptions).map(o => o.value);
    setSelected(options);
  };

  const handleKeyChange = (key: string, value: string) => {
    setStreamKeys(prev => ({ ...prev, [key]: value }));
    setConnectionStatus(prev => ({ ...prev, [key]: !!value }));
  };

  const handleAddPlatform = () => {
    if (newPlatform.name && newPlatform.key) {
      setAvailablePlatforms(prev => [...prev, { ...newPlatform }]);
      setNewPlatform({ name: "", key: "" });
    }
  };

  const handleConnect = () => {
    const payload = selected.map(key => ({
      platform: key,
      streamKey: streamKeys[key],
    }));
    console.log("Connecting to:", payload);
    // Trigger API or backend stream handler
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow dark:bg-gray-800 rounded-xl space-y-4">
      <h2 className="text-xl font-bold">Multiplatform Streaming</h2>

      {/* Dropdown */}
      <label className="text-sm font-medium text-gray-700">Select Platforms</label>
      <select
        multiple
        className="w-full outline-none cursor-pointer px-3 py-2 rounded dark:text-white dark:bg-gray-800"
        onChange={handleSelect}
        value={selected}
      >
        {availablePlatforms.map(p => (
          <option key={p.key} value={p.key}>
            {p.name}
          </option>
        ))}
      </select>

      {/* Platform stream keys */}
      {selected.map(key => {
        const platform = availablePlatforms.find(p => p.key === key);
        return (
          <div key={key} className="space-y-1">
            <label className="flex justify-between items-center text-sm font-medium">
              {platform?.name}
              <span
                className={clsx(
                  "text-xs px-2 py-0.5 rounded",
                  connectionStatus[key]
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-500"
                )}
              >
                {connectionStatus[key] ? "Connected" : "Not Connected"}
              </span>
            </label>
            <input
              type="text"
              placeholder={`Enter ${platform?.name} RTMP URL or Key`}
              className="w-full border px-3 py-2 rounded dark:text-black"
              value={streamKeys[key] || ""}
              onChange={e => handleKeyChange(key, e.target.value)}
            />
          </div>
        );
      })}

      {/* Add new platform */}
      <div className="border-t pt-4 space-y-2">
        <h3 className="text-sm font-semibold">Add Custom Platform</h3>
        <input
          type="text"
          placeholder="Platform Name"
          className="w-full border px-3 py-1 rounded dark:text-black"
          value={newPlatform.name}
          onChange={e => setNewPlatform(prev => ({ ...prev, name: e.target.value }))}
        />
        <input
          type="text"
          placeholder="Platform Key (unique)"
          className="w-full border px-3 py-1 rounded dark:text-black"
          value={newPlatform.key}
          onChange={e => setNewPlatform(prev => ({ ...prev, key: e.target.value }))}
        />
        <Button
          className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-sm"
          onClick={handleAddPlatform}
        >
          Add Platform
        </Button>
      </div>

      {/* Connect button */}
      <button
        onClick={handleConnect}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
      >
        Connect & Start Streaming
      </button>
    </div>
  );
};

export default MultiplatformManager;
