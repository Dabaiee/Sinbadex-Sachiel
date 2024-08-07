'use client'
// components/YourBorrows.tsx
export const YourBorrows = () => {
    return (
      <div className="bg-zinc-900 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-lg font-semibold">Your borrows</h2>
          <div>
            <span className="text-gray-400 mr-2">E-Mode</span>
            <span className="text-gray-400 bg-gray-700 px-2 py-1 rounded">DISABLED</span>
          </div>
        </div>
        <p className="text-gray-400">Nothing borrowed yet</p>
      </div>
    );
  };