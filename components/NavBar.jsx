import NavItem from './navItem';

export default function Navigation() {
  const navItemNames = [`Home`, `about`, `movies`];
  const navItems = [];

  for (let i = 0; i < navItemNames.length; i++) {
    navItems[i] = <NavItem key={i} id={i} pathName={navItemNames[i]} />;
  }

  return (
    <nav>
      <ul>{navItems}</ul>
    </nav>
  );
}
