import { CustomInput } from "~/components/ui/input/CustomInput";
import { CustomButton } from "~/components/ui/button/CustomButton";

export function Welcome() {
  return (
    <main className="">
      <h1>Hello Contacts !!!!!</h1>
      <div className="flex flex-col gap-4 mt-8 max-w-[20rem]">
        <CustomInput placeholder="Name" />
        <CustomInput placeholder="LastName" />
        <CustomButton label="Submit"></CustomButton>
      </div>
    </main>
  );
}
