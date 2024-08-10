'use client'
// components/YourBorrows.tsx
export const YourBorrows = () => {
    return (
      <div className="bg-zinc-900 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-lg font-semibold">Your borrows</h2>
        </div>
        <p className="text-gray-400">Nothing borrowed yet</p>
      </div>
    );
  };