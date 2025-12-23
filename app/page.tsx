import FilterTabs from "./components/menu/FilterTabs";
import MenuList from "./components/menu/MenuList";
import Container from "./components/ui/Container";

export default function Home() {
  return (
    <main>
      <section>
        <Container className="py-10!">
          <div className="flex flex-col gap-10">
            <h1 className="capitalize text-center text-xl sm:text-2xl leading-loose font-extrabold">
              <span className="border-b-4 border-s-4 border-e-4 rounded-full px-4 py-2 border-primary">
                View your favourite meal
              </span>
            </h1>
            <FilterTabs />
            <MenuList />
          </div>
        </Container>
      </section>
    </main>
  );
}
