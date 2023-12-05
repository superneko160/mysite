import Image from "next/image";

export default function ProfilePicture() {
  return (
    <>
      <Image
        src="/profile_picture.png"
        alt="Profile picture"
        width={200}
        height={200}
        className="rounded-full"
      />
    </>
  );
}
