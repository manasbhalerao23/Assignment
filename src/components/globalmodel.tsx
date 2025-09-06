'use client';

import { useStore } from '@/store/useStore';

export function GlobalModal() {
  const { modal, closeModal } = useStore();

  if (!modal.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[400px]">
        <h2 className="text-lg font-semibold mb-4">
          {modal.type === 'create' && 'Create Campaign'}
          {modal.type === 'edit' && 'Edit Campaign'}
          {modal.type === 'delete' && 'Delete Campaign'}
        </h2>

        {/* Render content based on modal.type */}
        {modal.type === 'create' && <p>Form for creating a campaign goes here</p>}
        {modal.type === 'edit' && <p>Edit form for {JSON.stringify(modal.data)}</p>}
        {modal.type === 'delete' && <p>Are you sure you want to delete?</p>}

        <button
          onClick={closeModal}
          className="mt-4 px-4 py-2 bg-amber-700 text-white rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
}
