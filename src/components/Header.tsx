interface HeaderProps {
  addMargin: boolean;
}

const Header = ({ addMargin }: HeaderProps) => (
  <>
    <h1
      className={`text-black text-5xl font-sans font-custom-sans font-semibold flex text-center ${
        addMargin ? "mt-56" : ""
      }`}
    >
      You want repo's.
      <br />
      We got em.
    </h1>
    <h2 className="text-black font-sans font-custom-sans flex mt-4 sm:ml-1 md:ml-0 text-lg text-center">
      Enter a Github username and click Find Code.
      <br />
      We'll handle the rest.
    </h2>
  </>
);

export default Header;
