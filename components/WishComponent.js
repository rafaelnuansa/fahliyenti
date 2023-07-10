import React, { useEffect, useState } from "react";
import { RiPencilLine } from "react-icons/ri";
import WishCard from "./WishCard";
import firebase from "@/firebase";
import { getFirestore, doc, setDoc, collection, addDoc, query, orderBy, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
export default function WishComponent() {
  const initialWishLimit = 3;
  const [wishLimit, setWishLimit] = useState(initialWishLimit);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState([]);
  const firestore = getFirestore(firebase);
  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const q = query(collection(firestore, "wishes"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const fetchedWishes = snapshot.docs.map((doc) => doc.data());
        setWishes(fetchedWishes);
      } catch (error) {
        console.error("Error fetching wishes:", error);
      }
    };
  
    fetchWishes();
  }, []);
  
  const loadMoreWishes = () => {
    setWishLimit(wishLimit + initialWishLimit);
  };
  
  const makeWish = () => {
    setShowForm(true);
  };
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  
  const sendWish = async (event) => {
    event.preventDefault();
  
    try {
      await addDoc(collection(firestore, "wishes"), {
        name,
        message,
        createdAt: new Date().toISOString(),
      });
  
      setName("");
      setMessage("");
      setShowForm(false);
      const q = query(collection(firestore, "wishes"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const fetchedWishes = snapshot.docs.map((doc) => doc.data());
      setWishes(fetchedWishes);
      toast.success("Terima kasih atas harapan dan komentar anda!"); // Menampilkan toast sukses
    } catch (error) {
      console.error("Error sending wish:", error);
      toast.error("Error sending wish."); // Menampilkan toast kesalahan
    }
  };
  

  return (
    <section
      id="wish"
      className="bg-gray-100 px-5"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="relative px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          Latest Wishes &amp; Comments
        </h2>
        <div className="grid gap-6">
          {wishes.slice(0, wishLimit).map((wish, index) => (
            <WishCard
              key={index}
              name={wish.name}
              message={wish.message}
              createdAt={wish.createdAt}
              data-aos="fade-left"
              data-aos-duration="1000"
            />
          ))}
        </div>
        {wishLimit < wishes.length && (
          <div className="flex justify-center mt-8">
            <button
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
              onClick={loadMoreWishes}
            >
              Load More
            </button>
          </div>
        )}
        <div className="flex justify-center mt-8">
          {!showForm ? (
            <button
              className="bg-zinc-700 hover:bg-zinc-800 text-white font-bold py-2 px-4 rounded flex items-center"
              onClick={makeWish}
            >
              <RiPencilLine className="mr-2" />
              Make a Wish
            </button>
          ) : (
            <form onSubmit={sendWish} className="max-w mx-auto">
              <div className="grid flex-col items-center">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={handleNameChange}
                  className="bg-white border-2 border-gray-300 rounded py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={handleMessageChange}
                  className="bg-white border-2 border-gray-300 rounded py-2 px-4 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  required
                />
                <button
                  type="submit"
                  className="mt-4 bg-zinc-700 hover:bg-zinc-800 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
