import { CustomList } from "~/components/ui/list/CustomList";
import { WELCOME_ITEMS } from "./core/constants/welcome-items.constant";

export function Welcome() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Home!</h1>
        <p className="text-lg text-gray-600">Here are some things to get you started</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Start Guide</h2>
        <CustomList 
          items={WELCOME_ITEMS}
          variation="bordered"
        />
      </div>
    </main>
  );
}
