import FilterTabs from "./components/FilterTabs";
import Footer from "./components/Footer";
import MenuList from "./components/MenuList";
import Navbar from "./components/Navbar";
import Container from "./components/ui/Container";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* navbar */}
      <Navbar />
      {/* main */}
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
      {/* footer */}
      <Footer />
    </div>
  );
}
