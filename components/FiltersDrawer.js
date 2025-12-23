"use client";

import { motion } from "framer-motion";

export default function FiltersDrawer() {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl p-5 shadow-2xl lg:hidden"
    >
      <h3 className="font-semibold mb-4">Filters</h3>

      <div className="space-y-3 text-sm">
        <label className="flex gap-2">
          <input type="checkbox" /> S
        </label>
        <label className="flex gap-2">
          <input type="checkbox" /> M
        </label>
        <label className="flex gap-2">
          <input type="checkbox" /> L
        </label>
      </div>

      <button className="mt-5 w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        Apply Filters
      </button>
    </motion.div>
  );
}
