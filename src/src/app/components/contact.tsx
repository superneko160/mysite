import InputEmail from "./inputEmail";
import Textarea from "./textarea";
import Button from "./button";

export default function Contact() {
  return (
    <div className="py-2">
      <h2 className="text-xl mb-0.5">Contacts</h2>
      <form className="max-w-sm">
        <InputEmail />
        <div className="mb-1">
          <Textarea />
        </div>
        <div className="mb-1">
          <Button text="Send Message" />
        </div>
      </form>
    </div>
  );
}
