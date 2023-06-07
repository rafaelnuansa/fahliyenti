import { useState } from "react";
import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlinePlus } from "react-icons/ai";

const FloatingButton = ({ openForm }) => {
  return (
    <button
      className="fixed bottom-32 right-8 p-4 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600"
      onClick={openForm}
    >
      <AiOutlinePlus size={24} />
    </button>
  );
};

const FloatingForm = ({ isOpen, closeModal, addWish }) => {
  const [wish, setWish] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addWish(wish);
    closeModal();
    setWish("");
  };

  return (
    <Transition.Root show={isOpen} as={Dialog} onClose={closeModal}>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

      <Transition.Child
        show={isOpen}
        as={React.Fragment}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="w-96 bg-white rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Add a Wish</h2>
            <form onSubmit={handleSubmit}>
              <textarea
                className="w-full h-32 p-2 border border-gray-300 rounded-md mb-4"
                placeholder="Enter your wish..."
                value={wish}
                onChange={(e) => setWish(e.target.value)}
                required
              ></textarea>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-4 py-2 mr-2 rounded-md bg-gray-300 text-gray-700 hover:bg-gray-400"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                >
                  Add Wish
                </button>
              </div>
            </form>
          </div>
        </div>
      </Transition.Child>
    </Transition.Root>
  );
};

export default function WishComponent() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [wishes, setWishes] = useState([]);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const addWish = (wish) => {
    setWishes((prevWishes) => [...prevWishes, wish]);
  };

  return (
    <div className="relative">
      {wishes.map((wish, index) => (
        <div key={index} className="p-4 bg-white rounded-md shadow-md mb-4">
          <p>{wish}</p>
        </div>
      ))}

      <FloatingButton openForm={openForm} />

      <FloatingForm
        isOpen={isFormOpen}
        closeModal={closeForm}
        addWish={addWish}
      />
    </div>
  );
}
