import styles from "./Menu.module.scss";
import { navMenu } from "./menu.data";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <nav className="mr-auto">
      <ul className={styles.list}>
        {navMenu.map((navItem) => (
          <MenuItem navItem={navItem} key={navItem.title} />
        ))}
      </ul>
    </nav>
  );
};
export default Menu;
