type ButtonProps = { text: string };

export default function Button({ text }: ButtonProps) {
  return (
    <>
      <button
        type="submit"
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:opacity-90 focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-500 w-full sm:w-fit"
      >
        {text}
      </button>
    </>
  );
}
