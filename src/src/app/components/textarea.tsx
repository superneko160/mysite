export default function Textarea() {
  return (
    <textarea
      className="block h-32 p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
      placeholder="Leave a comment..."
      required
    ></textarea>
  );
}
